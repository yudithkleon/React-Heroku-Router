import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Registro extends Component {
    render() {
        return (
            <div className="Registro py-5 container text-center">
                <form className="form-signin" onSubmit={this.handleSutmit}>
                    <h1 className="h3 mb-3 font-weight-normal">
                        ¡Registrate en nuestro sistema!
                    </h1>
                    <div className="fadeIn first ">
                        <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS689Xb1GJwNGzZl9KR7CTRKAZFaXt1060H32xPbb8hw_NXNpJ409Sl-aLnPsJQUfKJnYEV_KndttR1bbUKS_f7DGE3OP59H1Y&usqp=CAU&ec=45725305" 
                        id="icon" 
                        alt="User Icon" 
                        width="100px"/>
                        <h3>Crea una cuenta</h3>
                    </div>

                    <input
                        type="text"
                        placeholder="Apellido paterno"
                        name="apellido_paterno"
                        className="form-control"
                        autoComplete="off"

                    />

                    <input
                        type="text"
                        placeholder="Apellido materno"
                        name="apellido_materno"
                        className="form-control"
                        autoComplete="off"

                        required=""

                    />

                    <input
                        type="text"
                        name="nombre"
                        className="form-control"
                        placeholder="nombre"
                        required=""

                    />

                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required=""

                    />

                    <input
                        type="Password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required=""

                    />
                    <br />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block mb-1"
                    >
                        Register
                    </button>
                    <br />
                    <Link
                        to="/login"
                        className="link"
                    >
                        Already registered?
                    </Link>
                </form>
            </div>
        )
    }
}
