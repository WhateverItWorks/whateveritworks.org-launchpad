# whateveritworks.org-launchpad

The homepage and launchpad for whateveritworks.org listing all available instances.

## Developing

Install node:

```bash
apt install npm
```

Install yarn:

```bash
npm i -g yarn
```

Install the dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

## Building

To create a production version of this app:

```bash
yarn build
```

You can preview the production build with `yarn preview`.

## Deploying

The preferred and supported method of deploying is through Docker.

Install Docker using the [documentation](https://docs.docker.com/get-docker/).

Git clone the repository to your production server.

```bash
git clone https://github.com/WhateverItWorks/whateveritworks.org-launchpad.git
```

### Contributing on AbuseIPDB
<a href="https://www.abuseipdb.com/user/118422" title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks">
	<img src="https://www.abuseipdb.com/contributor/118422.svg" alt="AbuseIPDB Contributor Badge" style="width: 401px;">
</a>

Create your docker-compose.yml file and configure it to match your environment.

Build and bring the docker container up.

```bash
docker-compose up -d --build
```
