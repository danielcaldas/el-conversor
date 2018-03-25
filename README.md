# el-conversor
[![Build Status](https://travis-ci.org/danielcaldas/el-conversor.svg?branch=master)](https://travis-ci.org/danielcaldas/el-conversor)

## A number to word list converter as a Node backend and React/Redux fronted

## Deployed in Heroku
Check it out [https://el-conversor.herokuapp.com/](https://el-conversor.herokuapp.com/) :sunglasses:

### Project setup
```
.
├── app // frontend react app
│   ├── assets
│   ├── common // shared code for fe app
│   ├── components // app components
│   ├── converter // converter the main container wired to the redux store
│   └── dist // production static assets are served from here
├── cypress // automatic e2e tests
├── scripts // utils scripts
└── server // node.js backend
    ├── src
    │   ├── dictionary // module responsible for matching results with dictionary words
    │   └── t9-converter // module that encapsulates number2word algorithm
    └── test
        ├── dictionary
        └── t9-converter
```

### Running ElConversor locally

```sh
npm install
npm run dev // starts local backend server and frontend webpackdev server with hot reload for frontend
```

To see others scripts just type `npm run` they are splitted into `client` and `server` tasks, the names are
self descriptive.
