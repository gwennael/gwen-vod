import React, { Component } from 'react';
import { Player } from 'video-react';
import { IMG_POSTER_TMDb_URL } from '../constants'

// Rendu du lecteur de l'application
class PlayerPage extends Component {

    constructor(props) {
        super(props);

        // Récupération du film courant
        if ((typeof this.props.location.query !== 'undefined' || this.props.location.query) && (typeof this.props.location.query.film !== 'undefined' || this.props.location.query.film)){
            if (this.props.location.query.film !== "undefined")
                this.currentFilm = this.props.location.query.film;
        }

        this.changeCurrentTime = this.changeCurrentTime.bind(this);
    }

    // Fonction permetant de manipuler le temps d'une vidéo dans le lecteur
    changeCurrentTime(seconds) {
        return () => {
            const { player } = this.refs.player.getState();
            const currentTime = player.currentTime;
            this.refs.player.seek(currentTime + seconds);
        };
    }

    render () {
        return (
            <div id="lecteur">
                <h1>Lecteur</h1>
                <hr className="hr-primary" /><br/>
                <h3>Bande annonce de "<i>{this.currentFilm ? this.currentFilm.original_title : "Batman VS Superman"}</i>"</h3><br/>
                <Player
                    playsInline
                    ref="player"
                    poster={(this.currentFilm && this.currentFilm.poster_path) ? IMG_POSTER_TMDb_URL+this.currentFilm.poster_path : (this.currentFilm) ? "../img/Image-not-available_1.jpg" : IMG_POSTER_TMDb_URL+"/cGOPbv9wA5gEejkUN892JrveARt.jpg"}
                    src="http://videos.hd-trailers.net/BatmanvSuperman_TLR-1_5.1-480p-HDTN.mp4"
                />
                <button onClick={this.changeCurrentTime(-30)} type="button" className="btn btn-default col-12 col-sm-6 col-xs-12">-30 sec</button>
                <button onClick={this.changeCurrentTime(+30)} type="button" className="btn btn-default col-12 col-sm-6 col-xs-12">+30 sec</button>
            </div>
        );
    }
}

export default PlayerPage;
