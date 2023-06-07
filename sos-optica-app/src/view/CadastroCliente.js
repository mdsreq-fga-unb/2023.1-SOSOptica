import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/form-group";
import ClienteService from "../service/ClienteService";
import {withRouter} from "react-router-dom";
import {mensagemErro,mensagemSucesso} from "../components/toastr";

class CadastroCliente extends React.Component{

    state = {
        nomeCliente : "",
        emailCliente : "",
        telefoneCliente : "",
        dataDeNascimentoCliente : "",
        cpf : "",
    }

    constructor() {
        super();
        this.clienteService = new ClienteService();
    }

    cadastrar = () =>{
        const dadosCliente = {
            nomeCliente: this.state.nomeCliente,
            emailCliente : this.state.emailCliente,
            telefoneCliente: this.state.telefoneCliente,
            dataDeNascimentoCliente : this.state.dataDeNascimentoCliente,
            cpf : this.state.cpf
        }
        console.log(dadosCliente)
        this.clienteService.salvar(dadosCliente).then(response => {
            mensagemSucesso("Cadastro realizado com sucesso")
            this.props.history.push('/listar-cliente')


        })
            .catch(error => {
                mensagemErro(error.response.data)
            });

    }
    render() {
        return (
            <>
                <Card title="Cadastro Cliente"  icon="bx bxs-user">

                    <div className="form-control-sm"  >
                        <FormGroup label="Nome * " htmlFor="inputDefault" >
                            <input type="text"
                                   name="nomeCliente"
                                   className="form-control"
                                   placeholder="Digite o nome do cliente"
                                   id="inputNome"
                                   onChange={e => this.setState({nomeCliente: e.target.value})}
                            />

                        </FormGroup>


                        <FormGroup label="CPF * " htmlFor="inputDefault">
                            <input type="text"
                                   className="form-control"
                                   placeholder="000.000.000-00"
                                   id="inputCpf"
                                   name="cpf"
                                   onChange={e => this.setState({cpf: e.target.value})}/>
                        </FormGroup>


                        <FormGroup label="Telefone * " htmlFor="inputDefault">
                            <input type="tel"
                                   className="form-control"
                                   id="inputTelefoneCliente"
                                   name="telefoneCliente"
                                   onChange={e => this.setState({telefoneCliente: e.target.value})}
                            />
                        </FormGroup>

                        <FormGroup label="E-mail * " htmlFor="inputDefault">
                            <input type="email"
                                   className="form-control"
                                   id="inputEmailCliente"
                                   name="emailCLiente"
                                   onChange={e => this.setState({emailCliente : e.target.value})}/>
                        </FormGroup>

                        <FormGroup label="Data de nascimento * " htmlFor="inputDefault">
                            <input type="date"
                                   className="form-control"
                                   id="inputDataDeNascimentoCliente"
                                   name="dataDeNascimentoCliente"

                                   onChange={e => this.setState({dataDeNascimentoCliente: e.target.value})}/>

                        </FormGroup>
                        <br/>
                        <button onClick={this.cadastrar} type="button" className="btn btn-primary" style={{borderRadius:"16px"}} >Cadastrar</button>
                    </div>
                </Card>

            </>
        );
    }
}

export default withRouter(CadastroCliente)