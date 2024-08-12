# Button Component
This repository contains a customizable `Button` component built with React and TypeScript.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Example](#example)
- [License](#license)

## Installation

To use the `Button` component in your project, you need to have Node.js and npm installed. Then, you can install the necessary dependencies:

```bash
npm i position-style-button-component@1.0.1
```

## Usage

You can import and use the Button component in your React application as follows:

```jsx
import React from 'react';
import Button from './Button';

const App: React.FC = () => {
    return (
        <div>
            <Button label="Click Me" position="Right" />
        </div>
    );
};

export default App;
```

## Props

The Button component accepts the following props:

- `label` (string): The text to be displayed on the button.
- `style` (React.CSSProperties): Custom styles to be applied to the button.
- `position` (string): The position of the button. It can be one of "Top", "Left", "Right", or "Bottom". Default is "Top".

## Example

Here is an example of how to use the Button component with custom styles and position:

```jsx
import React from 'react';
import Button from './Button';

const App: React.FC = () => {
    const customStyle: React.CSSProperties = {
        backgroundColor: 'blue',
        color: 'white',
    };

    return (
        <div>
            <Button label="Click Me" style={customStyle} position="Bottom" />
        </div>
    );
};

export default App;
```

You can use Storybook to develop and test the Button component in isolation. Follow these steps to set up Storybook:

1. Install Storybook:
```bash
npx sb init
```

2. Create a Story for the Button component:
Create a file named Button.stories.tsx in the src/Components/Button directory with the following content:

```jsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonProps } from './Button';

export default {
    title: 'Components/Button',
    component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Click Me',
    position: 'Top',
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
    label: 'Click Me',
    style: { backgroundColor: 'blue', color: 'white' },
    position: 'Bottom',
};
```
you can directly use the StoryObj to bind the meta and declare Templates
```jsx

const meta = {
    title: "Test/Button",
    component: Button,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        backgroundColor: { control: "color" },
    },
    args: { onClick: fn() },
    } as Meta<typeof Button>;


 export default meta;
type Story = StoryObj<typeof meta>;   

export const Primary: Story = {
    args: {
      label: 'Button',
    },
  };
  export const BottomButton: Story = {
    args: {
      label: 'Bottom Button',
      position: "Bottom",
    },
  };  
```

3. Run Storybook:
```bash
npm run storybook
```

This will start the Storybook server and open it in your default web browser. You can now see and interact with the Button component in isolation.