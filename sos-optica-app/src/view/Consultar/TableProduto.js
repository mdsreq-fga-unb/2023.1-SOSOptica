import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

        const rows = props.produtos.map(produto => {
            let url = '/#/editar-produto/' + produto.id;
            return (
                <tr key={produto.id}>
                    <td>{produto.nomeProduto}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.fornecedor}</td>
                    <td>{produto.marca}</td>
                    <td>{produto.precoCusto}</td>
                    <td>{produto.precoVenda}</td>
                    <td>{produto.qtDePecas}</td>

                    <td>
                        <div className="d-flex">
                            <a href={url} type="button" style={{padding:"10px"}} >
                                <FontAwesomeIcon icon={faEdit} className="me-2" />
                            </a>
                            <a onClick={event => props.deleteAction(produto)} type="button" className="btn-hover-red" style={{padding:"10px"}} >
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
                            <th scope="col">Descrição</th>
                            <th scope="col">Cor</th>
                            <th scope="col">Marca</th>
                            <th scope="col">Preço de Custo</th>
                            <th scope="col">Preço de Venda</th>
                            <th scope="col" >Quantidade</th>
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