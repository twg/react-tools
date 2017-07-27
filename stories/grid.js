import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  withKnobs,
  text,
  boolean,
  number,
  object,
  select
} from "@storybook/addon-knobs";

import { Grid, GridItem } from "../src/Grid";

export default function() {
  storiesOf(
    "Grid",
    module
  ).addWithInfo(
    "General Overview",
    `This is a grid component to allow for grid style layouts in react`,
    () =>
      <Grid>
        <GridItem col="3/4" phablet1of2 mobile1of1>
          Column 1
        </GridItem>
        <GridItem col="1/4" phablet2of2 mobile1of1>
          Column 2
        </GridItem>
        <GridItem col="1/4" phablet1of2 mobile1of1>
          Column 3
        </GridItem>
        <GridItem col="1/4" phablet2of2 mobile1of1>
          Column 4
        </GridItem>
      </Grid>,
    { inline: true }
  );
}
