# Special Card

⚡ *Des composants React élégants pour afficher des cartes avec des effets visuels dynamiques et interactifs.* ⚡
[![Build Status](https://img.shields.io/travis/LightInn/special-card/master.svg?style=flat)](https://travis-ci.org/LightInn/special-card)
[![npm version](https://img.shields.io/npm/v/special-card.svg?style=flat)](https://www.npmjs.com/package/special-card)
[![npm downloads](https://img.shields.io/npm/dm/special-card.svg?style=flat)](https://www.npmjs.com/package/special-card)
[![license](https://img.shields.io/github/license/LightInn/special-card.svg?style=flat)](https://github.com/LightInn/special-card/blob/master/LICENCE.md) 
![Special Card Holo](/public/Capture%20vidéo%20du%2008-11-2023%2014:30:12.webm "HoloCard Effet")
![Special Card Pop](/public/Capture%20vidéo%20du%2008-11-2023%2014:34:15.webm "PopCard Effet")


## description

La bibliothèque `special-card` offre une touche visuelle inédite à vos projets React.js. Avec ses composants `HoloCard` et `PopCard`, créez des cartes interactives stylisées qui ne manqueront pas d'engager vos utilisateurs.

## Installation

Pour installer la dernière version :

```sh
npm install special-card
```

## Usage

Importez et utilisez les composants dans votre projet :

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

| Prop           | Type   | Description                              | Default       |
| -------------- | ------ | ---------------------------------------- | ------------- |
| `imageSrc`     | string | Chemin de l'image de la carte            | Obligatoire   |
| `imageShineSrc`| string | Chemin de l'image de l'effet de brillance| Obligatoire   |
| `width`        | number | Largeur de la carte                      | Obligatoire   |
| `height`       | number | Hauteur de la carte                      | Obligatoire   |
| `hyp`          | number | Intensité de l'effet holographique       | `0.8`         |
| `o`            | number | Opacité de l'effet de brillance          | `0.4`         |
| `radius`       | number | Rayon des coins de la carte              | `16`          |

### PopCard

| Prop             | Type   | Description                          | Default         |
| ---------------- | ------ | ------------------------------------ | --------------- |
| `backgroundImage`| string | Chemin de l'image de fond            | `/bg.png`       |
| `titleImage`     | string | Chemin de l'image du titre           | `/title.png`    |
| `hoverImage`     | string | Chemin de l'image au survol          | `/hover.png`    |
| `link`           | string | Lien URL au clic sur la carte        | `https://brev.al`|
| `height`         | number | Hauteur de la carte                  | `300`           |
| `width`          | number | Largeur de la carte                  | `height / 1.5`  |

## Exemple Complet

Vous trouverez ci-dessous un exemple d'intégration de la bibliothèque :

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

## Contribuer

Les contributions sont toujours les bienvenues. Veuillez cloner le dépôt et soumettre vos pull requests ici :

```sh
git clone https://github.com/LightInn/special-card.git
```

## Licence

Distribué sous la licence MIT. Voir `LICENSE` pour plus d'informations.

---
