import Layout from './Layout';
import './Login.css'

class Login extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.inputEmail.value);
        console.log(event.target.inputPassword.value)
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