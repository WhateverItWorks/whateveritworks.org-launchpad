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
	<title>Help Pay For Domains & Server Cost</title>
	<meta name="description" content="WhateverItWorks's Donations." />
	<meta name="og:image" content="/favicon.jpg" />
	<meta name="theme-color" content="#f2f2f2" />
</svelte:head>

<ThemeSwitcher />

	<center>
	<h4>WhateverItWorks<span style="color: #4362ff">.</span>org</h4>
	<h2>Donations:</h2>
	<p>
	As a one man re-learning developer, mounting server costs may become a problem in the future. If you'd like to support
               this project's growth, please consider donating via
	<span
			class="link"
			on:click={() => {
				try {
					navigator.permissions.query({ name: 'clipboard-write' }).then((result) => {
						if (result.state == 'granted' || result.state == 'prompt') {
							navigator.clipboard
								.writeText(
									'45K3QyhGGysAGDvFhGnYne3qcajeGmjRXXGZ8p3LeWBxFgiDkZ7XhLuNxDB5QsjS8ySQtHmjGaoWc6Vg5wtfaPmoCHRDmC4'
								)
								.then(function (x) {
									alert('The Monero address was beamed to your device. Paste away!');
								});
						} else {
							try {
								navigator.clipboard
									.writeText(
										'45K3QyhGGysAGDvFhGnYne3qcajeGmjRXXGZ8p3LeWBxFgiDkZ7XhLuNxDB5QsjS8ySQtHmjGaoWc6Vg5wtfaPmoCHRDmC4'
									)
									.then(function (x) {
										alert(
											"Whoops, we're not sure if this copied in your browser. Here's the address just in case: 45K3QyhGGysAGDvFhGnYne3qcajeGmjRXXGZ8p3LeWBxFgiDkZ7XhLuNxDB5QsjS8ySQtHmjGaoWc6Vg5wtfaPmoCHRDmC4"
										);
									});
							} catch (e) {
								alert(
									"For some reason we couldn't copy the Monero address to your clipboard. Here's the ID: 45K3QyhGGysAGDvFhGnYne3qcajeGmjRXXGZ8p3LeWBxFgiDkZ7XhLuNxDB5QsjS8ySQtHmjGaoWc6Vg5wtfaPmoCHRDmC4"
								);
							}
						}
					});
				} catch (e) {
					navigator.clipboard
						.writeText(
							'45K3QyhGGysAGDvFhGnYne3qcajeGmjRXXGZ8p3LeWBxFgiDkZ7XhLuNxDB5QsjS8ySQtHmjGaoWc6Vg5wtfaPmoCHRDmC4'
						)
						.then(function (x) {
							alert('The Monero address was beamed to your device. Paste away!');
						});
				}
			}}>Monero</span
		>.
</center>
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
