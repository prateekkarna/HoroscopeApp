import React from 'react';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'

class HoroscopeDetails  extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div class="row justify-content-center" style={{'margin-top' : '5%'
        }}>
                <div class="col-sm-9" style={{ 'background-color': 'oldlace'}}>
                <div>
                    <h3>Hi {this.props.name},</h3>
                    <h4>Your zodiac sign is {this.props.sign}.</h4>
                    <h5>This is how your day is going to be .....</h5>
                    <p>{this.props.horoscopeDeatails}</p>
                </div>
                </div>
            </div>
        )
    }
}

export default HoroscopeDetails;