import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fire from './config/Fire';
import  "./index.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className='container loginform'>
      <div className="col-md-12">
        <form>
          <div class="form-group">
            {/* <label for="exampleInputEmail1">Email address</label> */}
            <input  value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresa tu direccion de correo" />
            <small id="emailHelp" class="form-text text-muted">No compartiremos con nadie tu direccion de correo.</small>
          </div>
          <div class="form-group">
            {/* <label for="exampleInputPassword1">Password</label> */}
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Ingresa tu  Contraseña" />
          </div>
          <div className='btn-submit'>
          <button className='create-acount' onClick={this.signup}  >No tienes cuenta aun? Registrate </button>

          </div>
          {/* <button style={{marginLeft: '25px'}} className="btn btn-success">Registrarse</button> */}
        </form>
      
      </div>
      </div> 
    );
  }
}
export default Login;

