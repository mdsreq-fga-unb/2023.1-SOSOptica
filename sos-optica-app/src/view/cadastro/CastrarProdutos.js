import React from "react";
import Card from "../../components/Card";
import FormGroup from "../../components/form-group";
import ProdutoService from "../../service/ProdutoService";
import {withRouter} from "react-router-dom";
import {mensagemErro,mensagemSucesso} from "../../components/toastr";
import InputMask from 'react-input-mask'
import { NumericFormat } from 'react-number-format';

class CadastroCliente extends React.Component{
      
    state = {
        nomeProduto : "",
        fornecedor : "",
        marca : "",
        precoCusto : "",
        precoVenda : "",
        quantidade: 1
    }

    constructor() {
        super();
        this.produtoService = new ProdutoService();
    }
    validar(){
        const msgs = []

        if(!this.state.nomeProduto){
            msgs.push('O campo nome do produto é obrigatorio')
        }


        if (!this.state.precoVenda){
            msgs.push('O campo preço de venda é obrigatirio')
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

        const dadosProduto = {
            nomeProduto: this.state.nomeProduto,
            fornecedor : this.state.fornecedor,
            marca : this.state.marca,
            precoCusto : this.state.precoCusto.split('.').join('').replace(',','.').split('R$ ').join(''),
            precoVenda : this.state.precoVenda.split('.').join('').replace(',','.').split('R$ ').join(''),
            quantidade: parseInt(this.state.quantidade)
        }
        
        this.produtoService.salvar(dadosProduto).then(response => {
            mensagemSucesso("Cadastro realizado com sucesso")
            this.cancelar()
        }).catch(error => {
                mensagemErro(error.response.data)
        });

    }

    cancelar = () =>{
        this.props.history.push('/listar-produtos')
    }
    render() {
        return (
            <>

                <Card title="Cadastro Produto"  icon="bx bxs-user">

                    <div className="form-control-sm row g-2"  >
                        <div class="col-md-6">
                            <FormGroup label="Nome do Produto * " htmlFor="inputDefault" >
                                <input type="text"
                                    name="nomeProduto"
                                    className="form-control"
                                    placeholder="Digite o nome do cliente"
                                    id="inputProduto"
                                    onChange={e => this.setState({nomeProduto: e.target.value})}
                                />

                            </FormGroup>
                        </div>
                        

                        <div class="col-md-6">
                            <FormGroup label="Fornecedor " htmlFor="inputDefault">
                                <InputMask
                                    type="text"
                                    placeholder="Digite o nome do fornecedor"
                                    className="form-control"
                                    id="inputFornecedor"
                                    name="fornecedor"
                                    onChange={e => this.setState({fornecedor: e.target.value})}
                                />
                            </FormGroup>
                        </div>
                        

                        <div class="col-md-6">
                            <FormGroup label="Marca" htmlFor="inputDefault">
                                <InputMask
                                    type="text"
                                    className="form-control"
                                    id="inputMarca"
                                    placeholder="Digite a marca do produto"
                                    name="marca"
                                    onChange={e => this.setState({marca: e.target.value})}
                                />
                            </FormGroup>
                        </div>
                        
                        <div class="col-md-6">
                            <FormGroup label="Preço de custo" htmlFor="inputDefault">
                                <NumericFormat
                                    className="form-control"
                                    decimalScale={2}
                                    decimalSeparator={","}
                                    thousandSeparator="."
                                    prefix={'R$ '}
                                    placeholder="R$ 0,00"
                                    onChange={e => this.setState({precoCusto: e.target.value})}
                                />
                            </FormGroup>
                        </div>

                        <div class="col-md-6">
                            <FormGroup label="Preço Venda *" htmlFor="inputDefault">
                                <NumericFormat
                                    className="form-control"
                                    decimalScale={2}
                                    decimalSeparator={","}
                                    thousandSeparator="."
                                    prefix={'R$ '}
                                    placeholder="R$ 0,00"
                                    onChange={e => this.setState({precoVenda: e.target.value})}
                                />
                            </FormGroup>
                        </div>
                        
                        <div class="col-md-6">
                            <FormGroup label="Quantidade" htmlFor="inputDefault">
                                <input type="number"
                                    className="form-control"
                                    id="inputQuantidade"
                                    name="quantidade"
                                    defaultValue={1}
                                    onChange={e => this.setState({quantidade: e.target.value})}
                                />
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