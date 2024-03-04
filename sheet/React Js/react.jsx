// crtl + F pour chercher du code
import React from "react";

// variable
var a = "hello";
let b = 12;
const c = true;


// jsx
// html sur js
const testa = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
);



class Apps extends Component {
  render() {
    return (
      <>
        <h1>Hello world</h1>
      </>
    );
  }
}
export default Apps;




// funtions
hello = function () {
  return "Hello World!";
}

hello = () => {
  return "Hello World!";
}

hello = () => "Hello World!";

//   funtion avec parametre
hello = (val) => "Hello " + val;
hello = val => "Hello " + val;


// methode classe
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

mycar = new Car("Ford");
mycar.present();




//   heritage
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}
class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model
  }
}
mycar = new Model("Ford", "Mustang");
mycar.show();



//   composant
function Car() {
  return <h2>Hi, I am also a Car!</h2>;
}
ReactDOM.render(<Car />, document.getElementById('root'));


//   props
class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.brand}!</h2>
  }
}

const myelement = <Car brand="Ford" />;

ReactDOM.render(myelement, document.getElementById('root'));



//   state
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = { brand: "Ford" };
  }
  render() {
    return (
      <div>
        <h1>My Car</h1>
      </div>
    );
  }
}


//   event
<button onClick={shoot}>Take the Shot!</button>



// form
class MyForm extends React.Component {
  render() {
    return (
      <form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input
          type="text"
        />
      </form>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('root'));


//   import css
import styles from './mystyle.module.css';


// import js
import Car from './App.js';

//////
// rsc
//////
import React from 'react';
const testy = () => {
  return (
    <div>

    </div>
  );
};
export default testy;

// import React, { Component } from 'react';


// class App extends Component {
//     constructor(props){
//         super(props);
//         this.state={
//             count:0,
//         };
//     }
//     addCount=()=>{
//         this.setState({count:this.state.count+1});
//     }
//     soldCount=()=>{
//         this.setState({count:this.state.count-1});
//     }
//     alertpage=()=>{
//        alert('done');
//     }
//     render() {
//         return (
//             <div>
//                 <h1>hello React</h1>
//                 <p> {this.state.count} </p>
//                 <button onClick={this.addCount}>click to +1</button>
//                 <button onClick={this.soldCount}>click to -1</button>
//                 <button onClick={this.alertpage} >alert</button>
//             </div>
//         );
//     }
// }

// export default App;





// prop key
      // import React from 'react';

      // const myelement=()=>{
      //     const monliste=['home','about','menu'];

      //     return(
      //         <div>
      //             <ul>
      //                 {monliste.map((liste,index)=>(
      //                     <li> <a href="">{/* chiffre array */}{index} {liste}</a> </li>
      //                 ))}
      //             </ul>
      //         </div>
              
      //     );
      // };

      // export default myelement;


