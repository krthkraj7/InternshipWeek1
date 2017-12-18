import React from 'react';
// import FlatButton from 'material-ui/FlatButton';
import SearchBox from './SearchBox';
import img6 from './images/Twitter-icon.jpg'

const TopMenu = () => (
    <div className="home_login">
    <div className="home_about">
    {/* <FlatButton label="Home" /> */}
    {/* <FlatButton label ="About" /> */}
    <button>
        <img className="TwitterImage"src={img6} />
        <span className="HomeText">
            Home
        </span>
    </button>
    <button>
    <span className="AboutButton">About</span>
    </button>
    <img className="image7"src={img6} />
    </div>
    <div className="SearchandLogin">
    <SearchBox />
    </div>
    </div>

);

export default TopMenu;