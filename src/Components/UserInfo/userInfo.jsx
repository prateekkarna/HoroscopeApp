import React from 'react';
import PropTypes from 'prop-types';

class UserInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = { name: "", lastname : "", dob : ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleOnSubmitInfo = this.handleOnSubmitInfo.bind(this);
    }    

    handleChange(event){
        let name = event.target.name;
        let value = event.target.value;
        //PropTypes.string.isRequired;
        this.setState = {
            [name] : value
        };
    }

    handleOnSubmitInfo(event){
        //this.props.onSubmit.value = "";
        var dob = new Date(this.state.dob);
        var dobMonth = dob.getMonth();
        var dobDate = dob.getDay();
        
        switch(dob){
            case (new Date("2019-01-20").getMonth() < dobMonth < new Date("2019-02-18").getMonth()):
             console.log("Aries")
        }
        event.preventDefault();
    }

    render(){
        return(
            // <form onSubmit={this.handleOnSubmitInfo}>
            //     <input type="text" value={this.state.firstname} onChange={this.handleChange} required placeholder="First name"/>
            //     <input type="text" value={this.state.lastname} onChange={this.handleChange} required placeholder="Last name"/>
            //     <input type="submit" value="Show my Horoscope!"/>
            // </form>

            <form className="form-inline" onSubmit={this.handleOnSubmitInfo}>
                <div className="form-group">
                    <input className="form-control-plaintext" type="text" value={this.state.firstname} onChange={this.handleChange}  placeholder="First name"/>
                </div>
                <div className="form-group">
                    <input className="form-control-plaintext" type="text" value={this.state.lastname} onChange={this.handleChange}  placeholder="Last name"/>
                </div>
                <div className="form-group">
                    <input type="date" className="input-group date" value={this.state.dob} onChange={this.handleChange} name="dob"/>
                </div>
                <button type="submit" className="btn btn-primary">Show my Horoscope!</button>
            </form>
        )

    }
}

export default UserInfo;