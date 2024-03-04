// Réagir useStateCrochet

// Le React useStateLe crochet nous permet de suivre l'état dans une composante de fonction.

// L'État se réfère généralement à des données ou propriétés qui doivent être suivies dans une application.
// Importation useState

// Pour utiliser le useStateCrochet, nous devons d'abord importc'est dans notre composante.
// Exemple:
// Obtenez votre propre serveur React.js

// En haut de votre composant, importla useStateCroise.

import { useState } from "react";

// Notez que nous déstructurons useStatede reactcar il s'agit d'une exportation nommée.
// Pour en savoir plus sur la déstructuration, consultez la section ES6.
// initialiser useState
// Nous initialisons notre état en appelant useStatedans notre composante fonctionnelle.
// useStateaccepte un état initial et retourne deux valeurs:
// L'état actuel.
// Une fonction qui met à jour l'état.
// Exemple:
// Initialiser l'état au sommet de la composante de la fonction.

import { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("");
}

// Remarquez que là encore, nous déstructurons les valeurs restituées de useState.
// La première valeur, color, c'est notre état actuel.
// La deuxième valeur, setColor, est la fonction qui est utilisée pour mettre à jour notre état.
// Ces noms sont des variables qui peuvent être nommées tout ce que vous voulez.
// Enfin, nous abordons l'état initial à une corde vide: useState("")

// Nous pouvons maintenant inclure notre État n'importe où dans notre composante.
// Exemple:
// Utiliser la variable d'état dans la composante rendue.

import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return <h1>My favorite color is {color}!</h1>
}

const roott = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);

// État mis à jour

// Pour mettre à jour notre état, nous utilisons notre fonction d'état de mise à jour.

// Nous ne devrions jamais mettre à jour directement l'état. Ex : color = "red"n'est pas autorisée.
// Exemple:

// Utilisez un bouton pour mettre à jour l'état:

import { useState } from "react";
import ReactDOM from "react-dom/client";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

const rootj = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FavoriteColor />);

// Ce que l'on peut détenir par l'État

// Le useStateLe crochet peut être utilisé pour garder une trace de chaînes, de nombres, de booléans, de tableaux, d'objets, et de n'importe quelle combinaison de ceux-ci.

// Nous pourrions créer des Hooks à plusieurs états pour suivre les valeurs individuelles.
// Exemple:

// Créer des crochets à état multiple:

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

const rootb = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

// Ou, nous pouvons simplement utiliser un seul état et inclure un objet à la place.
// Exemple:

// Créez un seul Hook qui détient un objet:

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

const rooto = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

// Puisque nous suivons maintenant un seul objet, nous devons faire référence à cet objet et ensuite à la propriété de cet objet lors du rendu du composant. (Ex: car.brand)
// Mise à jour des objets et des réseaux dans l'État

// Lorsque l'état est mis à jour, l'ensemble de l'état est écrasé.

// Et si nous voulons seulement mettre à jour la couleur de notre voiture ?

// Si nous n'appelions que setCar({color: "blue"}), cela supprimerait la marque, le modèle et l'année de notre état.

// Nous pouvons utiliser l'opérateur de tartinage JavaScript pour nous aider.
// Exemple:

// Utilisez l'opérateur de tarage JavaScript pour mettre à jour uniquement la couleur de la voiture:

import { useState } from "react";
import ReactDOM from "react-dom/client";

function Car() {
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });

  const updateColor = () => {
    setCar(previousState => {
      return { ...previousState, color: "blue" }
    });
  }

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Blue</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);

// Parce que nous avons besoin de la valeur actuelle de l'état, nous passons une fonction dans notre setCarfonction. Cette fonction reçoit la valeur précédente.

// Nous retournons alors un objet, en étalant le previousStateet n'écraser que la couleur.
