import React from 'react';
import Avatar from 'material-ui/Avatar';
import img5 from './images/randompic2.jpg';
import img6 from './images/ramdompic3.jpg';

const People1 = () => (
    <div>
        <img className="image4"src={img6} />
        <Avatar className="Avatar1" size="80px" src={img5} />
        <p className="AadharLink1">Shahir Kamini</p>
        <span className = "UIDAIText">@Code_Interviews ‏</span>
        <p className= "AadharText"> If you don't have Aadhaar: notification extending deadline for you is expected tomo/day after. DONT LINK </p>
    </div>
);

export default People1;