#  What is CSS?
CSS stands for Cascading Style Sheets

## variable 
```css
:root {
  --main-bg-color: coral;
  --main-txt-color: blue;
  --main-padding: 15px;
}
```

## Color
  ```css
  color: green;
  color: rgb(red, green, blue);
  color: #ffffff;
  background-color: red;
  background-image: url();
  background-repeat: no-repeat;
  ```

## fixe_le_background 
  ```css
  background-attachment: fixed;
  background-position: right top;
  ```

## tout_les_boreds
 ```css
  border: dotted;
  border: dashed;
  border: solid;
  border: double;
  border: groove;
  border-style: ridge;
  border: inset;
  border: outset;
  border: none;
  border: hidden;
  border: dotted dashed solid double;
  //top_right_bottom_left
  ```


  /* margin */
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;

  /* padding */
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;

  /* taille */
  width: auto;
  width: 100%;
  /*responsive avec % */
  max-width: 10px;
  height: 20px;
  max-height: 10px;

  /* outline mitovy @ */
  outline: 1px solid red;

  /* text */
  text-align: center;
  text-align: end;
  text-align: start;
  text-align: justify;
  /* pour justify le text */


  text-decoration: over;
  text-decoration: line-through;
  text-decoration: underline;

  text-transform: uppercase;
  text-transform: lowercase;
  text-transform: capitalize;

  /* alinea */
  text-indent: 5px;

  /* espace des lettre */
  letter-spacing: -3px;
  letter-spacing: 3px;

  /* distance entre le phrase ambony ambany */
  line-height: 2;

  /* mamadika Hello ho lasa olleH */
  direction: rtl;

  /* espace des mots */
  word-spacing: 10px;
  word-spacing: -5px;

  /* ombre des mots */
  text-shadow: 3px 2px red;
  box-shadow: 10px 10px;

  /* taille de police */
  font-size: 100%;

  /* icons loading*/



  /* link  */
  a:link {
    color: red;
  }

  a:visited {
    color: green;
  }

  a:hover {
    color: hotpink;
  }

  a:active {
    color: blue;
  }

  ;

  /* liste */

  list-style-type: circle;
  list-style-type: square;
  list-style-type: upper-roman;
  list-style-type: lower-alpha;
  list-style-image: url(gd.gif);

  /* display */
  display: inline;
  display: block;
  display: hidden;




  /* position propriety */
  position: relative;
  position: fixed;
  position: sticky;
  position: absolute;
  position: static;

  /* overflow */
  overflow: visible;
  overflow: hidden;
  overflow: scroll;
  overflow: auto;
  overflow-y: auto;
  overflow-x: auto;

  /* float and clear */
  float: left;
  float: right;
  float: none;
  float: inherit;

  /* vertical et horizontal Align */





  /* combinator  */
  /* descendant selector (space)
    child selector (>)
    adjacent sibling selector (+)
    general sibling selector (~) */




  /* css dropwns */
  /* drop word */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }



  /* dropmenu */
  /* Style The Dropdown Button */
  .dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }


  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }


  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #f1f1f1
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }


  /* drop img */

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .desc {
    padding: 15px;
    text-align: center;
  }

  /* attr selector */
  a[target="_blank"] {
    background-color: yellow;
  }

  /* border radius */
  border-radius: 10px;
  /*
    Four values - border-radius: 15px 50px 30px 5px; (first value applies to top-left corner, second value applies to top-right corner, third value applies to bottom-right corner, and fourth value applies to bottom-left corner):
    Three values - border-radius: 15px 50px 30px; (first value applies to top-left corner, second value applies to top-right and bottom-left corners, and third value applies to bottom-right corner):
    Two values - border-radius: 15px 50px; (first value applies to top-left and bottom-right corners, and the second value applies to top-right and bottom-left corners):
    One value - border-radius: 15px; (the value applies to all four corners, which are rounded equally: */

  /* opacity */
  opacity: 0.5;

  /* gradient */
  /* top to button */
  background-image: linear-gradient(red, yellow);
  /* left to right */
  background-image: linear-gradient(to right, red, yellow);
  /* top to right */
  background-image: linear-gradient(to bottom right, red, yellow);


  /* font */
  @font-face {
    font-family: myFirstFont;
    src: url(sansation_light.woff);
  }

  div {
    font-family: myFirstFont;
  }

  /* Tranforms */
  /* Tranforms 2D*/
  transform: translate(50px, 100px);
  transform: rotate(20deg);
  transform: scale(2, 3);
  transform: skewX(20deg);
  transform: skewY(20deg);

  /* Tranforms 3D*/
  transform: rotateX(150deg);
  transform: rotateY(130deg);
  transform: rotateZ(90deg);

  /* transition */

  div {
    width: 100px;
    height: 100px;
    background: red;
    transition-property: width;
    transition-duration: 2s;
    transition-delay: 1s;
    /* delai */
  }

  div:hover {
    width: 300px;
  }

  /* animation */
  div {
    width: 100px;
    height: 100px;
    background-color: red;
    animation-name: example;
    animation-duration: 4s;
  }


  @keyframes example {
    from {
      background-color: red;
    }

    to {
      background-color: yellow;
    }
  }


  /* flexbox  */
  /* grid */

  /* Media Queries */
  body {
    background-color: tan;
  }

  @media screen and (max-width: 992px) {
    body {
      background-color: blue;
    }
  }

  @media screen and (max-width: 600px) {
    body {
      background-color: olive;
    }
  }

  /* Tooltips */
  /* loading..... */






}