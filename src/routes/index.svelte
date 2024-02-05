<script lang="ts">
	import { browser } from '$app/env';
	import Service from '../components/Service.svelte';
	import ThemeSwitcher from '../components/ThemeSwitcher.svelte';

	if (browser) {
		if (window.localStorage.getItem('theme') === undefined) {
			window.localStorage.setItem('theme', 'dark');
			window.location.reload();
		}
	}

	let frontends = [
		{
                        name: 'hckrnws',
                        desc: 'A custom frontend for a better reading experience of HackerNews.',
                        url: 'https://hack.whateveritworks.org',
                        src: 'https://github.com/rajatkulkarni95/hckrnws',
                        iconUrl: 'https://raw.githubusercontent.com/rajatkulkarni95/hckrnws/main/public/favicon.svg',
                        statusId: 'hckrnws'
                },
		{
                        name: 'Laboratory',
                        desc: 'An alternative frontend for GitLab.',
                        url: 'https://gl.whateveritworks.org',
                        src: 'https://git.vitali64.duckdns.org/utils/laboratory.git/about/',
                        iconUrl: 'https://git.vitali64.duckdns.org/utils/laboratory.git/plain/static/logo.png',
                        statusId: 'laboratory'
                },
		{
                        name: 'ReQuiz',
                        desc: 'An alternative frontend for Quizlet.',
                        url: 'https://requiz.net',
                        src: '',
                        iconUrl: 'https://requiz.net/static/favicon.ico',
                        statusId: 'requiz'
                },
		{
                        name: 'wtfismyip',
                        desc: 'Tells you WTF your IP address is',
                        url: '',
                        src: 'https://gitlab.com/wtfismyip/wtfismyip',
                        iconUrl: 'https://gitlab.com/wtfismyip/wtfismyip/-/raw/master/wtf/static/static/favicon.ico?ref_type=heads',
                        statusId: 'wtfismyip'
                },
		{
                        name: 'dumb',
                        desc: 'An alternative frontend for Genius focused on privacy.',
                        url: 'https://sing.whateveritworks.org',
                        src: 'https://github.com/rramiachraf/dumb',
                        iconUrl: 'https://raw.githubusercontent.com/rramiachraf/dumb/main/static/logo.svg',
                        statusId: 'dumb'
                },
		{
                        name: 'Intellectual',
                        desc: 'An alternative frontend for Genius focused on privacy.',
                        url: 'https://sing2.whateveritworks.org',
                        src: 'https://github.com/Insprill/intellectual',
                        iconUrl: '',
                        statusId: 'intellectual'
                },
		{
                        name: 'Binternet',
                        desc: 'An alternative frontend for Pinterest focused on privacy.',
                        url: 'https://pin.whateveritworks.org',
                        src: 'https://github.com/WhateverItWorks/Binternet-Reworked',
                        iconUrl: 'https://raw.githubusercontent.com/WhateverItWorks/Binternet-Reworked/main/favicon.png',
                        statusId: 'binternet'
                },
		{
                        name: 'Chatpad',
                        desc: 'An alternative frontend for ChatGPT focused on privacy.',
                        url: 'https://ai.whateveritworks.org',
                        src: 'https://github.com/deiucanta/chatpad',
                        iconUrl: 'https://raw.githubusercontent.com/deiucanta/chatpad/main/src/assets/favicon.png',
                        statusId: 'chatpad'
                },
		{
                        name: 'LibreOdysee',
                        desc: 'An alternative frontend for LBRY/Odysee.',
                        url: 'https://watch.whateveritworks.org',
                        src: 'https://github.com/WhateverItWorks/LibreOdysee',
                        iconUrl: 'https://watch.whateveritworks.org/static/favicon/favicon.ico',
                        statusId: 'libreodysee'
                },
		{
                        name: 'SafeTwitch',
                        desc: 'A privacy respecting frontend for twitch.tv',
                        url: 'https://stream.whateveritworks.org',
                        src: 'https://codeberg.org/dragongoose/safetwitch',
                        iconUrl: 'https://stream.whateveritworks.org/favicon-32x32.png',
                        statusId: 'safetwitch'
                },
		{
                        name: 'Twineo',
                        desc: 'An Alternative front-end to Twitch',
                        url: 'https://twineo.whateveritworks.org',
                        src: 'https://codeberg.org/CloudyyUw/twineo',
                        iconUrl: 'https://codeberg.org/CloudyyUw/twineo/src/branch/main/public/iconamoon_search.svg',
                        statusId: 'twineo'
                },
		{
                        name: 'Piped',
                        desc: 'An alternative frontend for YouTube.',
                        url: 'https://piped.whateveritworks.org',
                        src: 'https://github.com/TeamPiped/Piped',
                        iconUrl: 'https://raw.githubusercontent.com/TeamPiped/Piped/master/public/favicon.ico',
                        statusId: 'piped'
                },
		{
			name: 'Invidious',
			desc: 'An alternative frontend for YouTube.',
			url: 'https://yt.whateveritworks.org',
			src: 'https://github.com/iv-org/invidious',
			iconUrl: 'https://yt.whateveritworks.org/favicon-32x32.png',
			statusId: 'invidious'
		},
		{
			name: 'Nitter',
			desc: 'An alternative frontend for Twitter.',
			url: 'https://tweet.whateveritworks.org',
			src: 'https://github.com/zedeus/nitter/tree/guest_accounts',
			iconUrl: 'https://tweet.whateveritworks.org/logo.png',
			statusId: 'nitter'
		},
		{
			name: 'Hyperpipe',
			desc: 'An alternative frontend for YouTube Music.',
			url: 'https://listen.whateveritworks.org',
			src: 'https://codeberg.org/Hyperpipe/Hyperpipe',
			iconUrl: 'https://listen.whateveritworks.org/favicon.svg',
			statusId: 'hyperpipe'
		},
		{
			name: 'Libreddit',
			desc: 'An alternative frontend for Reddit',
			url: 'https://discuss.whateveritworks.org',
			src: 'https://github.com/libreddit/libreddit',
			iconUrl: 'https://discuss.whateveritworks.org/favicon.ico',
			statusId: 'libreddit'
		},
                {
                        name: 'Teddit',
                        desc: 'An alternative Reddit front-end focused on privacy',
                        url: 'https://discuss-old.whateveritworks.org',
                        src: 'https://github.com/WhateverItWorks/teddit-reworked',
                        iconUrl: 'https://discuss-old.whateveritworks.org/favicon.ico',
                        statusId: 'teddit'
                },
		{
			name: 'Proxitok',
			desc: 'An alternative frontend for Tiktok',
			url: 'https://cringe.whateveritworks.org',
			src: 'https://github.com/pablouser1/ProxiTok',
			iconUrl: 'https://cringe.whateveritworks.org/favicon-32x32.png',
			statusId: 'proxitok'
		},
		{
                        name: 'Pixivfe',
                        desc: 'A privacy respecting frontend for Pixiv (WIP)',
                        url: 'https://art.whateveritworks.org',
                        src: 'https://codeberg.org/VnPower/pixivfe',
                        iconUrl: 'https://art.whateveritworks.org/favicon.ico',
                        statusId: 'art'
                },
		{
                        name: 'Rimgo',
                        desc: 'An alternative frontend for Imgur.',
                        url: 'https://rimgo.whateveritworks.org',
                        src: 'https://codeberg.org/rimgo/rimgo',
                        iconUrl: 'https://rimgo.whateveritworks.org/static/favicon/favicon.ico',
                        statusId: 'rimgo'
                },
		{
                        name: 'Libremdb',
                        desc: 'A free & open source IMDb front-end.',
                        url: 'https://binge.whateveritworks.org',
                        src: 'https://github.com/zyachel/libremdb',
                        iconUrl: 'https://binge.whateveritworks.org/favicon.ico',
                        statusId: 'libremdb'
                },
		{
                        name: 'Quetre',
                        desc: 'A libre front-end for Quora',
                        url: 'https://questions.whateveritworks.org',
                        src: 'https://github.com/zyachel/quetre',
                        iconUrl: 'https://questions.whateveritworks.org/favicon.ico',
                        statusId: 'quetre'
                },
		{
                        name: 'BreezeWiki',
                        desc: 'An alternative frontend for Fandom.',
                        url: 'https://breeze.whateveritworks.org',
                        src: 'https://gitdab.com/cadence/breezewiki',
                        iconUrl: 'https://breeze.whateveritworks.org/static/breezewiki-favicon.svg',
                        statusId: 'breezewiki'
                },
		{
                        name: 'AnonymousOverflow',
                        desc: 'An alternative frontend for StackOverFlow & StackExchange.',
                        url: 'https://code.whateveritworks.org',
                        src: 'https://github.com/httpjamesm/AnonymousOverflow',
                        iconUrl: 'https://code.whateveritworks.org/static/codecircles.png',
                        statusId: 'code'
                },
		{
                        name: 'Gothub',
                        desc: 'An alternative front-end for GitHub written with Go.',
                        url: 'https://gh.whateveritworks.org',
                        src: 'https://codeberg.org/gothub/gothub',
                        iconUrl: 'https://gh.whateveritworks.org/favicon.ico',
                        statusId: 'gothub'
                },
		{
                        name: 'BiblioReads',
                        desc: 'An Alternative Private Goodreads Front-End.',
                        url: 'https://read.whateveritworks.org',
                        src: 'https://github.com/nesaku/BiblioReads',
                        iconUrl: 'https://read.whateveritworks.org/favicon-32x32.png',
                        statusId: 'read'
                },
		{
                        name: 'Neuters',
                        desc: 'An alternative frontend for Reuters',
                        url: 'https://news.whateveritworks.org',
                        src: 'https://github.com/HookedBehemoth/neuters',
                        iconUrl: '',
                        statusId: 'news'
                },
		{
                        name: 'Wikiless',
                        desc: 'A free open source alternative Wikipedia front-end focused on privacy.',
                        url: 'https://wikiless.whateveritworks.org',
                        src: 'https://github.com/Metastem/wikiless',
                        iconUrl: 'https://wikiless.whateveritworks.org/static/favicon/wikipedia.ico',
                        statusId: 'wikiless'
                },
		
	];
	let exchange = [
		{
                        name: 'Send',
                        desc: 'Simple, private end-to-end encrypted file sharing.',
                        url: 'https://send.whateveritworks.org',
                        src: 'https://github.com/WhateverItWorks/send-reworked',
                        iconUrl: 'https://send.whateveritworks.org/favicon-32x32.c470c36d.png',
                        statusId: 'send'
                },
		{
                        name: 'Hat.sh',
                        desc: 'Encrypt and Decrypt files securely in your browser.',
                        url: 'https://hat.whateveritworks.org',
                        src: 'https://github.com/WhateverItWorks/hat.sh-reworked',
                        iconUrl: 'https://hat.whateveritworks.org/favicon.ico',
                        statusId: 'hat'
                },
		{
                        name: 'Privatebin',
                        desc: 'A minimalist, open source online pastebin where the server has zero knowledge of pasted data. Data is encrypted/decrypted in the browser using 256 bits AES.',                  
			url: 'https://bin.whateveritworks.org',
                        src: 'https://github.com/PrivateBin/PrivateBin',
                        iconUrl: 'https://raw.githubusercontent.com/PrivateBin/PrivateBin/master/img/favicon.ico',
                        statusId: 'bin'
                }
	];

	let productivity = [
                {
                        name: 'LanguageTool',
                        desc: 'LanguageTool is a free grammar checker and paraphraser for English, Spanish, and 20 other languages. Instantly check your text for grammar and style mistakes.',
                        url: 'https://langapi.whateveritworks.org/v2',
                        src: 'https://github.com/WhateverItWorks/LanguageTool',
                        iconUrl: 'https://raw.githubusercontent.com/WhateverItWorks/LanguageTool/main/favicon-32x32.webp',
                        statusId: 'lang'
                },
		{
                        name: 'Joplin Cloud Sync (BETA)',
                        desc: 'The secure end-to-end encrypted note taking and to-do app with synchronisation capabilities for Windows, macOS, Linux, Android and iOS.',
                        url: 'https://notanote.org',
                        src: 'https://github.com/laurent22/joplin',
                        iconUrl: 'https://raw.githubusercontent.com/laurent22/joplin/dev/Assets/JoplinIcon.svg',
                        statusId: 'note'
                },
		{
                        name: 'Forgejo',
                        desc: 'A painless, self-hosted Git service',
                        url: 'https://git.whateveritworks.org',
                        src: 'https://codeberg.org/forgejo/forgejo',
                        iconUrl: 'https://git.whateveritworks.org/assets/img/favicon.svg',
                        statusId: 'git'
                },
		{
                        name: 'Mat2-Web',
                        desc: 'mat2 is a metadata removal tool, supporting a wide range of commonly used file formats, written in python3.',
                        url: 'https://mat.whateveritworks.org',
                        src: 'https://0xacab.org/jvoisin/mat2-web',
                        iconUrl: 'https://0xacab.org/uploads/-/system/project/avatar/1677/mat2.png?width=64',
                        statusId: 'exif'
                },
		{
                        name: 'SearXNG',
                        desc: 'SearXNG is a free internet metasearch engine which aggregates results from various search services and databases. Users are neither tracked nor profiled.',
                        url: 'https://search.whateveritworks.org',
                        src: 'https://github.com/searxng/searxng',
                        iconUrl: 'https://search.whateveritworks.org/static/themes/simple/img/favicon.svg',
                        statusId: 'searxng'
                }
        ];

	let network = [
		{
                        name: 'Duplicati',
                        desc: 'Store securely encrypted backups in the cloud!',
                        url: 'https://recovery.whateveritworks.org',
                        src: 'https://github.com/duplicati/duplicati',
                        iconUrl: 'https://raw.githubusercontent.com/duplicati/duplicati/master/Assets/application%20icon/application_icon.ico',
                        statusId: 'backup'
                },
                {
          		name: 'Portainer',
                        desc: 'Making Docker and Kubernetes management easy.',
                        url: 'https://dock.whateveritworks.org',
                        src: 'https://github.com/portainer/portainer',
                        iconUrl: 'https://dock.whateveritworks.org/2dcfc527d067d4ae3424.png',
                        statusId: 'portainer'         
                },
		{
                        name: 'IT-Tools',
                        desc: 'Collection of handy online tools for developers, with great UX.',
                        url: 'https://developer.whateveritworks.org',
                        src: 'https://github.com/CorentinTh/it-tools',
                        iconUrl: 'https://developer.whateveritworks.org/favicon.ico',
                        statusId: 'it'
                },
        ];
	let security = [
                {
                        name: 'S̶e̶s̶s̶i̶o̶n̶ ̶O̶p̶e̶n̶ ̶G̶r̶o̶u̶p̶',
                        desc: 'Session open groups servers (SOGS) are group chat servers that can host thousands of chat participants.',
                        url: 'https://session.whateveritworks.org',
                        src: 'https://docs.oxen.io/oxen-docs/products-built-on-oxen/session/guides/open-group-setup',
                        iconUrl: 'https://raw.githubusercontent.com/oxen-io/session-desktop/clearnet/images/session/session_icon.png',
                        statusId: 'session'
                },
                {
                        name: 'Vaultwarden',
                        desc: 'An End-to-End Encrypted Unofficial Bitwarden compatible server written in Rust, formerly known as bitwarden_rs.',
                        url: 'https://notavault.net',
                        src: 'https://github.com/dani-garcia/vaultwarden',
                        iconUrl: 'https://raw.githubusercontent.com/dani-garcia/vaultwarden/main/resources/vaultwarden-icon.svg',
                        statusId: 'vault'
                },
        ];
</script>
<svelte:head>
	<title>WhateverItWorks.org - Premium FOSS instances for all</title>
	<meta name="description" content="Premium self-hosted instances of popular frontends. No ads, no trackers, just content."/>
	<meta name="og:image" content="/favicon.jpg"/>
	<meta name="theme-color" content="#f2f2f2"/>
</svelte:head>
<ThemeSwitcher/>

<div class="container">
	<h1>whateveritworks<span style="color: #4362ff">.</span>org</h1>
	<h2>Premium FOSS instances for all.</h2>
	<p>WhateverItWorks is a collection of <b>speedy and reliable</b> self-hosted instances of popular FOSS projects, like Piped, Nitter and Hyperpipe. Our growing library focuses on alternatives to privacy invasive services, like YouTube and Twitter.</p>
	<p>Want to learn more about privacy?, Go check out our <a class="link" href="https://blog.whateveritworks.org" target="_blank">Blog.</a>
        <p>Please support our craft for making the world a better place for privacy. <a class="link" href="https://www.whateveritworks.org/donate" target="_blank">Support a Calls</a>
	<p>Have questions or feedback? Contact the admin via <a class="link" href="https://www.whateveritworks.org/email" target="_blank">E-mail</a>
	or
	<span class="link" on:click={() => { try { navigator.permissions.query({ name: 'clipboard-write' }).then((result) => { if (result.state == 'granted' || result.state == 'prompt') { navigator.clipboard .writeText('05e1705906c05ac69fdac6d19ad3f0b79149dec850304caba737027de42c30a050') .then(function (x) { alert('Session ID was beamed to your device. Paste away!'); }); } else { try { navigator.clipboard .writeText('05e1705906c05ac69fdac6d19ad3f0b79149dec850304caba737027de42c30a050') .then(function (x) { alert( "Whoops, we're not sure if this copied in your browser. Here's the ID just in case: 05e1705906c05ac69fdac6d19ad3f0b79149dec850304caba737027de42c30a050"); }); } catch (e) { alert( "For some reason we couldn't copy the Session ID to your clipboard. Here's the ID: 05e1705906c05ac69fdac6d19ad3f0b79149dec850304caba737027de42c30a050"); } } }); } catch (e) { navigator.clipboard .writeText('05e1705906c05ac69fdac6d19ad3f0b79149dec850304caba737027de42c30a050') .then(function (x) { alert('Session ID was beamed to your device. Paste away!'); }); } }}>Session</span>. Be sure to follow @WhateverItWorks on <a rel="me" class="link" href="" target="_blank">Mastodon</a>.</p>

	<h3>🖧 Network & System Administration</h3>
        <div class="services">
                {#each network as service}
                        <Service {...service} />
                {/each}
        </div>
	<br>
	<br>
	<h3>🛡️  Security & Data Protection</h3>
        <div class="services">
                {#each security as service}
                        <Service {...service} />
                {/each}
        </div>
	<br>
	<br>
	<h3>🎞️  Alternative Frontends</h3>
	<p>All our main alternative frontends proxy your requests through our servers in Iceland, Germany, and Finland, making you much harder to track by these companies. </p>
	<div class="services">
		{#each frontends as service}
			<Service {...service} />
		{/each}
	</div>
	<br>
	<br>
	<h3>🏢 Office & Productivity</h3>
        <div class="services">
                {#each productivity as service}
                        <Service {...service} />
                {/each}
        </div>
	<br>
	<br>
	<h3>🗄️  Data Exchange</h3>
	<div class="services">
		{#each exchange as service}
			<Service {...service} />
		{/each}
	</div>

	<p class="additional">
		View our
                <a class="link" href="https://www.whateveritworks.org/data" target="_blank">Data Protection Notice</a>,
                <a class="link" href="https://www.whateveritworks.org/impressum" target="_blank">Imprint</a>,
		<a class="link" href="https://www.whateveritworks.org/privacy" target="_blank">Privacy Policy</a>,
		<a class="link" href="https://www.whateveritworks.org/security" target="_blank">Security Policy</a>,
                <a class="link" href="https://www.whateveritworks.org/terms" target="_blank">Terms and Conditions</a>,
                <a class="link" href="https://www.whateveritworks.org/bandwidth" target="_blank">Bandwidth Policy</a>,
	        <a class="link" href="https://www.whateveritworks.org/refund" target="_blank">Refund Policy</a>,
	        <a class="link" href="https://www.whateveritworks.org/transparency" target="_blank" rel="noopener noreferrer">Transparency Report</a>,
		<a class="link" href="https://www.whateveritworks.org/warrant" target="_blank" rel="noopener noreferrer">Warrant Canary</a>,
		<a class="link" href="https://status.whateveritworks.org/status/whatever" target="_blank" rel="noopener noreferrer">Status</a>,
		<a class="link" href="https://www.whateveritworks.org/dmca" target="_blank" rel="noopener noreferrer">DMCA Takedown Request</a>,
		<a class="link" href="https://www.whateveritworks.org/email" target="_blank" rel="noopener noreferrer">PGP/GPG</a>, 
                <a class="link" href="https://www.whateveritworks.org/press.zip" target="_blank" rel="noopener noreferrer">Press Kit</a>,
		and this site's
		<a class="link" href="https://github.com/WhateverItWorks/whateveritworks.org-launchpad" target="_blank" rel="noopener noreferrer">Source Code</a>.</p>

	<p class="credit">
		Website made with ❤️ by <a class="link" href="https://xbdm.fun" target="_blank"
			>xbdm</a>
		<br>
		Original Source Code made with ❤️ by <a class="link" href="https://github.com/httpjamesm/whatever.social-launchpad" target="_blank"
			>http.james</a>
	</p>
</div>

<style lang="scss">
	:global(body) {
		display: flex;
		justify-content: center;
	}

	.container {
		width: 30rem;
		padding-top: 1rem;

		@media only screen and (max-width: 800px) {
			padding: 1rem;
			box-sizing: border-box;
		}

		.services {
			display: flex;
			flex-wrap: wrap;
		}

		.additional {
			font-size: 0.9rem;
		}

		.credit {
			font-size: 0.9rem;
		}
	}
</style>
