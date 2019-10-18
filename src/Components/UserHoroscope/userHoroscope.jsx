import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

  import provider from '../HoroscopeProvider/provider.jsx'
//import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'

class HoroscopeDetails  extends React.Component{
    constructor(props){
        super(props);
        //let { name } = useParams();
        this.state = { details : ""};
        var data = provider.getHoroscope(this.props.sign);
        this.setState = {
            details : data
        };

    }

    render(){
        return (
            <div className="row justify-content-center" style={{'marginTop' : '5%'
        }}>
                <div className="col-sm-9" style={{ 'backgroundColor': 'oldlace'}}>
                <div>
                    <h3>Hi {this.props.name},</h3>
                    <h4>Your zodiac sign is {this.props.sign}.</h4>
                    <h5>This is how your day is going to be .....</h5>
                    <p>{this.setDetails()}</p>
                </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var data = provider.getHoroscope(this.props.sign);
        this.setState = {
            details : data
        };
    }

    setDetails(){
        var data = provider.getHoroscope(this.props.sign);
        return data;
    }
}

export default HoroscopeDetails;