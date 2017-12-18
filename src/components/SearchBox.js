import React from 'react';
import Avatar from 'material-ui/Avatar';
import img from './images/Profile.jpg';
import img8 from './images/search.jpg';



const SearchBox = () => (
<div className="Accountlinks">
<input type="text" className="searchBox" />
<img className="SearchIcon"src={img8} />
<span>
<Avatar className="AvatarProfile" size="35px" src={img} />
<button className="TweetButton"> Tweet </button>
</span>
</div>

);

export default SearchBox;