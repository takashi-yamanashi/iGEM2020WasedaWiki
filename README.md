# wiki

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

Deploy (netlify), connected main branch

https://tender-sammet-44e510.netlify.app/

# iGEM Server Deploy
Branch : igem_server

## environment path setting
```bash
export IGEM_USERNAME=youriGEMusername
export IGEM_PASSWORD=youriGEMpassword
```

```bash
$ git checkour igem_server
$ git merge main

# generate static project
$ yarn generate

# rewrite for iGEM Format
$ cd iGEMUpload
$ python deploy_igem_server.py

# Deploy iGEM Server
$ python conversion_to_igemformat.py
```

Please check this : https://2020.igem.org/Team:Waseda
