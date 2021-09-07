import React, { Component } from 'react'
import { BrowserRouter as Router, 
    Switch,
    Route,
} from 'react-router-dom'
import Login from '../Components/Login'
import Registro from '../Components/Registro'
import AppContainer from '../Containers/AppContainer'


export default class AppRouters extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path='/registro' component={Registro}/>
                        <Route path= '/' component={AppContainer}/>  
                    </Switch>
                    </Router>
            </div>
        )
    }
}

