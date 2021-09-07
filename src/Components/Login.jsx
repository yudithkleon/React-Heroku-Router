import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'
import { Link } from 'react-router-dom'
 

const url = 'https://appiyudith.herokuapp.com/usuario'

export default class Login extends Component {
//creamos el estADO
    constructor (){
        super()
            this.state = {
                form:{
                    username: '',
                    password: '' 
                }
            }
    }
        //iniciar sesion
        iniciarSeccion = async () =>{
            await axios.get(url, {params:{username:this.state.form.username, password: md5(this.state.form.password)}})
            .then((resp) => {return resp.data})
            .then ((resp) => {
                if (resp.length){
                    let respuesta= resp[0]; 
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`)
                }
                else{
                    alert ('usuario ocontraseña incorrecta no creado')
                }
            })
        }

    //SETSTATE es para el estado, mantenga la informacion actual + lo que estoy enviando
    //hasdle es una funcion para capturar el evento
    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
                //[e.target.name]esto esta en la data e.target.value el valor que tiene
            }
        });
       // console.log(this.state.form) //imprimir todo el estado 
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.iniciarSeccion()
    }
    render() {
        return (
            <div>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                <h1 className="h4 mb-3 font-weight-normal">
                    Inicio de sesión
                </h1>

                <input
                    type="email"
                    id="inputEmail"
                    className="form-control mt-1"
                    placeholder="Email"
                    required=""
                    onChange={this.handleChange}
                    name="username"
                />

                <input
                    type="Password"
                    id="inputPassword"
                    className="form-control mt-1"
                    placeholder="Contreña"
                    required=""
                    onChange={this.handleChange}
                    name="password"
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                <div className="">
                    <p>Login with social networks</p>

                    <div className="google-btn btn-primary">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                  <Link
                    to="/registro"
                    className="Link"
                   >
                    Create new account
                </Link>
            </form>
        </div>
        )
    }
}
