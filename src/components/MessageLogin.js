import React from 'react';
import { connect } from 'react-redux';

// Rendu du message après soumission du formulaire de connexion
const MessageLogin = ({ messageLogin }) =>
<div id='message-login'>

    {messageLogin[1] === 200 &&
        <div className="notice notice-success">
            <strong>Succès !</strong><br/>
            <span><strong>Token: </strong><i>{messageLogin[0]}</i></span>
        </div>
    }

    {messageLogin[1] === 400 &&
        <div className="notice notice-danger">
            <strong>Erreur !</strong><br/>
            <span><strong>Détail: </strong><i>{messageLogin[0]}</i></span>
        </div>
    }

</div>;

const mapStateToProps = ({ messageLogin }) => ({
    messageLogin
});

export default connect(mapStateToProps)(MessageLogin);
