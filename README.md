# ctf-container

Deploy challenge CTF with multi instance

First setup enviroment:

```bash
mv example.env .env
```

```yml
PORT=9000 # Port server manage 
TITLE=CTF Container # Name challenge
SITEKEY=bd14a8b1-b776-xxxx-xxxx-c6d63727c729 # Sitekey hcaptcha
SECRETKEY=0xa7A724722bD6BDf7aE0DD8Axxxx3A7A24e225375 # Secretkey hcapcha
TIMERUNNING=60 # Time to run each instance
```
Install package:

```bash
npm i
```

The basic structure of a challenge ctf:
```
.
├── Dockerfile
├── README.md
├── destroy.sh
├── entrypoint.sh
├── run_container.sh
└── src
    └── server.js
```

You can use to deploy challenges do the same as me, and it's important to have required run.sh and destroy.sh files. ¯\_(ツ)_/¯

And finally

```bash
npm run start
```

Done.