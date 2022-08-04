import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext';

export const Login = () => {

    const {usuarioState} = useContext(UsuarioContext);

    return (
        <div>
            <p>Usuario: <strong>{usuarioState.sobrenombre}</strong></p>
        </div>
    )
}
