import React from "react";
import {withRouter} from "react-router-dom";
import ClienteService from "../../service/ClienteService";
import Card from "../../components/Card";
import TableCliente from "./TableCliente";

class ListarCliente extends React.Component{

    state = {  clientes : [] ,
            cpf : "",
    }

    constructor() {
        super();
        this.clienteService = new ClienteService();
    }

    async componentDidMount() {
        let data = await (await this.clienteService.listarClientes()).data;
        this.setState({clientes: data});
    }

    listarTodosClientes = () => {
        this.clienteService.listarClientes().then(response => {
            this.setState({clientes:response.data})
        }
        ).catch(error => {
            console.log(error.response)
        })

        }

    pesquisarCpf = () => {
        this.clienteService.pesquisarClientePorCpf(this.state.cpf).then(response => {
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
        return(

                    <Card>

                    <div className="row" style={{margin:"20px"}}>

                        <div className="col-md-6 ms-auto" style={{padding: "0 45px 0 0", marginTop: "20px"}}>
                            <input  type="text"
                                    name="CPF"
                                    className="form-control col-md-1"
                                    placeholder="CPF"
                                    id="inputCpf"
                                    style={{float: "left", width: "75%"}}
                                    onChange={e => this.setState({cpf: e.target.value})}
                            />

                            <button type="button" style={{float: "right", width: "25%"}} className="btn btn-primary float-right"  onClick={this.pesquisarCpf}>Pesquisar</button>
                        </div>

                        <div className="col-md-12">
                            <br/>
                            <TableCliente clientes={this.state.clientes}></TableCliente>
                            <button type="button" className="btn btn-primary"  onClick={this.voltar}>Cadastrar Cliente</button>

                            <button type="button" className="btn btn-primary" style={{margin:"10px"}} onClick={this.listarTodosClientes}>Vizualizar Todos</button>
                        </div>
                    </div>
                    </Card>
        )
    }
}

export default withRouter(ListarCliente)