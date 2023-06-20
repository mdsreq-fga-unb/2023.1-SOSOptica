import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEdit, faEye, faTrash} from '@fortawesome/free-solid-svg-icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const rows = props.vendas.map(venda => {
        return (
            <tr key={venda.id}>
                <td>{venda.nomeProduto}</td>
                <td>{venda.nomeCliente}</td>
                <td>{venda.quantidadeProduto}</td>
                <td>{venda.valor}</td>
                <td>{venda.dataCadastro}</td>
                <td>
                    <div className="d-flex">
                        <a type="button" style={{padding:"10px"}} >
                            <FontAwesomeIcon icon={faEdit} className="me-2" />
                        </a>

                        <a type="button"  style={{padding:"10px"}}>
                            <FontAwesomeIcon icon={faEye} className="me-2" />
                        </a>

                        <a type="button" style={{padding:"10px"}} >
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
                        <th scope="col">Produto</th>
                        <th scope="col">Cliente</th>
                        <th scope="col" >Quantidade</th>
                        <th scope="col" >Valor</th>
                        <th scope="col">Data da Venda</th>
                        <th scope="col">AÇÕES</th>
                    </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>
    )
}