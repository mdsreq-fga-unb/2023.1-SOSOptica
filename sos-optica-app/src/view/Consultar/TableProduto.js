import React from "react";

export default props => {

        const rows = props.produtos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td>{produto.nomeProduto}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.fornecedor}</td>
                    <td>{produto.marca}</td>
                    <td>{produto.precoCusto}</td>
                    <td>{produto.precoVenda}</td>
                    <td>{produto.qtDePecas}</td>
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
                            <th scope="col" >Fornecedor</th>
                            <th scope="col">Marca</th>
                            <th scope="col" >Quantidade</th>
                            <th scope="col">Preço de Custo</th>
                            <th scope="col">Preço de Venda</th>
                            <th>Editar</th>
                            <th>Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                    {rows}
                    </tbody>
                </table>
            </div>
        )

}