import React from "react";
import Card from "../../components/Card";
import FormGroup from "../../components/form-group";
import {withRouter} from "react-router-dom";
import VendaService from "../../service/VendaService";
import {mensagemErro, mensagemSucesso} from "../../components/toastr";

class CadastroVenda extends React.Component{
    state = {
        nomeCliente : "",
        nomeProduto : "",
        quantidadeProduto : "",
        valor : "",
    }
    constructor() {
        super();
        this.vendaService = new VendaService();
    }

    validar(){
        const msgs = []

        if(!this.state.nomeCliente){
            msgs.push('O campo cliente é obrigatorio')
        }

        if (!this.state.nomeProduto){
            msgs.push('O campo produto é obrigatorio')
        }

        if (!this.state.quantidadeProduto){
            msgs.push('O campo quantidade é obrigatorio')
        }

        if (!this.state.valor){
            msgs.push('O campo valor é obrigatorio')
        }



        return msgs;

    }

    cadastrarVenda = () =>{

        const msgs = this.validar();
        if (msgs && msgs.length > 0 ){
            msgs.forEach((msg,index) =>{
                mensagemErro(msg)
            });
            return false
        }

        const dadosVenda = {
            nomeCliente : this.state.nomeCliente,
            nomeProduto : this.state.nomeProduto,
            quantidadeProduto : this.state.quantidadeProduto,
            valor : this.state.valor,
        }


        this.vendaService.salvarVendas(dadosVenda).then(response => {
            mensagemSucesso("Cadastro realizado com sucesso")
            this.cancelar()
        }).catch(error => {
            mensagemErro(error.response.data)
        })

    }

    cancelar = () =>{
        this.props.history.push('/listar-vendas')
    }
    render() {
        return(

                <>

                    <Card title="Cadastro Venda"  icon="bx bxs-user">

                        <div className="form-control-sm row g-2"  >
                            <div class="col-md-6">
                                <FormGroup label="Cliente * " htmlFor="inputDefault" >
                                    <input type="text"
                                           name="nomeCliente"
                                           className="form-control"
                                           placeholder="Digite o nome do cliente"
                                           id="inputNome"
                                           onChange={e => this.setState({nomeCliente: e.target.value})}
                                    />

                                </FormGroup>
                            </div>

                            <div className="col-md-6">
                                <FormGroup label="Produto * " htmlFor="inputDefault">
                                    <input type="produto"
                                           className="form-control"
                                           id="inputNomeProduto"
                                           name="nomeProduto"
                                           onChange={e => this.setState({nomeProduto: e.target.value})}/>
                                </FormGroup>
                            </div>


                            <div className="col-md-6">
                                <FormGroup label="Quantidade * " htmlFor="inputDefault">
                                    <input type="number"
                                           name="quantidade"
                                           className="form-control"
                                           placeholder="0"
                                           id="inputQuantidade"
                                           onChange={e => this.setState({quantidadeProduto: e.target.value})}
                                    />

                                </FormGroup>
                            </div>




                            <div className="col-md-6">
                                <FormGroup label="Valor * " htmlFor="inputDefault">
                                    <input type="number"
                                           className="form-control"
                                           id="inputNomeProduto"
                                           name="nomeProduto"
                                           onChange={e => this.setState({valor: e.target.value})}/>
                                </FormGroup>
                            </div>



                            <br/>
                            <div class="col-md-6 mt-5">
                                <button onClick={this.cadastrarVenda} type="button" className="btn btn-primary" style={{borderRadius:"12px"}} >Cadastrar</button>
                                <button onClick={this.cancelar} type="button" className="btn btn-primary" style={{borderRadius:"12px", margin:"5px"}} >Cancelar</button>
                            </div>
                        </div>
                    </Card>

                </>

        );
    }
}

export  default withRouter(CadastroVenda);