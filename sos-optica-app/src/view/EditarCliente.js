import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/form-group";
import ClienteService from "../service/ClienteService";
import {withRouter} from "react-router-dom";
import {mensagemErro,mensagemSucesso} from "../components/toastr";
import InputMask from 'react-input-mask'
import Dashboard from "../components/dashboard/Dashboard";
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

    componentDidMount() {
        const params = this.props.match.params
        if (params.id){
            this.clienteService.getClienteById(params.id).then(response => {
                this.setState({...response.data})
            }).catch(error => {
                mensagemErro(error.response.data)
            })  
        }
    }

    validar(){
        const msgs = []

        if(!this.state.nomeCliente){
            msgs.push('O campo nome é obrigatorio')
        }

        if (!this.state.emailCliente){
            msgs.push('O campo email é obrigatorio')
        }else if (!this.state.emailCliente.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)){
            msgs.push('Infome um e-mail valido')
        }

        if (!this.state.cpf){
            msgs.push('O campo CPF é obrigatorio')
        }

        if (!this.state.telefoneCliente){
            msgs.push('O campo Telefone é obrigatorio')
        }



        return msgs;

    }

    editar = () =>{
        const msgs = this.validar();
        if (msgs && msgs.length > 0 ){
            msgs.forEach((msg,index) =>{
                mensagemErro(msg)
                });
            return false
        }

        const dadosCliente = {
            nomeCliente: this.state.nomeCliente,
            emailCliente : this.state.emailCliente,
            telefoneCliente: this.state.telefoneCliente,
            dataDeNascimentoCliente : this.state.dataDeNascimentoCliente,
            cpf : this.state.cpf
        }
        
        let id = this.props.match.params.id;
        this.clienteService.atualizar(id, dadosCliente).then(response => {
            mensagemSucesso(`Cliente <b>${response.data.nomeCliente}</b> atualizado com sucesso!`)
            this.cancelar()
        }).catch(error => {
                mensagemErro(error.response.data)
        });

 

    }

    cancelar = () =>{
        this.props.history.push('/listar-cliente')
    }
    render() {

        return (
            <>
                <Dashboard></Dashboard>
                <Card title="Editar Cliente"  icon="bx bxs-user">
                    <div className="form-control-sm row g-2">
                        <div class="col-md-6">
                            <FormGroup label="Nome * " htmlFor="inputDefault">
                                <input
                                    type="text"
                                    value={this.state.nomeCliente}
                                    className="form-control"
                                    name="nomeCliente"
                                    onChange={e => this.setState({nomeCliente: e.target.value})}
                                />
                            </FormGroup>
                        </div>
                        <div class="col-md-6">
                            <FormGroup label="CPF * " htmlFor="inputDefault">
                                <InputMask
                                    type="text"
                                    value={this.state.cpf}
                                    className="form-control"
                                    id="inputCpf"
                                    name="cpf"
                                    onChange={e => this.setState({cpf: e.target.value})}
                                />
                            </FormGroup>    
                        </div>
                        <div class="col-md-6">
                            <FormGroup label="Telefone * " htmlFor="inputDefault">
                                <InputMask mask="(99)99999-9999"
                                        type="tel"
                                    className="form-control"
                                    id="inputTelefoneCliente"
                                    name="telefoneCliente"
                                    value={this.state.telefoneCliente}
                                    onChange={e => this.setState({telefoneCliente: e.target.value})}
                                />
                            </FormGroup>
                        </div>
                        <div class="col-md-6">
                            <FormGroup label="E-mail * " htmlFor="inputDefault">
                                <input type="email"
                                    value={this.state.emailCliente}
                                    className="form-control"
                                    id="inputEmailCliente"
                                    name="emailCLiente"
                                    onChange={e => this.setState({emailCliente : e.target.value})}/>
                            </FormGroup>
                        </div>
                        <div class="col-md-6">
                            <FormGroup label="Data de nascimento * " htmlFor="inputDefault">
                                <input type="date"
                                    value={this.state.dataDeNascimentoCliente}
                                    className="form-control"
                                    id="inputDataDeNascimentoCliente"
                                    name="dataDeNascimentoCliente"
                                    onChange={e => this.setState({dataDeNascimentoCliente: e.target.value})}/>
                            </FormGroup>
                        </div>
                        <br/>
                        <div class="col-md-6">
                            <button onClick={this.editar} type="button" className="btn btn-primary" style={{borderRadius:"16px"}} >Editar</button>
                            <button onClick={this.cancelar} type="button" className="btn btn-primary" style={{borderRadius:"16px", margin:"5px"}} >Cancelar</button>        
                        </div>
                    </div>
                </Card>
            </>
        );
    }
}

export default withRouter(CadastroCliente)