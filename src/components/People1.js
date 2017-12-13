import React from 'react';
import Avatar from 'material-ui/Avatar';
import img3 from './images/aadhar2.jpg';
import img4 from './images/aadhar3.jpg';

const People1 = () => (
    <div>
        <img className="image4"src={img4} />
        <Avatar className="Avatar1" size="80px" src={img3} />
        <p className="AadharLink1">Aadhar</p>
        <span className = "UIDAIText">@UIDAI</span>
        <p className= "AadharText"> Official Twitter account of the Unique Identification Authority of India. RTs are not endorsements.</p>
    </div>
);

export default People1;