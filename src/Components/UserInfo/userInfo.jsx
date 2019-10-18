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

            <div style={{'marginTop' : '2%', 'marginLeft' : '2%'
        }}>
                <form className="form-inline" onSubmit={this.handleOnSubmitInfo}>
                <div className = "row">
                <div className="form-group col-sm-3">
                    <input className="form-control" type="text" value={this.state.firstname} onChange={this.handleChange}  placeholder="First name"/>
                </div>
                <div className="form-group col-sm-3">
                    <input className="form-control" type="text" value={this.state.lastname} onChange={this.handleChange}  placeholder="Last name"/>
                </div>
                <div className="form-group col-sm-3">
                    <input type="date" className="form-control date" value={this.state.dob} onChange={this.handleChange} name="dob"/>
                </div>
                <div className=" col-sm-3">
                <button type="submit" className="btn btn-primary">Show my Horoscope!</button>
                </div>
                </div>
                
                
                
            </form>
            </div>
        )

    }
}

export default UserInfo;