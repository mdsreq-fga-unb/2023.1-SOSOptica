import React from "react";

export default props => {
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
                        <th>Editar</th>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                {/*{props.children}*/}
                </tbody>
            </table>
        </div>
    )
}