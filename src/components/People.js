import React from 'react';
import People1 from './People1';
import People2 from './People2';


const People = () => (
<div>
<div className="makeFlex1">
<p className="PeopleText">People </p>
<a href="www.google.com">View all</a>
</div>
<div className= "makeFlex">
<div className= "People1Container">
<People1 />
</div>
<div className= "People2Container">
<People2 />
</div>
</div>
</div>
);

export default People;