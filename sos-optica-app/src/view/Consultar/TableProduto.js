import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faEye, faTrash} from "@fortawesome/free-solid-svg-icons";
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

        const rows = props.produtos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td>{produto.nomeProduto}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.coresDisponiveis}</td>
                    <td>{produto.marca}</td>
                    <td>{produto.precoCusto}</td>
                    <td>{produto.precoVenda}</td>
                    <td>{produto.qtDePecas}</td>

                    <td>
                        <div className="d-flex">
                            <a href="/#" type="button" className="btn-hover" style={{padding:"10px"}}>
                                <FontAwesomeIcon icon={faEdit} className="me-2" />
                            </a>

                            <a href="/#" type="button"  className="btn-hover-blue" style={{padding:"10px"}}>
                                <FontAwesomeIcon icon={faEye} className="me-2" />
                            </a>

                            <a href="/#" type="button" className="btn-hover-red" style={{padding:"10px"}} >
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
                            <th scope="col">Cores Disponíveis</th>
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