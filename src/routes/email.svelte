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
		<br />
		<br />
		If you are emailing in regards to an inquiry as a law enforcement agency, please e-mail
		<a class="link" href="mailto:legal@whateveritworks.org" target="_blank">legal@whateveritworks.org</a>.
	</p>
	<br />
	<br />
		<h2>GPG/PGP Public Key - Send us your e-mail securely</h2>
		<br />
			<pre>

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
