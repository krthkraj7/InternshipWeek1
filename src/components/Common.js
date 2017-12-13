import TopMenu from './TopMenu';
import Aadhar from './Aadhar';
import React from 'react';
import ReactDOM from 'react-dom';
import TabBar from './Tabs';
import SearchFilter from './SearchFilter';
import RelatedSearches from './RelatedSearches';
import NewtoTwitter from './NewtoTwitter';
import WorldwideTrends from './WorldwideTrends';
import Footer_Left from './Footer_Left';
import Results from './Results';
import TopNews from './TopNews';
import People from './People'

const Common = () => (
    <div>
    <TopMenu />
    <Aadhar />
    <TabBar />
    <div className="leftContainer">
    <SearchFilter />
    <RelatedSearches />
    <NewtoTwitter/>
    <WorldwideTrends/>
    <Footer_Left />
    </div>
    <div className = "middleContainer">
    <TopNews />
    <Results />
    <People /> 
    </div>
    </div>
);

export default Common;