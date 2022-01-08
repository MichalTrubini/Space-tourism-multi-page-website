import React, { Component } from 'react';
import Header from './header';
import MainHome from './mainHome';

class HomePage extends React.Component {
    render() { 
        return (
        <>
            <Header/>
            <MainHome/>
        </>
        );
    }
}
 
export default HomePage;