# Special Card

⚡ *Elegant React components for displaying cards with dynamic and interactive visual effects.* ⚡
[![Build Status](https://img.shields.io/travis/LightInn/special-card/master.svg?style=flat)](https://travis-ci.org/LightInn/special-card)
[![npm version](https://img.shields.io/npm/v/special-card.svg?style=flat)](https://www.npmjs.com/package/special-card)
[![npm downloads](https://img.shields.io/npm/dm/special-card.svg?style=flat)](https://www.npmjs.com/package/special-card)
[![license](https://img.shields.io/github/license/LightInn/special-card.svg?style=flat)](https://github.com/LightInn/special-card/blob/master/LICENSE.md) 

![Special Card Holo](/public/holo.gif "HoloCard Effect")
![Special Card Pop](/public/pop.gif "PopCard Effect")

## Description

The `special-card` library offers a unique visual touch to your React.js projects. With its `HoloCard` and `PopCard` components, create stylized interactive cards that are sure to engage your users.

## Installation

To install the latest version:

```sh
npm install special-card
```

## Usage

Import and use the components in your project:

```jsx
import { HoloCard, PopCard } from 'special-card';

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <PopCard 
        height={300}
        titleImage="/path/to/title.png"
        hoverImage="/path/to/hover.png"
        backgroundImage="/path/to/background.png"
        link="https://your-link.com"
      />
      <HoloCard
        height={300}
        width={300}
        radius={30}
        imageSrc="/path/to/image.png"
        imageShineSrc="/path/to/shine-image.png"
      />
    </div>
  );
}

export default App;
```

## Documentation

### HoloCard

| Prop           | Type   | Description                           | Default       |
| -------------- | ------ | ------------------------------------- | ------------- |
| `imageSrc`     | string | Path to the card image                | Required      |
| `imageShineSrc`| string | Path to the shine effect image        | Required      |
| `width`        | number | Width of the card                     | Required      |
| `height`       | number | Height of the card                    | Required      |
| `hyp`          | number | Intensity of the holographic effect   | `0.8`         |
| `o`            | number | Opacity of the shine effect           | `0.4`         |
| `radius`       | number | Radius of the card corners            | `16`          |

### PopCard

| Prop             | Type   | Description                        | Default         |
| ---------------- | ------ | ---------------------------------- | --------------- |
| `backgroundImage`| string | Path to the background image       | `/bg.png`       |
| `titleImage`     | string | Path to the title image            | `/title.png`    |
| `hoverImage`     | string | Path to the hover image            | `/hover.png`    |
| `link`           | string | URL link on card click             | `https://brev.al`|
| `height`         | number | Height of the card                 | `300`           |
| `width`          | number | Width of the card                  | `height / 1.5`  |

## Complete Example

Below is an example of how to integrate the library:

```jsx
// index.js
import React from 'react';
import { render } from "react-dom";
import { HoloCard, PopCard } from "special-card";

const App = () => (
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <PopCard 
      height={300} 
      titleImage="/path/to/title.png"
      hoverImage="/path/to/hover.png"
      backgroundImage="/path/to/background.png"
      link="https://your-link.com"
    />
    <HoloCard
      height={300}
      width={300}
      radius={30}
      imageSrc="/path/to/image.png"
      imageShineSrc="/path/to/shine-image.png"
    />
  </div>
);

render(<App />, document.getElementById("root"));
```

## Contributing

Contributions are always welcome. Please clone the repository and submit your pull requests here:

```sh
git clone https://github.com/LightInn/special-card.git
```

## License

Distributed under the MIT License. See `LICENSE` for more information.

---


