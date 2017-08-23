# React Component Library/Tools

This is a set of tools to help TWGers work more quickly by giving them access to TRT (TWG-React-Tools).

TRT helps you perform better, faster - by allowing you to quickly perform tasks that are common to most TWG reacters

The tools in this set adhere to [TWG's react guidelines](https://github.com/twg/react-guidelines)

This suite of tools is comprised of a library of components and commands - including, but not limited to:

* A visual [storybook](https://storybook.js.org/) of commonly used components at TWG
* A command line tool to copy these components into a project
* A command to generate all files associated with a new component in the style that TWG prefers

# Installing && Updating
Since this is a private repository, we install via yarn + git

`yarn global add twg-react-tools`

or

`npm install -g twg-react-tools`


This will take a couple moments while it installs the dependencies for storybook

# Using - commands

## Storybook

Starting storybook to get a local view of storybook is easy thanks to trt!

`trt storybook` or `trt sb`

This starts Storybook on http://localhost:6006

## Generate

This command will generate a new react component using TWG's style guide - complete with a .js, .css, and testing file inside of a folder in the location that you run this command.

The root command for this is: `trt generate`

### Generate options

There are currently two different options for generating:
  * Stateless component
  * Class component

If you're unsure about the difference between the two, [here](https://jaketrent.com/post/smart-dumb-components-react/) is an excellent resource.

There are 2 arguments for this command

* Argument 1 is *required* and is the _type_ of component you want to create:
  * `sc (stateless component)` or `cc (class component)`
* Argument 2 is *required* and is the name of the component you want to create

`trt generate sc MyComponent`
or
`trt generate cc MyComponent`

## Include

This command will include a component from the library (you can see the list of available components in the storybook)

The root command for this is: `trt include`

There are 2 arguments for this command:

* Argument 1 is *required* and is the name the component you want to include from TRT
* Argument 2 is optional - this is the target location for the included component - default is current directory

`trt include Tooltip` or `trt include Tooltip ./components`

# Development
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

(this can take a moment...)

```bash
$ yarn build-storybook
```

## Contributing
If you have a component and some stories that you think should be included, there are a couple of ways to get it into TWG's storybook.

* Just let any of the maintainers know, we'll help out.
* Create a PR with your new component and some stories
  * Add the component's source into a new folder in src
    * Components should be as agnostic as possible to allow easy inclusion into all sorts of projects. Do not assume Redux/non-react state libraries
    * Components have to use css modules and do not support sass/less
    * Please include a README with some basic usage details for your component
    * Components that recieve props should have their PropTypes documented in /* */ style - this is the style supported by our storybook plugins
  * Add a file to the stories folder that exports a function that creates stories
    * At the very least, a component has to have a story that allows the user to alter params ([We Use Knobs](https://github.com/storybooks/storybook/tree/master/addons/knobs))
    * ( Check the existing stories for button, tooltip & grid for examples )
    * The documentation for storybook can be found [here](https://github.com/storybooks/storybook) - @hyperwidget would be glad to help too
  * Add your new story file to /stories/index.js
