import React from 'react';
import img from './images/aadhar.jpg'
import img2 from './images/TOI.jpg'


const TopNews = () => (
    <div>
    <div className="makeFlex">
    <p className="TopText">Top News</p>
    <p><a href="www.google.com">View all</a></p>
    </div>
    <div className="TOINewsContainer">
    <img className="image1"src={img} />
    <a className="headLink" href="https://t.co/SpkPVIsuZP">Centre indefinitely extends deadline for Aadhaar-bank account linkage - Times of India</a>
    <p className="TOIText">NEW DELHI: The government has indefinitely extended the deadline for mandatory linking of Aadhaar with bank accounts under the Prevention of Money Laundering Act (PMLA).</p>
    <div className="makeFlex">
    <div>
    <img className="TOIIcon" src={img2} />
    <span className="TOIText2"><a href="https://twitter.com/timesofindia">Times of India</a></span>
    </div>
    <a className="dateText" href="https://twitter.com/jai59480748/status/940943670567624704">Dec 13, 2017</a> 
    </div>
    </div>
    </div>

);

export default TopNews;