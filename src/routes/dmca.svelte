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
	<title>DMCA Takedown Request</title>
	<meta name="description" content="Learn more on how we handle DMCA takedown requests." />
	<meta name="og:image" content="/favicon.jpg" />
	<meta name="theme-color" content="#f2f2f2" />
</svelte:head>

<ThemeSwitcher />

<div class="container">
	<h1>WhateverItWorks<span style="color: #4362ff">.</span>org</h1>
	<h2>⚖️ Law Enforcement</h2>
	<p>
		In the event of a subpoena, court order, other legal process, or to exercise our legal rights and/or to defend against legal claims, we may be forced to give applicable information with third-parties. Our sites hosted on our main domain WhateverItWorks.org, operate on servers in Falkenstein, Germany and Helsinki, Finland which is subject to Germany and Finland Law.
		<br/>
		<br/>
         View the <a class="link" href="https://www.whateveritworks.org/privacy" target="_blank">"Personal Data"</a>  section of this policy and our
		<a class="link" href="https://www.whateveritworks.org/transparency" target="_blank">Transparency Report</a>.
	    <br/>
		<br/>
		If you are emailing in regards to an inquiry as a law enforcement agency, please e-mail
		<a class="link" href="mailto:legal@whateveritworks.org" target="_blank">legal@whateveritworks.org</a>.
		<br/>     
	</p>
	<br />
	<br />
		
	<h2>GPG/PGP Public Key For legal@whateveritworks.org - Send us your e-mail securely</h2>
                <br />
                        <pre>
                         -----BEGIN PGP PUBLIC KEY BLOCK-----

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
iZGXrbxHPQ==
=ZJCb
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
