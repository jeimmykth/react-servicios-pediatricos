import axios from 'axios';
import './Login.css'

class Login extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        axios.post('localhost:3000/api/login', {
            email: event.target.inputEmail.value,
            password: event.target.inputPassword.value
        })
        .then(function (response) {
            console.log(response);
        })
        .then(function(error) {
            console.log(error);
        })
    }

    render () {
        return (
            <div className="container">
                <div className="card card-container">
                    <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" />
                    <p id="profile-name" className="profile-name-card"></p>
                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <span id="reauth-email" className="reauth-email"></span>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email" required autoFocus/>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                
                        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Iniciar Sesion</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;