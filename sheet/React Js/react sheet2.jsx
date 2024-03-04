// whats is React JS;
//   REACT JS is Library/framework JS


// ROAD map REACT JS
// Composent 
// rendu  conditionel 
// gestion du evenement
// state 
// props 
// gestion des formulaire 
// cycle de vie  de composent 
// routage et navigation 
// Gestion de l'etat global avec Redux ou React Context
// Authentication et authorisation



// Component ray
class ReactSheet2 extends Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}

export default ReactSheet2;


// rendu  conditionel
// 1. Utilisation de l'opérateur ternaire :
function MonComposant({ condition }) {
  return (
    <div>
      {condition ? <p>Condition est vraie</p> : <p>Condition est fausse</p>}
    </div>
  );
}// Dans cet exemple, si la condition est vraie, le composant rendra "Condition est vraie", sinon il rendra "Condition est fausse".

// 2. Utilisation de l'opérateur logique "&&" :
function MonComposant({ condition }) {
  return (
    <div>
      {condition && <p>Condition est vraie</p>}
    </div>
  );
}// Dans cet exemple, si la condition est vraie, le composant rendra "Condition est vraie", sinon il ne rendra rien.

// 3. Utilisation d'un bloc if-else dans une fonction :
function MonComposant({ condition }) {
  if (condition) {
    return <p>Condition est vraie</p>;
  } else {
    return <p>Condition est fausse</p>;
  }
}


// gestion du evenement
// 1. Syntaxe de la gestion des événements :
// - Dans React, les noms des événements sont en camelCase plutôt qu'en minuscules.
// - Les événements sont spécifiés sous forme de fonctions en tant que valeurs des attributs d'événements.
function handleClick() {
  console.log("Le bouton a été cliqué !");
}
<button onClick={handleClick}>Cliquez ici</button>


// 2. Passage d'arguments avec les événements :
// - Si vous avez besoin de passer des arguments supplémentaires à votre fonction de gestion d'événements,
//  vous pouvez le faire en utilisant une fonction anonyme.
function handleButtonClick(name) {
  console.log(`Le bouton a été cliqué par ${name} !`);
}
<button onClick={() => handleButtonClick("Alice")}>Cliquez ici</button>


// 3. Bind this pour la fonction de gestion des événements :
// - Si vous souhaitez accéder à la valeur `this` à l'intérieur de votre fonction de gestion d'événements,
//  utilisez la méthode `.bind()` pour lier correctement le `this`.
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Alice" };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(`Le bouton a été cliqué par ${this.state.name} !`);
  }
  render() {
    return (
      <button onClick={this.handleClick}>Cliquez ici</button>
    );
  }
}

// //////////////////
// state 
// //////////////////

// props
// Pour passer des props à un composant enfant, vous pouvez les définir comme des attributs dans le composant parent lors de son utilisation:
<ChildComponent prop1="valeur1" prop2="valeur2" />
// Dans le composant enfant, vous pouvez accéder aux props en utilisant `this.props` (pour les composants de classe) ou simplement `props` (pour les composants fonctionnels).

// Voici un exemple de composant enfant qui utilise des props:
// Composant enfant
class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.prop1}</h1>
        <p>{this.props.prop2}</p>
      </div>
    );
  }
}

// Composant parent
class ParentComponent extends React.Component {
  render() {
    return (
      <div>
        <ChildComponent prop1="Hello!" prop2="Bienvenue dans React!" />
      </div>
    );
  }
}// Dans cet exemple, `ChildComponent` reçoit les props `prop1` et `prop2` du composant parent `ParentComponent`. Le composant enfant les affiche ensuite dans ses éléments `<h1>` et `<p>`.

// Les props peuvent également être passées dynamiquement en utilisant des variables ou des expressions JavaScript:
// Composant parent
class ParentComponent extends React.Component {
  render() {
    const dynamicProp = "valeur dynamique";
    return (
      <div>
        <ChildComponent prop1={dynamicProp} prop2={2 + 2} />
      </div>
    );
  }
}





// gestion des formulaire 
// Voici les étapes pour gérer un formulaire avec React :
// 1. Créez un composant de formulaire en utilisant la classe React.Component. Vous pouvez utiliser la méthode render() pour afficher les éléments du formulaire.
class Formulaire extends React.Component {
  render() {
    return (
      <form>
        {/* Ajoutez ici vos éléments de formulaire */}
      </form>
    );
  }
}


// 2. Ajoutez les champs de saisie et les éléments de formulaire nécessaires à l'intérieur de la balise `<form>`. Vous pouvez utiliser les balises `<input>`, `<textarea>`, et `<select>` pour les champs de saisie.
class Formulaire extends React.Component {
  render() {
    return (
      <form>
        <input type="text" name="nom" />
        <textarea name="message"></textarea>
        <select name="option">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </select>
        <button type="submit">Soumettre</button>
      </form>
    );
  }
}


// 3. Ajoutez un gestionnaire d'événement pour gérer la soumission du formulaire. Vous pouvez utiliser la méthode onSubmit() pour définir le comportement de la soumission du formulaire.
class Formulaire extends React.Component {
  handleSubmit(event) {
    event.preventDefault();
    // Gérez ici la soumission du formulaire
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* Champs de saisie et éléments de formulaire */}
      </form>
    );
  }
}


// 4. Utilisez l'état (state) pour contrôler les valeurs des champs de saisie. Ajoutez les attributs value et onChange aux champs de saisie pour mettre à jour l'état lorsque les valeurs sont modifiées.
class Formulaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      message: "",
      option: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    // Gérez ici la soumission du formulaire
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="nom" value={this.state.nom} onChange={this.handleChange} />
        <textarea name="message" value={this.state.message} onChange={this.handleChange}></textarea>
        <select name="option" value={this.state.option} onChange={this.handleChange}>
          {/* Options du sélecteur */}
        </select>
        <button type="submit">Soumettre</button>
      </form>
    );
  }
}

// //////////////////
// cycle de vie  de composent 
// routage et navigation 
// Gestion de l'etat global avec Redux ou React Context
// //////////////////

// Authentication 
//  authorisation
