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

	let socialServices = [
		{
			name: 'Invidious',
			desc: 'An alternative frontend for YouTube.',
			url: 'https://yt.whateveritworks.org',
			src: 'https://github.com/iv-org/invidious',
			iconUrl: 'https://yt.whateveritworks.org/favicon.ico',
			statusId: 'watch'
		},
		{
			name: 'Nitter',
			desc: 'An alternative frontend for Twitter.',
			url: 'https://tweet.whateveritworks.org',
			src: 'https://github.com/zedeus/nitter',
			iconUrl: 'https://tweet.whateveritworks.org/favicon.ico',
			statusId: 'tweet'
		},
		{
			name: 'Hyperpipe',
			desc: 'An alternative frontend for YouTube Music.',
			url: 'https://listen.whateveritworks.org',
			src: 'https://codeberg.org/Hyperpipe/Hyperpipe',
			iconUrl: 'https://listen.whateveritworks.org/favicon.svg',
			statusId: 'listen'
		},
		{
			name: 'Libreddit',
			desc: 'An alternative frontend for Reddit',
			url: 'https://discuss.whateveritworks.org',
			src: 'https://github.com/libreddit/libreddit',
			iconUrl: 'https://discuss.whateveritworks.org/logo.png',
			statusId: 'libreddit'
		},
		{
			name: 'Proxitok',
			desc: 'An alternative frontend for Tiktok',
			url: 'https://cringe.whateveritworks.org',
			src: 'https://github.com/pablouser1/ProxiTok',
			iconUrl: 'https://raw.githubusercontent.com/pablouser1/ProxiTok/master/favicon.ico',
			statusId: 'proxitok'
		}
	];

	let socialNetworkServices = [
		{
			// add here
		}
	];

	let tinfoilServices = [
		{
			
		}
	];
</script>

<svelte:head>
	<title>WhateverItWorks.org - Premium FOSS instances for all</title>
	<meta
		name="description"
		content="Premium self-hosted instances of popular frontends. No ads, no trackers, just content."
	/>
	<meta name="og:image" content="/favicon.jpg" />
	<meta name="theme-color" content="#f2f2f2" />
</svelte:head>

<ThemeSwitcher />


<div class="container">
	<h1>whateveritworks<span style="color: #4362ff">.</span>org</h1>
	<h2>Premium FOSS instances for all.</h2>
	<p>
		WhateverItWorks is a collection of <b>speedy and reliable</b> self-hosted instances of popular FOSS
		projects, like Piped, Nitter and Hyperpipe. Our growing library focuses on alternatives to privacy
		invasive services, like YouTube and Twitter.
	</p>

	<p>
		Have questions or feedback? Contact the admin via <a
			class="link"
			href="https://whateveritworks.org/email"
			target="_blank">E-mail</a
		>
		or
		<span
			class="link"
			on:click={() => {
				try {
					navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
						if (result.state == 'granted' || result.state == 'prompt') {
							navigator.clipboard
								.writeText('')
								.then(function (x) {
									alert('Session ID was beamed to your device. Paste away!');
								});
						} else {
							try {
								navigator.clipboard
									.writeText('')
									.then(function (x) {
										alert(
											"Whoops, we're not sure if this copied in your browser. Here's the ID just in case: "
										);
									});
							} catch (e) {
								alert(
									"For some reason we couldn't copy the Session ID to your clipboard. Here's the ID: "
								);
							}
						}
					});
				} catch (e) {
					navigator.clipboard
						.writeText('0588cff4c1a032b40514e8c9fb1a52124e9865953c0dd052563dce47a8c727256e')
						.then(function (x) {
							alert('Session ID was beamed to your device. Paste away!');
						});
				}
			}}>Session</span
		>. Be sure to follow @WhateverItWorks on <a 
		   	rel="me"
		   	class="link"
			href="https://social.whateveritworks.org/@WhateverItWorks"
			target="_blank">Mastodon</a
		   >.
	</p>

	<h3>Alternative Frontends</h3>
	<p>
		All our main alternative frontends proxy your requests through our server in Germany and Finland, making you much
		harder to track by these companies.
	</p>
	<div class="services">
		{#each socialServices as service}
			<Service {...service} />
		{/each}
	</div>

	<!--	<h3>Social Networks</h3>
	<div class="services">
		{#each socialNetworkServices as service}
			<Service {...service} />
		{/each}
	</div>
	<br /> -->

	<br />
	

	<br />
	<br />
	<h4>Help keep the project alive</h4>
	<p>
		As a 1 man dev, mounting server costs may become a problem in the future. If you'd like to support
		this project's growth, please consider donating via 
		
		<span
			class="link"
			on:click={() => {
				try {
					navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
						if (result.state == 'granted' || result.state == 'prompt') {
							navigator.clipboard
								.writeText(
									''
								)
								.then(function (x) {
									alert('The Monero address was beamed to your device. Paste away!');
								});
						} else {
							try {
								navigator.clipboard
									.writeText(
										''
									)
									.then(function (x) {
										alert(
											"Whoops, we're not sure if this copied in your browser. Here's the address just in case: "
										);
									});
							} catch (e) {
								alert(
									"For some reason we couldn't copy the Monero address to your clipboard. Here's the ID: "
								);
							}
						}
					});
				} catch (e) {
					navigator.clipboard
						.writeText(
							''
						)
						.then(function (x) {
							alert('The Monero address was beamed to your device. Paste away!');
						});
				}
			}}>Monero</span
		>.
	</p>
	<br />
	<p class="additional">
		View our
		<a class="link" href="https://whateveritworks.org/privacy" target="_blank">Privacy Policy</a>,
		<a
			class="link"
			href="https://whateveritworks.org/transparency"
			target="_blank"
			rel="noopener noreferrer">Transparency Report</a
		>
		and this site's
		<a
			class="link"
			href="https://github.com/WhateverItWorks/whateveritworks.org-launchpad"
			target="_blank"
			rel="noopener noreferrer">Source Code</a
		>
	</p>

	<p class="credit">
		Website made with ❤️ by <a class="link" href="https://xbdm.fun" target="_blank"
			>xbdm</a
		>
	</p>
	<p class="credit">
		Original Source Code made with ❤️ by <a class="link" href="https://github.com/httpjamesm/whatever.social-launchpad" target="_blank"
			>http.james</a
		>
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
