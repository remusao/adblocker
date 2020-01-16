/*!
 * Copyright (c) 2017-present Cliqz GmbH. All rights reserved.
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */

import { FiltersEngine } from '@cliqz/adblocker';
export { parseFilters } from '@cliqz/adblocker';

export function createEngine(lists: string[], resources: string, options = {}, serialize = false) {
  const engine = FiltersEngine.parse(lists.join('\n'), options);

  engine.updateResources(resources, '');

  return {
    engine,
    serialized: serialize ? engine.serialize() : undefined,
  };
}

export const NANOSECS_PER_SEC = 1e9;

export function getFiltersFromLists(lists: string[]) {
  const filters = [];

  for (let i = 0; i < lists.length; i += 1) {
    const split = lists[i].split(/\n/g);
    for (let j = 0; j < split.length; j += 1) {
      filters.push(split[j]);
    }
  }

  return filters;
}

export const domains500 = [
  'wikipedia.org',
  'amazon.com',
  'reddit.com',
  'xvideos.com',
  'imdb.com',
  'google.com',
  'wikia.com',
  'youtube.com',
  'stackoverflow.com',
  'amazon.de',
  'spiegel.de',
  'github.com',
  'theguardian.com',
  'mail.ru',
  'bbc.co.uk',
  'facebook.com',
  'pornhub.com',
  'microsoft.com',
  'xhamster.com',
  'chaturbate.com',
  'ikea.com',
  'nytimes.com',
  'apple.com',
  'twitter.com',
  'voirfilms.ws',
  'cnn.com',
  'bbc.com',
  'foxnews.com',
  'yandex.ru',
  'imgur.com',
  'gamepedia.com',
  'aliexpress.com',
  'dailymail.co.uk',
  'blogspot.com',
  'rambler.ru',
  'heise.de',
  't-online.de',
  'zone-telechargement1.com',
  'leboncoin.fr',
  'mlomiejdfkolichcflejclcbmpeaniij.',
  'nexusmods.com',
  'amazon.fr',
  'w3schools.com',
  'adobe.com',
  'xnxx.com',
  'tumblr.com',
  '4chan.org',
  'yahoo.com',
  'ebay.com',
  'lequipe.fr',
  'paypal.com',
  'mozilla.org',
  'yaplakal.com',
  'steampowered.com',
  'vseigru.net',
  'nu.nl',
  'amazon.co.uk',
  'twitch.tv',
  'craigslist.org',
  'lenta.ru',
  'wordpress.com',
  'stackexchange.com',
  'instagram.com',
  'coinmarketcap.com',
  'allocine.fr',
  'chip.de',
  'joemonster.org',
  'rt.com',
  'youporn.com',
  'yts.am',
  'nhentai.net',
  'thepiratebay.org',
  'bs.to',
  'booking.com',
  'web.de',
  'bild.de',
  'zeit.de',
  'crunchyroll.com',
  'ebay.de',
  'sourceforge.net',
  'tagesschau.de',
  'onet.pl',
  'zdf.de',
  'office.com',
  'orange.fr',
  'espn.com',
  'gearbest.com',
  'avito.ru',
  'nos.nl',
  'arstechnica.com',
  'myanimelist.net',
  'redtube.com',
  'focus.de',
  'quora.com',
  'sueddeutsche.de',
  'wykop.pl',
  'zerohedge.com',
  'github.io',
  'google.fr',
  'icy-veins.com',
  'breitbart.com',
  'google.de',
  'globo.com',
  'thesaurus.com',
  'rottentomatoes.com',
  'faz.net',
  'deviantart.com',
  'fextralife.com',
  'humblebundle.com',
  'yahoo.co.jp',
  'wp.pl',
  'orf.at',
  'thesimsresource.com',
  'free.fr',
  'jeuxvideo.com',
  'francetvinfo.fr',
  '1337x.to',
  'ghostery.com',
  'programme-tv.net',
  'abc.net.au',
  'n-tv.de',
  'businessinsider.com',
  'torrent9.red',
  'independent.co.uk',
  'bloomberg.com',
  'yourporn.sexy',
  'xda-developers.com',
  'ccleaner.com',
  'ebay-kleinanzeigen.de',
  'wowhead.com',
  'dict.cc',
  'mangakakalot.com',
  'xkcd.com',
  'interia.pl',
  'worldlifestyle.com',
  'ycombinator.com',
  'livejournal.com',
  'samsung.com',
  'seasonvar.ru',
  'medium.com',
  'tripadvisor.com',
  'streamcomplet.me',
  'hm.com',
  'e-hentai.org',
  'politico.com',
  'lesnumeriques.com',
  '01net.com',
  'whatsapp.com',
  'repubblica.it',
  'cnbc.com',
  'thehill.com',
  'spotify.com',
  'wuxiaworld.com',
  'gizmodo.com',
  'computerbild.de',
  'oracle.com',
  'f95zone.com',
  'softonic.com',
  'amazon.in',
  'novinky.cz',
  'curseforge.com',
  'speedtest.net',
  'battle.net',
  'techradar.com',
  'e621.net',
  'askubuntu.com',
  'hurriyet.com.tr',
  'spankbang.com',
  'linkedin.com',
  'nih.gov',
  'gsmarena.com',
  'ivi.ru',
  'nypost.com',
  'dr.dk',
  'wordreference.com',
  'howtogeek.com',
  'pole-emploi.fr',
  'fishki.net',
  'telegraph.co.uk',
  'ebay.co.uk',
  'newegg.com',
  'python.org',
  'ouest-france.fr',
  'pornpics.com',
  'uol.com.br',
  'yggtorrent.com',
  'intel.com',
  'msn.com',
  'definition.org',
  'chase.com',
  'hdrezka.ag',
  'lidl.de',
  'allegro.pl',
  'fanfox.net',
  'walmart.com',
  'amazon.ca',
  'wildberries.ru',
  'lemonde.fr',
  'yelp.com',
  'dropbox.com',
  'wikihow.com',
  'ekstrabladet.dk',
  'historyinorbit.com',
  'stardewvalleywiki.com',
  'dell.com',
  'theatlantic.com',
  'poe.trade',
  'asus.com',
  'hp.com',
  'dwatchseries.to',
  'impots.gouv.fr',
  'accuweather.com',
  'mobafire.com',
  'go.com',
  'service-public.fr',
  'clubic.com',
  'goodreads.com',
  'amazon.it',
  'linternaute.com',
  'gocomics.com',
  'adme.ru',
  'bestbuy.com',
  '.gov.uk',
  'gamespot.com',
  'msk.ru',
  'koreus.com',
  'netflix.com',
  'bt.dk',
  'pathofexile.com',
  'pcgamer.com',
  'tf1.fr',
  'wetter.com',
  'smbc-comics.com',
  'huffingtonpost.fr',
  'genius.com',
  'asos.com',
  'france.tv',
  'wsj.com',
  'stern.de',
  'wordpress.org',
  'filehippo.com',
  'lefigaro.fr',
  'animeflv.net',
  'thechive.com',
  'pinterest.com',
  'onlinevideoconverter.com',
  'nbcnews.com',
  'ign.com',
  'express.co.uk',
  'weather.com',
  'bandcamp.com',
  'steamcommunity.com',
  'bilibili.com',
  'op.gg',
  'decathlon.fr',
  'bahn.de',
  'nyaa.si',
  'getbootstrap.com',
  'costco.com',
  'roblox.com',
  'igg-games.com',
  'liveleak.com',
  'skype.com',
  'cbc.ca',
  'emuparadise.me',
  'etsy.com',
  'indeed.com',
  'tukif.com',
  'kicker.de',
  'boredpanda.com',
  'oglaf.com',
  'pagesjaunes.fr',
  'cbsnews.com',
  'gamestar.de',
  'php.net',
  'lowes.com',
  'engadget.com',
  'cnet.com',
  'epicgames.com',
  'fc2.com',
  'salesforce.com',
  'footmercato.net',
  'commentcamarche.net',
  'mangareader.net',
  'ubuntu.com',
  'filmweb.pl',
  'libertyvf.com',
  'theregister.co.uk',
  'lifehacker.com',
  'udemy.com',
  'guildwars2.com',
  'android.com',
  'champion.gg',
  'championat.com',
  'superuser.com',
  '8muses.com',
  'willhaben.at',
  'lifewire.com',
  'nouvelobs.com',
  'intuit.com',
  'transfermarkt.de',
  'thingiverse.com',
  'skidrowreloaded.com',
  'yggtorrent.is',
  'eurosport.fr',
  'ups.com',
  'gismeteo.ru',
  'tutorialspoint.com',
  'gog.com',
  'cdiscount.com',
  'readms.net',
  'bleacherreport.com',
  'arte.tv',
  'nicovideo.jp',
  'bulbagarden.net',
  'homedepot.com',
  'mvideo.ru',
  'rawstory.com',
  'gmx.net',
  'trend-chaser.com',
  'oui.sncf',
  'blick.ch',
  'porno365.xxx',
  'kotaku.com',
  'ldlc.com',
  'slate.com',
  '9gag.com',
  'wargaming.net',
  'usps.com',
  'probuilds.net',
  'bankofamerica.com',
  'krone.at',
  'torrent9.bz',
  'tvn24.pl',
  'duckduckgo.com',
  'hltv.org',
  'gosuslugi.ru',
  'sportschau.de',
  'videolan.org',
  'knowyourmeme.com',
  'xfinity.com',
  'idealo.de',
  'google.ru',
  'dailymotion.com',
  'super.cz',
  'canada.ca',
  'dailycaller.com',
  'fnac.com',
  'lostfilm.tv',
  'txxx.com',
  'resetera.com',
  'nike.com',
  'jetbrains.com',
  'nvidia.com',
  'bfmtv.com',
  'cda.pl',
  'tut.by',
  'amazon.es',
  'olx.pl',
  'ultimate-guitar.com',
  'habrahabr.ru',
  'dns-shop.ru',
  'thomann.de',
  'amazon.co.jp',
  'washingtonpost.com',
  'sankakucomplex.com',
  'lelscanv.com',
  'kwejk.pl',
  'marketwatch.com',
  'ameli.fr',
  'loverslab.com',
  'techcrunch.com',
  'leroymerlin.fr',
  'verizonwireless.com',
  'daserste.de',
  'rutor.info',
  'liquipedia.net',
  'vporn.com',
  'patreon.com',
  'hulu.com',
  'thesun.co.uk',
  'sme.sk',
  'impress.co.jp',
  'cisco.com',
  'kino-hd1080.ru',
  'wetransfer.com',
  'kickstarter.com',
  'citilink.ru',
  'computerbase.de',
  'movie-blog.org',
  'liberation.fr',
  'mk.ru',
  'meduza.io',
  'mobile.de',
  'wellsfargo.com',
  'mydealz.de',
  'irs.gov',
  'leagueoflegends.com',
  'infobae.com',
  'reverso.net',
  'lenovo.com',
  'slickdeals.net',
  'raspberrypi.org',
  'vimeo.com',
  'expressen.se',
  'glassdoor.com',
  'ashemaletube.com',
  'digitalocean.com',
  'dagbladet.no',
  'discordapp.com',
  'worldoftanks.ru',
  'ssa.gov',
  'laposte.fr',
  '20min.ch',
  'npmjs.com',
  'ixxx.com',
  'onliner.by',
  'apache.org',
  'google.co.uk',
  'explosm.net',
  'cracked.com',
  'baidu.com',
  'vesti.ru',
  'wayfair.com',
  'animevost.org',
  'ledauphine.com',
  'libertyvf.net',
  'livedoor.jp',
  'dealabs.com',
  'europa.eu',
  'uniqlo.com',
  'hln.be',
  'urbandictionary.com',
  'newyorker.com',
  'hitomi.la',
  'makeuseof.com',
  'zone-telechargement1.org',
  'mirror.co.uk',
  'streamable.com',
  'tomsguide.com',
  'cb01.zone',
  'xe.com',
  'fivethirtyeight.com',
  'ants.gouv.fr',
  'french-stream.co',
  'usatoday.com',
  'dmm.co.jp',
  'dhl.de',
  'tripadvisor.fr',
  'deadspin.com',
  'wunderground.com',
  'united.com',
  'vodafone.de',
  'visualstudio.com',
  'extreme-down.im',
  'tube8.com',
  '444.hu',
  'csfd.cz',
  'kinox.to',
  'pcwelt.de',
  'boingboing.net',
  'habr.com',
  'pudelek.pl',
  'cbssports.com',
  'archlinux.org',
  'drudgereport.com',
  'torrent9.blue',
  'shadbase.com',
  'libreoffice.org',
  'readthedocs.io',
  'wired.com',
  'live.com',
  'people.com',
  'hearthpwn.com',
  'motherless.com',
  'labanquepostale.fr',
  'dafont.com',
  'ca.gov',
  'digitaltrends.com',
  'sky.de',
  'att.com',
  'indiatimes.com',
  'jalopnik.com',
  'bbkekonodcdmedgffkkbgmnnekbainbg.',
  'darty.com',
  'thewirecutter.com',
  'instant-gaming.com',
  'sportbox.ru',
  'usnews.com',
  'lifehacker.ru',
  'arduino.cc',
  'allrecipes.com',
  'time.com',
  'gogoanime.se',
  'kinokrad.co',
  '123movieshub.to',
  'mi.com',
  'hubspot.com',
  'marmiton.org',
  'zillow.com',
];
