<script lang="ts">
	import Service from '../components/Service.svelte';
	import ThemeSwitcher from '../components/ThemeSwitcher.svelte';
	import { browser } from '$app/env';

	if (browser) {
		if (window.localStorage.getItem('theme') === undefined) {
			window.localStorage.setItem('theme', 'dark');
			window.location.reload();
		}
	}
</script>

<svelte:head>
	<title>Contact Us</title>
	<meta name="description" content="WhateverItWorks's E-mail & GPG/PGP Public Key." />
	<meta name="og:image" content="/favicon.jpg" />
	<meta name="theme-color" content="#f2f2f2" />
</svelte:head>

<ThemeSwitcher />

<div class="container">
	<h1>WhateverItWorks<span style="color: #4362ff">.</span>org</h1>
	<h2>Contact us via E-mail</h2>
	<p>
		All e-mails will be received in the same inbox, but choosing the right address will help us
		distinguish the nature of the request more easily.
		<br />
		<br />
		Feel free to contact the admin for general inquiries and issues at
		<a class="link" href="mailto:support@whateveritworks.org" target="_blank">support@whateveritworks.org</a>
	</p>
	<br />
	<br />
		<h2>GPG/PGP Public Key For support@whateveritworks.org - Send us your e-mail securely</h2>
		<br />
			<pre>
	                 -----BEGIN PGP PUBLIC KEY BLOCK-----

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
DeS+e39EfvE+
=AXv8
-----END PGP PUBLIC KEY BLOCK-----
			</pre>
	<br>
	<br>

	<h2>GPG/PGP Public Key For privacy@whateveritworks.org - Send us your e-mail securely</h2>
		<br />
			<pre>
			-----BEGIN PGP PUBLIC KEY BLOCK-----

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
k0odXpYzb0tt
=bUTD
-----END PGP PUBLIC KEY BLOCK-----
			</pre>

</div>

<style lang="scss">
	:global(body) {
		display: flex;
		justify-content: center;
	}

	.container {
		width: 30rem;
		padding-top: 1rem;
		text-align: left;

		@media only screen and (max-width: 800px) {
			padding: 1rem;
			box-sizing: border-box;
		}
	}

	.container pre {
		font-size: 70%;
	}
</style>
