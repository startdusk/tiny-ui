import type { Meta, StoryObj } from "@storybook/react";

import Radio from "./index";
import React from "react";

const meta = {
  title: "Example/Radio",
  component: Radio,

  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Primary: Story = {
//   args: {
//     type: "primary",
//     children: "Radio",
//   },
// };

export const Basic = () => {
  return (
    <>
      <Radio onChange={(e) => console.log(e)}>Primary Radio</Radio>
    </>
  );
};

export const Secondary: Story = {
  args: {
    children: "Radio",
  },
};
