import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//import { Routes } from './routes.jsx';


export default class ZodiacComponent extends React.Component
{
    constructor(props){
        super(props);
    }
    
    render()
    {
        return(
            <div>
                <p align="center">Choose your Zodiac Sign</p>
                <div>
                    <table align="center">
                        <thead>
                        <tr>
                            <td><Link to={'/aries'}>
                                <img src={require('./asset/images.jpg')} height='150' width='150'>
                                    </img></Link></td>
                            <td><Link to={'/cancer'}>
                                <img src={require('./asset/cancer.jpg')} height='150' width='150'>
                                    </img></Link></td>
                                    <td><Link to={'/cancer'}>
                                <img src={require('./asset/libra.jpg')} height='150' width='150'>
                                    </img></Link></td>
                                    <td><Link to={'/cancer'}>
                                <img src={require('./asset/capricorn.jpg')} height='150' width='150'>
                                    </img></Link></td>
                        </tr>
                        <tr>
                            <td><Link to={'/aries'}>
                                <img src={require('./asset/taurus.png')} height='150' width='150'>
                                    </img></Link></td>
                            <td><Link to={'/cancer'}>
                                <img src={require('./asset/virgo.jpg')} height='150' width='150'>
                                    </img></Link></td>
                                    <td><Link to={'/cancer'}>
                                <img src={require('./asset/aquarius.jpg')} height='150' width='150'>
                                    </img></Link></td>
                                    <td><Link to={'/cancer'}>
                                <img src={require('./asset/capricorn.jpg')} height='150' width='150'>
                                    </img></Link></td>
                        </tr>

                        </thead>
                    </table>
                    {/* <Routes/> */}
                </div>
            </div>
        )
    }
}