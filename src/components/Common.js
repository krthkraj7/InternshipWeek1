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
import Results from './Results'

const Common = () => (
    <div>
    <TopMenu />
    <Aadhar />
    <TabBar />
    <Results /> 
    <SearchFilter />
    <RelatedSearches /> 
    <NewtoTwitter/>
    <WorldwideTrends/>
    <Footer_Left />
    </div>
);

export default Common;