# React Component Library

## Get started

Install `yarn` (if necessary)

```bash
$ brew install yarn
```

Checkout the repo and install dependencies

```bash
$ git clone https://github.com/twg/react-component-library
$ cd react-component-library
$ yarn
```

## Run the styleguide server for development

```bash
$ yarn run storybook
```

Then visit [http://localhost:6006](http://localhost:6006) in your browser.

## Exporting static storybook

(this can take a minute...)

```bash
$ yarn build-storybook
```

## Contributing
If you have a component and some stories that you think should be included, there are a couple of ways to get it into TWG's storybook.

* Just let any of the contributors know, we'll help out.
* 
  * (For now) add the component's source into a new folder in src
  * Add a file to the stories folder that exports a function that pop u
