import React from 'react';
import { login } from '../redux/login/actions';
import { connect } from 'react-redux';
import MessageLogin from './MessageLogin';

// Rendu du formulaire de connexion de l'application
class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //Fonction appelée lorsqu'un changement est détecté dans les input email ou password
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    // Fonction appelée lorsque que le formulaire est soumit
    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const { dispatch } = this.props;
        dispatch(login(email, password));
    }

    render() {
        const { email, password } = this.state;
        return (
            <div>
                <div className="limiter">
                    <div className="container-login100">
                        <div className="wrap-login100 p-t-50 p-b-90">
                            <MessageLogin/><br/>
                            <form className="login100-form validate-form flex-sb flex-w" onSubmit={this.handleSubmit}>
                                <span className="login100-form-title p-b-51">
                                    Connexion
                                </span>

                                <div className="wrap-input100 validate-input m-b-16">
                                    <input className="input100" type="text" name="email" placeholder="Email" value={email} onChange={this.handleChange}/>
                                        <span className="focus-input100"></span>
                                </div>


                                <div className="wrap-input100 validate-input m-b-16">
                                    <input className="input100" type="password" name="password" placeholder="Mot de passe" value={password} onChange={this.handleChange}/>
                                        <span className="focus-input100"></span>
                                </div>

                                <div className="container-login100-form-btn m-t-17">
                                    <button className="login100-form-btn">
                                        Login
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect()(LoginPage);


