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

## License

This project is licensed under the MIT License.
