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
	<title>Privacy Policy</title>
	<meta name="description" content="Learn more about how we protect your privacy" />
	<meta name="og:image" content="/favicon.jpg" />
	<meta name="theme-color" content="#f2f2f2" />
</svelte:head>

<ThemeSwitcher />

<div class="container">
	<h1>WhateverItWorks<span style="color: #4362ff">.</span>org</h1>
	<h2>Privacy Policy</h2>
	<p>
		"We", "our" and "us" refers to WhateverItWorks.org, WhateverItWorks.net, WhateverItWorks.us, WhateverItWorks.uk, and WhateverItWorks.cool  maintainers and/or
		developers. "You" refers to you as the user of our services.
		<br />
		<br />
		WhateverItWorks is committed to giving users more control over their digital life. This is why we
		take steps to help ensure we are providing a private and secure experience while you browse your
		favorite social media. This policy outlines important details such as what we store, what you will
		need to consult third parties for, and situations where we cannot protect you.
		<br />
		<br />
		This policy applies to all WhateverItWorks sites, found at https://whateveritworks.org, https://whateveritworks.net, https://whateveritworks.us, https://whateveritworks.uk, https://whateveritworks.cool
		and all their subdomains. Some sections of this policy may be specific to one of our services, in
		which case it is specified. By using our services, you are agreeing to this policy.
		<br /> <br />
		Last updated: July 22, 2023
	</p>
	<br />
	<br />
	<h2>👤 Personal Data</h2>
	<p>
		While visiting our sites: The logging done on our sites is minimal to keep the experience
		private. For example, our NGINX (A service that we use on our server) logs are kept disabled.
		However, this may not always be the case. In the event of a critical system error or an attack
		on our services, such as a DDoS, it may be necessary to temporarily enable logs to diagnose and
		remedy the issue. In scenarios such as these, logs will be purged as soon as the issue is dealt
		with. If you are found to be engaging in activities that harm our services, such as spamming,
		DDoS or brute-force attacks, your IP address may be stored permanently to protect us, our
		services and other users of our services. View the "Law Enforcement" section of this policy to
		see how we may be forced to enable them in other situations. An NGINX log, in the duration that
		its stored, may include your IP address, user agent, and a timestamp along with your web
		request. See the "Third-parties providing Technical Services" section of this policy.
		<br />
		<br />
		Information you provide to us: Usernames are stored for the services they apply to. Your e-mail address
		is received by us when you choose to contact us via e-mail. Your Session, Signal, Matrix, XMPP, and or any other Messenger "ID" is received
		by us when you choose to contact us via our contact methods. No other identifiable information is provided by
		you to us.
		<br />
		<br />
		Information we share: Your information is not shared with other entities, except in the cases outlined
		in the "Third-parties providing Technical Services", "Third-parties providing Payment Services",
		and "Law Enforcement" sections of this policy.
	</p>
	<br />
	<br />
	<h2>🍪 Cookies</h2>
	<p>
		The only use of cookies and local storage in our services is to keep you signed into our
		services which accounts can be used in, and to save your preferences.
	</p>

	<br />
	<br />
	<h2>🤝 Third-parties providing Technical Services</h2>
        <br />
        <h3>Hetzner.com</h3>
        <p>
                We rely on Hetzner.com Server Auctions to provide us with 100% Green Renewal Dedicated Servers. View <a
                        class="link"
                        href="https://www.hetzner.com/legal/privacy-policy"
                        target="_blank">Hetzner.com's Privacy Policy</a
                > to learn more.
        </p>
	<br>
	<h3>Cloudflare.com</h3>
	<p>
		We rely on Cloudflare.com to provide us with 100% Green Energy Service, DDoS protection, CDN delivery and certain other web
		services. View <a
			class="link"
			href="https://cloudflare.com/privacy/"
			target="_blank">Cloudflare.com's Privacy Policy</a
		> to learn more.
	</p>

	<br>
	<br>
	<h3>Arc.io</h3>
	<p>We rely on Arc.io to provide us to maintain our website without ads and also respect user privacy. View <a
														   class="link"
														   href="https://arc.io/about"
														   target="_blank">Arc.io's Privacy Policy</a> to learn more.

</p>

	<br>
	<br>
	<h3>AbuseIPDB.com</h3>
	<p>We rely on AbuseIPDB.com to automatically ban abusive ip address attacking our Infrastructure.
   	<a href="https://www.abuseipdb.com/user/118422" title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks">
	<img src="https://www.abuseipdb.com/contributor/118422.svg" alt="AbuseIPDB Contributor Badge" style="width: 272px;">
</a>
</p>

	<br>
	<br />
	<h3>Daily Backups</h3>
	<p>
		We rely on Backblaze, Scaleway, and Wasabi for data backups for restoration of the services. 
		
		<br>
		View <a
			class="link"
			href="https://wasabi.com/legal/privacy-policy/"
			target="_blank">Wasabi's Privacy Policy</a
		> to learn more. 
		<br>
		
		View <a
			class="link"
			href="https://www.scaleway.com/en/privacy-policy/"
			target="_blank">Scaleway's Privacy Policy</a
		> to learn more. 
		<br>
		View <a
			class="link"
			href="https://www.backblaze.com/company/privacy.html"
			target="_blank">Backblazes's Privacy Policy</a
		> to learn more.
		<br>
	</p>
	<br>
	<h3>Session</h3>
	<p>
		We use Session as one of the methods for contacting us. View <a
			class="link"
			href="https://getsession.org/privacy-policy"
			target="_blank">Session's Privacy Policy</a
		> to learn more.
	</p>
	<br />
	<h3>MsgSafe</h3>
	<p>
	<p>We use MsgSafe to receive and store your e-mails sent to us. View <a class="link" href="https://www.msgsafe.io/privacy" target="noreferrer">MsgSafe's Privacy Policy</a> to learn more.
	</p>
	<br />
	<h3>AnonAddy</h3>
	<p>We use AnonAddy to relay your e-mails sent to our domains. View <a class="link" href="https://anonaddy.com/privacy/" target="noreferrer">AnonAddy's Privacy Policy</a> to learn more.
	<br />
	<br />
	<h2>💵 Third-parties providing Payment Services</h2>
	<br />
	<h3>Cake Wallet</h3>
	<p>
		If Monero is your chosen method of payment, we rely on Cake Wallet to receive your payment. View <a
			class="link"
			href="https://raw.githubusercontent.com/cake-tech/cake_wallet/main/PRIVACY.md"
			target="_blank">Cake Wallet's Privacy Policy</a
		> to learn more.
	</p>
	<br />
	<br />
	<h2>🔐 Data Security and Integrity</h2>
	<p>
		We take the steps that we deem reasonable to protect your data from unauthorized access and
		distribution, and from loss of data. For example, we use TLS v1.2/v1.3 to transmit data to you in an
		encrypted format, and we use end-to-end encryption + encryption at rest to ensure your data is safe and sound. With also provided passwords are hashed with Bcrypt or Argon2id for the services that require user accounts.
	</p>
	<br />
	<br />
	<h2>🗑️ When you Delete your Account</h2>
	<p>
		On the services that you can delete your user account, database backups will continue to hold
		your information for up to 14 days.
	</p>
	<br />
	<br />
	<h2>⛔️ Children's Data</h2>
	<p>
		We do not knowingly collect personal information from anyone under 13 years of age. If you are
		aware of someone under the age of 13 using our services, please report them to <a
			class="link"
			href="mailto:privacy@whateveritworks.org"
			target="_blank">privacy@whateveritworks.org</a
		>
		(GPG/PGP Public Key: <a class="link" href="https://whateveritworks.org/email" target="_blank">here</a>).
		If we are able to find any information relating to that person, it will be removed.
	</p>
	<br />
	<br />
	<h2>📨 Contact Us</h2>
	<p>
		If you have questions or feedback regarding this policy, feel free to e-mail us at <a
			class="link"
			href="mailto:privacy@whateveritworks.org"
			target="_blank">privacy@whateveritworks.org</a
		>
		(PGP Public Key: <a class="link" href="https://whateveritworks.org/email" target="_blank">here</a>).
	</p>
	<br />
	<br />
	<h2>📝 Changes to this Policy</h2>
	<p>
		This privacy policy may be subject to changes in the future. Changes to this policy will be
		marked by the provided date of change.
	</p>
	<br />
	<br />
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
	}
</style>
