import { NETWORK_FILTER_MASK, NetworkFilter } from '../parsing/network-filter';
import { setBit } from '../utils';

function processRegex(r: RegExp): string {
  return `(?:${r.source})`;
}

function escape(s: string): string {
  return `(?:${s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')})`;
}

function setWithDefault<K, V>(map: Map<K, V[]>, key: K, value: V): void {
  let bucket = map.get(key);
  if (bucket === undefined) {
    bucket = [];
    map.set(key, bucket);
  }
  bucket.push(value);
}

function groupBy(
  filters: NetworkFilter[],
  criteria: (filter: NetworkFilter) => string,
): NetworkFilter[][] {
  const grouped: Map<string, NetworkFilter[]> = new Map();
  for (let i = 0; i < filters.length; i += 1) {
    const filter = filters[i];
    setWithDefault(grouped, criteria(filter), filter);
  }
  return [...grouped.values()];
}

function splitBy(
  filters: NetworkFilter[],
  condition: (filter: NetworkFilter) => boolean,
): {
  positive: NetworkFilter[];
  negative: NetworkFilter[];
} {
  const positive: NetworkFilter[] = [];
  const negative: NetworkFilter[] = [];

  for (let i = 0; i < filters.length; i += 1) {
    const filter = filters[i];
    if (condition(filter)) {
      positive.push(filter);
    } else {
      negative.push(filter);
    }
  }

  return {
    negative,
    positive,
  };
}

interface IOptimization {
  description: string;
  groupByCriteria: (filter: NetworkFilter) => string;
  select: (filter: NetworkFilter) => boolean;
  fusion: (filters: NetworkFilter[]) => NetworkFilter;
}

const OPTIMIZATIONS: IOptimization[] = [
  // TODO - add filter deduplication
  {
    description: 'Group idential filter with same mask but different domains in single filters',
    fusion: (filters: NetworkFilter[]) => {
      const domains: Set<number> = new Set();
      const notDomains: Set<number> = new Set();

      for (let i = 0; i < filters.length; i += 1) {
        const { optDomains, optNotDomains } = filters[i];
        if (optDomains !== undefined) {
          optDomains.forEach((d) => {
            domains.add(d);
          });
        }
        if (optNotDomains !== undefined) {
          optNotDomains.forEach((d) => {
            notDomains.add(d);
          });
        }
      }

      return new NetworkFilter({
        ...filters[0],
        optDomains: domains.size > 0 ? new Uint32Array(domains) : undefined,
        optNotDomains: notDomains.size > 0 ? new Uint32Array(notDomains) : undefined,
        rawLine:
          filters[0].rawLine !== undefined
            ? filters.map(({ rawLine }) => rawLine).join(' <+> ')
            : undefined,
      });
    },
    groupByCriteria: (filter: NetworkFilter) =>
      filter.getHostname() + filter.getFilter() + filter.getMask() + filter.getRedirect(),
    select: (filter: NetworkFilter) =>
      !filter.isFuzzy() &&
      !filter.isCSP() &&
      (filter.hasOptDomains() || filter.hasOptNotDomains()),
  },
  {
    description: 'Group simple patterns, into a single filter',
    fusion: (filters: NetworkFilter[]) => {
      const patterns: string[] = [];
      for (let i = 0; i < filters.length; i += 1) {
        const f = filters[i];
        if (f.isRegex()) {
          patterns.push(processRegex(f.getRegex()));
        } else if (f.isRightAnchor()) {
          patterns.push(`${escape(f.getFilter())}$`);
        } else if (f.isLeftAnchor()) {
          patterns.push(`^${escape(f.getFilter())}`);
        } else {
          patterns.push(escape(f.getFilter()));
        }
      }

      return new NetworkFilter({
        ...filters[0],
        mask: setBit(filters[0].mask, NETWORK_FILTER_MASK.isRegex),
        rawLine:
          filters[0].rawLine !== undefined
            ? filters.map(({ rawLine }) => rawLine).join(' <+> ')
            : undefined,
        regex: new RegExp(patterns.join('|')),
      });
    },
    groupByCriteria: (filter: NetworkFilter) => '' + filter.getMask(),
    select: (filter: NetworkFilter) =>
      !filter.isFuzzy() &&
      !filter.hasOptDomains() &&
      !filter.hasOptNotDomains() &&
      !filter.isHostnameAnchor() &&
      !filter.isRedirect() &&
      !filter.isCSP(),
  },
];

/**
 * Fusion a set of `filters` by applying optimizations sequentially.
 */
export default function optimize(filters: NetworkFilter[]): NetworkFilter[] {
  const fused: NetworkFilter[] = [];
  let toFuse = filters;

  OPTIMIZATIONS.forEach(({ select, fusion, groupByCriteria }) => {
    const { positive, negative } = splitBy(toFuse, select);
    toFuse = negative;
    groupBy(positive, groupByCriteria).forEach((group) => {
      if (group.length > 1) {
        fused.push(fusion(group));
      } else {
        toFuse.push(group[0]);
      }
    });
  });

  for (let i = 0; i < toFuse.length; i += 1) {
    fused.push(toFuse[i]);
  }

  return fused;
}
