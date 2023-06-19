import React from "react";
import Card from "../../components/Card";
import FormGroup from "../../components/form-group";
import ClienteService from "../../service/ClienteService";
import {withRouter} from "react-router-dom";
import {mensagemErro,mensagemSucesso} from "../../components/toastr";
import InputMask from 'react-input-mask'
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
    validar(){
        const msgs = []

        if(!this.state.nomeCliente){
            msgs.push('O campo nome é obrigatorio')
        }

        if (!this.state.emailCliente){
            msgs.push('O campo email é obrigatorio')
        }else if (!this.state.emailCliente.match(/^[a-zA-Z0-9.!#$%&'*+\\/=?^_`{|}~-]+@[a-z0-9]+\.[a-z]/)){
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

    cadastrar = () =>{

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
        this.clienteService.salvar(dadosCliente).then(response => {
            mensagemSucesso("Cadastro realizado com sucesso")
            this.cancelar()
        }).catch(error => {
                mensagemErro(error.response.data)
        });

    }

    cancelar = () =>{
        this.props.history.push('/listar-clientes')
    }
    render() {
        return (
            <>

                <Card title="Cadastro Cliente"  icon="bx bxs-user">

                    <div className="form-control-sm row g-2"  >
                        <div class="col-md-6">
                            <FormGroup label="Nome * " htmlFor="inputDefault" >
                                <input type="text"
                                    name="nomeCliente"
                                    className="form-control"
                                    placeholder="Digite o nome do cliente"
                                    id="inputNome"
                                    onChange={e => this.setState({nomeCliente: e.target.value})}
                                />

                            </FormGroup>
                        </div>
                        

                        <div class="col-md-6">
                            <FormGroup label="CPF * " htmlFor="inputDefault">
                                <InputMask mask="999.999.999-99"
                                    type="text"
                                    className="form-control"
                                    // placeholder="___.___.___-__"
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
                                    onChange={e => this.setState({telefoneCliente: e.target.value})}
                                />
                            </FormGroup>
                        </div>
                        
                        <div class="col-md-6">
                            <FormGroup label="E-mail * " htmlFor="inputDefault">
                                <input type="email"
                                    className="form-control"
                                    id="inputEmailCliente"
                                    name="emailCLiente"
                                    onChange={e => this.setState({emailCliente : e.target.value})}/>
                            </FormGroup>
                        </div>
                        
                        <div class="col-md-6">
                            <FormGroup label="Data de nascimento * " htmlFor="inputDefault">
                                <input type="date"
                                    className="form-control"
                                    id="inputDataDeNascimentoCliente"
                                    name="dataDeNascimentoCliente"

                                    onChange={e => this.setState({dataDeNascimentoCliente: e.target.value})}/>
                            </FormGroup>
                        </div>
                        
                        <br/>
                        <div class="col-md-6 mt-5">
                            <button onClick={this.cadastrar} type="button" className="btn btn-primary btn-hover" style={{borderRadius:"12px"}} >Cadastrar</button>
                            <button onClick={this.cancelar} type="button" className="btn btn-primary btn-hover" style={{borderRadius:"12px", margin:"5px"}} >Cancelar</button>
                        </div>
                    </div>
                </Card>

            </>
        );
    }
}

export default withRouter(CadastroCliente)