import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/form-group";
import ClienteService from "../service/ClienteService";
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
        this.clienteService.salvar(dadosCliente).then(response => {console.log("Cadastrado com sucesso")
        console.log(this.state)

        })
            .catch(error => {
                console.log("Algo deu errado!!")
            });

    }
    render() {
        return (
            <>
                <Card title="Cadastro Cliente" >


                        <div className="form-control"  >
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


                        </div>

                            <div className="form-control"  >

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
                            <br/>
                            <button onClick={this.cadastrar} type="button" className="btn btn-primary" >Cadastrar</button>
                        </div>
                </Card>

            </>
        );
    }
}

export default CadastroCliente