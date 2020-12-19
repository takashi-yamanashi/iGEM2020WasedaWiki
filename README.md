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

https://igemwaseda2020wiki.netlify.app

# iGEM Server Deploy
Branch : igem_server

## environment path setting
```bash
export IGEM_USERNAME=youriGEMusername
export IGEM_PASSWORD=youriGEMpassword
```

```bash
$ git checkout igem_server
$ git merge main

# generate static project
$ yarn generate

# rewrite for iGEM Format
$ cd iGEMUpload
$ python conversion_to_igemformat.py

# Deploy iGEM Server
$ python deploy_igem_server.py
```

Please check this : https://2020.igem.org/Team:Waseda
