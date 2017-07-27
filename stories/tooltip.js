import React from "react";

import { storiesOf } from "@storybook/react";

import { Tooltip } from "../src/Tooltip";

export default function() {
  storiesOf("Tooltip", module).add("So many styles", () => {
    return (
      <div style={{ height: "75px" }}>
        <div style={{ height: "50px" }} />
        <Tooltip content={<div>Hiiie</div>}>Hover me</Tooltip>
      </div>
    );
  });
}
