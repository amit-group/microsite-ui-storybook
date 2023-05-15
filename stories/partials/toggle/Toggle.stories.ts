import { MicrositeToggle } from "@amitgroup/microsite/toggle";
import { createToggle } from "./Toggle"
import ToggleTemplate from './Toggle.template.mdx';

export default {
  title: "Partials/Toggle",
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: ToggleTemplate
    }
  },
  argTypes: {
    label: {
      control: "text",
    }
  }
}

const Template = (args) => createToggle(args);

export const Toggle = Template.bind({});
Toggle.args = {
  label: "Toggle",
}
Toggle.play = ({ canvasElement }) => {
  const button = canvasElement.querySelector('button');
  new MicrositeToggle(button, {
    tracking: {
      category: 'General',
      label: 'Example Toggle',
    }
  })
}
