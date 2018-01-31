import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home.js'
import LoginPage from './LoginPage';
import PlayerPage from './PlayerPage';
import Header from './Header';

// Initialisation et rendu du "Router" de l'application
class App extends React.Component{

    render(){
        return (
            <Router>
                <div id="Router">
                    <Header/>
                    <div className="main">
                        <div id="app">
                            <Route exact path="/" component={Home} />
                            <Route path="/connexion" component={LoginPage} />
                            <Route path="/lecteur" component={PlayerPage} />
                        </div>
                    </div>
                </div>
            </Router>
        )
    }

}


export default App;
