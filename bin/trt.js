#! /usr/bin/env node
const shell = require("shelljs");

console.log();

const ARGS = process.argv.slice(2);

const mainCommand = ARGS[0];
const modifier = ARGS[1];
const target = ARGS[2];

const generate = (modifier, target) => {
  switch (modifier) {
    case "component":
      shell.exec(
        `bash ${__dirname}/scripts/generateComponent.sh component ${target}`
      );
      break;
    default:
      break;
  }
};

const include = (modifier, target) => {
  if (!target) {
    target = ".";
  }

  shell.exec(
    `bash ${__dirname}/scripts/includeComponent.sh ${modifier} ${target}`
  );
};

const storybook = () => {
  shell.exec(`npm run --prefix ${__dirname}/../ storybook`);
};

(function main() {
  switch (mainCommand) {
    case "generate":
    case "-g":
      generate(modifier, target);
      break;
    case "include":
    case "-i":
      include(modifier, target);
      break;
    case "storybook":
    case "sb":
      storybook();
      break;
    default:
      console.log("Unrecognized command: no action");
      break;
  }
})();
