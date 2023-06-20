import React from "react";
import {withRouter} from "react-router-dom";
import ClienteService from "../../service/ClienteService";
import Card from "../../components/Card";
import TableCliente from "./TableCliente";

class ListarCliente extends React.Component{

    state = {  clientes : [] ,
            nome : "",
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

    pesquisarPorNome = () => {
        this.clienteService.pesquisarClientePorNome(this.state.nome).then(response => {
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
                                    name="Nome"
                                    className="form-control col-md-1"
                                    placeholder="Nome"
                                    id="inputCpf"
                                    style={{float: "left", width: "75%"}}
                                    onChange={e => this.setState({nome: e.target.value})}
                            />

                            <button type="button" style={{float: "right", width: "25%"}} className="btn btn-primary float-right btn-hover "  onClick={this.pesquisarPorNome}>Pesquisar</button>
                        </div>

                        <div className="col-md-12">
                            <br/>
                            <TableCliente clientes={this.state.clientes}></TableCliente>
                            <button type="button" className="btn btn-primary btn-hover"  onClick={this.voltar}>Cadastrar Cliente</button>

                            <button type="button" className="btn btn-primary btn-hover" style={{margin:"10px"}} onClick={this.listarTodosClientes}>Vizualizar Todos</button>
                        </div>
                    </div>
                    </Card>
        )
    }
}

export default withRouter(ListarCliente)