import React from "react";


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
                    </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        </div>
    )
}