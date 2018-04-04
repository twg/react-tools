# About this app

This sample app is intended to be used as a reference, not a boilerplate. For better or worse (read: better!), the React ecosystem continues to evolve at a pretty rapid clip. For that reason, we feel it would be too much a burden to keep a boilerplate project up to date. Instead, use the sample app as a working example of how to put into practice the recommendations laid out in this repository.

We currently recommend using [https://github.com/facebookincubator/create-react-app](create-react-app) to bootstrap a new project.  `create-react-app` (CRA) is a react app generator that takes care of a great deal of initial configuration and dependency setup. The generated app has a single dependency (other than react and react-dom) called `react-scripts`, which serves to hide the app's full list of dependencies and configuration files from the user. We recommend immediately running the command `npm run eject`, which gives the developer access to configuration files and a true list of dependencies in package.json. From there, we recommend structuring the actual application code similarly to this sample app.

That full list of commands then is...

```bash
$ npm install -g create-react-app
$ create-react-app new-project
$ cd new-project
$ npm run eject
```

or

```bash
$ yarn global add create-react-app
$ create-react-app new-project
$ cd new-project
$ yarn eject
```

(note, CRA will use yarn as the dependency manager if it is installed globally on the system where the CRA command is run)
