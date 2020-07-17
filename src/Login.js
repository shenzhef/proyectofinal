import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';
import './index.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: '',
      error: '',
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .catch((error) => {
        // console.log(error);
        this.setState({
          error: 'Usuario incorrecto.',
          email: '',
          password: '',
        });
      });
    setTimeout(() => {
      this.setState({ error: '' });
    }, 1500);
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {})
      .then((u) => {
        console.log(u);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container loginform">
        <div className="col-md-12">
          <form>
            <div class="form-group">
              {/* <label for="exampleInputEmail1">Email address</label> */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginBottom: '60px',
                }}
              >
                <img
                  src={require('./assets/fonts/logo1.png')}
                  alt="Logo"
                  height="80"
                  // width="250"
                  style={{ alignSelf: 'center' }}
                />
              </div>

              <input
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                name="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingresa tu direccion de correo"
              />
            </div>
            <div class="form-group">
              {/* <label for="exampleInputPassword1">Password</label> */}
              <input
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                class="form-control"
                id="exampleInputEmail2"
                placeholder="Ingresa tu  Contraseña"
              />
            </div>
            <div className="btn-submit">
              <button type="submit" onClick={this.login} id="btn-primary">
                Ingresar
              </button>
              {/* <button className="create-acount" onClick={this.signup}>
                Crear Cuenta{' '}
              </button> */}
            </div>
            <div>
              {this.state.error && (
                <p style={{ color: 'red' }}>{this.state.error}</p>
              )}
              <p
                onClick={(e) => {
                  e.preventDefault();
                  console.log('preesed');
                }}
                style={{
                  color: '#fff',
                  marginTop: '10px',
                  fontSize: 15,
                  background: 'transparent',
                  border: 'none',
                }}
              >
                Crear Cuenta
              </p>
            </div>
            {/* <button style={{marginLeft: '25px'}} className="btn btn-success">Registrarse</button> */}
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
