import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faEye, faTrash} from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const rows = props.clientes.map(cliente => {
        return (
            <tr key={cliente.id}>
                <td>{cliente.nomeCliente}</td>
                <td>{cliente.cpf}</td>
                <td>{cliente.telefoneCliente}</td>
                <td >{cliente.emailCliente}</td>
                <td>{cliente.dataDeNascimentoCliente}</td>
                <td>
                    <div className="d-flex">

                        <a type="button" style={{margin:"2px"}} ><FontAwesomeIcon icon={faEdit} className="me-2" /></a>

                        <a type="button" >
                            <FontAwesomeIcon icon={faEye} className="me-2" />
                        </a>

                        <a type="button" >
                            <FontAwesomeIcon icon={faTrash} />
                        </a>
                    </div>
                </td>
            </tr>
        )
    }
    )
    return (
        <div className="table table-hover">

            <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col"> CPF</th>
                        <th scope="col" >Telefone</th>
                        <th scope="col" >E-mail</th>
                        <th scope="col">Data de Nascimento</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>
    )
}