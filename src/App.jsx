import Turn from "../pages/Turn.jsx";
import ReaderCostum from '../pages/ReaderCostum'
import MyBook from '../pages/MyBook';
import ReactEbook from '../pages/ReactEbook'

import $ from "jquery";

import "turn.js";
import "./App.css";


function App() {
  // const options = {
  //   width: 800,
  //   height: 600,
  //   autoCenter: true,
  //   display: "double",
  //   acceleration: true,
  //   elevation: 50,
  //   gradients: !$.isTouch,
  //   when: {
  //     turned: function (e, page) {
  //       console.log("Current view: ", $(this).turn("view"));
  //     }
  //   }
  // };
  // const pages = [
  //   "https://raw.githubusercontent.com/blasten/turn.js/master/demos/magazine/pages/01.jpg",
  //   "https://raw.githubusercontent.com/blasten/turn.js/master/demos/magazine/pages/02.jpg",
  //   "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg",
  //   "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg",
  //   "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg",
  //   "https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg"
  // ];

  return (
    // <ReactEbook />
    <MyBook />


  )
}

export default App
