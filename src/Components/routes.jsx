import React from 'react'
import { Switch, Route } from 'react-router-dom';
import HoroscopeDetails from './UserHoroscope/userHoroscope.jsx'
import UserInfo from './UserInfo/userInfo.jsx';



 const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={UserInfo}/>
            <Route exact path='/aries' component = {(props) => (<HoroscopeDetails   name = {'XYZ'} sign = {'aries'} {...props}/>)}/>
            <Route exact path='/cancer' component = {(props) => (<HoroscopeDetails   name = {'XYZ'} sign = {'cancer'} {...props}/>)}/>
            

            {/* <Route exact path='/about' component={About} />
            <Route exact path='/help' component={Help} />
            <Route path="*" exact={true} component={NotFound} /> */}
        </Switch>
    )
}

export default Routes;
