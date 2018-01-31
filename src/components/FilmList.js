import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilms } from '../redux/films/actions';
import { Link } from 'react-router-dom';
import { IMG_POSTER_TMDb_URL } from '../constants'

// Rendu des filtres de recherche de films et de la liste des films récupérés
class FilmList extends React.Component {

    constructor(props, context){
        super(props, context);
    }

    render(){
        return(
        <div id='film-list'>
            <h1>Films</h1>

            <div className="container">
                <div className="row">

                    <hr className="hr-primary" /><br/>
                    <ol id="selectCategory" className="nav nav-pills nav-justified">
                        <li role="presentation" onClick={this.props.getFilmsFilter(0)}><a>Nouveaux</a></li>
                        <li role="presentation" className="active" onClick={this.props.getFilmsFilter(1)}><a>Populaires</a></li>
                        <li role="presentation" onClick={this.props.getFilmsFilter(2)}><a>Prochainement</a></li>
                        <li role="presentation" onClick={this.props.getFilmsFilter(3)}><a>Dernière chance (1995)</a></li>
                    </ol>
                    <br/>

                </div>
            </div>

            <div className="container">
                <div className="row">

                    {this.props.films.map((c, i) =>
                        <div className="col-md-3 col-sm-4 col-xs-6" key={i}>
                            <div className="crop hovereffect">
                                {c.poster_path ? (
                                    <img className="img-responsive" src={IMG_POSTER_TMDb_URL + c.poster_path} />
                                ) : (
                                    <img className="img-responsive" src="../img/Image-not-available_1.jpg" />
                                )}
                                <div className="overlay">
                                    <h2>{c.title}</h2>
                                    <Link className="info" to={{pathname: "/lecteur", query: {film: c}}}>Voir la bande annonce</Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        );
    }

}

function mapStateToProps(state){
    return{
        films: state.films
    }
};

const mapDispatchToProps = dispatch => ({
    getFilmsFilter(id) {
        return () => {
            dispatch(getFilms(id));
        };
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FilmList);
