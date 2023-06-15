import React from "react";
import {withRouter} from "react-router-dom";
import ClienteService from "../../service/ClienteService";
import Card from "../../components/Card";
import TableCliente from "./TableCliente";

class ListarCliente extends React.Component{

    state = {  clientes : [] }

    constructor() {
        super();
        this.clienteService = new ClienteService();
    }

    listarTodosClientes = () => {
        this.clienteService.listarClientes().then(response => {
            this.setState({clientes:response.data})
        }
        ).catch(error => {
            console.log(error.response)
        })

        }

    voltar = () =>{
        this.props.history.push('/cadastrar-cliente')
    }

    render(){

        this.listarTodosClientes()
        return(

                <>
                    <Card>
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                            <TableCliente clientes={this.state.clientes}></TableCliente>
                            <button type="button" className="btn btn-primary"  onClick={this.voltar}>Cadastrar Cliente</button>
                        </div>
                    </div>
                    </Card>
                </>


        )
    }
}

export default withRouter(ListarCliente)