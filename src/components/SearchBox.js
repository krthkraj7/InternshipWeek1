import React from 'react';
import Avatar from 'material-ui/Avatar';
import img from './images/Profile.jpg';


const SearchBox = () => (
<div className="Accountlinks">
<input type="text" className="searchBox" />
<span>
<Avatar className="AvatarProfile" size="35px" src={img} />
{/* <button className="TweetButton"> Tweet </button> */}
</span>
</div>

);

export default SearchBox;