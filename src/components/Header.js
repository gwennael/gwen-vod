import React from 'react';
import { Link } from 'react-router-dom';

// Rendu du menu de navigation de l'application
class Header extends React.Component{
    render(){
        return (
            <nav className="navbar navbar-inverse sidebar" role="navigation">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-sidebar-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Gwen VOD</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-sidebar-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                            <li id="catalog"><Link to="/">Catalogue<span className="pull-right hidden-xs showopacity glyphicon glyphicon-list"></span></Link></li>
                            <li><Link to="/connexion">Connexion<span className="pull-right hidden-xs showopacity glyphicon glyphicon-user"></span></Link></li>
                            <li><Link to="/lecteur">Lecteur<span  className="pull-right hidden-xs showopacity glyphicon glyphicon-play"></span></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;
