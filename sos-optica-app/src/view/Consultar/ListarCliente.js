import React from "react";
import {withRouter} from "react-router-dom";
import Table from "./Table";
import ClienteService from "../../service/ClienteService";
import {Card} from "react-bootstrap";

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

                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                            <Table clientes={this.state.clientes}></Table>
                            <button type="button" className="btn btn-primary"  onClick={this.voltar}>Cadastrar Cliente</button>
                        </div>
                    </div>

                </>


        )
    }
}

export default withRouter(ListarCliente)