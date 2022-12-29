import HTMLFlipBook from "react-pageflip";
import ReactEbook from "./ReactEbook";


function MyBook() {
    return (
        <HTMLFlipBook width={500} height={500}>
            <div className="demoPage"><img src="https://raw.githubusercontent.com/blasten/turn.js/master/demos/magazine/pages/01.jpg" className="styleimg" /></div>
            <div className="demoPage"><img src="https://raw.githubusercontent.com/blasten/turn.js/master/demos/magazine/pages/02.jpg" className="styleimg" /></div>
            <div className="demoPage"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/03.jpg" className="styleimg" /></div>
            <div className="demoPage"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/04.jpg" className="styleimg" /></div>
            <div className="demoPage"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/05.jpg" className="styleimg" /></div>
            <div className="demoPage"><img src="https://raw.github.com/blasten/turn.js/master/demos/magazine/pages/06.jpg" className="styleimg" /></div>
        </HTMLFlipBook>


    );
}

export default MyBook
