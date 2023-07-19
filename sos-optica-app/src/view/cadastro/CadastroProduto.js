import React from "react";
import Card from "../../components/Card";
import FormGroup from "../../components/form-group";
import ProdutoService from "../../service/ProdutoService";
import {withRouter} from "react-router-dom";
import {mensagemErro,mensagemSucesso} from "../../components/toastr";
import NavBar from "../../components/dashboard/NavBar";
import Dashboard from "../../components/dashboard/Dashboard";

class CadastroProduto extends React.Component{

    state = {
        nomeProduto : "",
        descricaoProduto : "",
        coresDisponiveis : "",
        marcaProduto : "",
        precoCusto: "",
        precoVenda: "",
        qtDePecas: "",
    }

    constructor() {
        super();
        this.ProdutoService = new ProdutoService();
    }
    validar(){
        const msgs = []

        if(!this.state.nomeProduto){
            msgs.push('O campo Nome é obrigatorio')
        }
        if(!this.state.descricaoProduto){
            msgs.push('O campo Descricao é obrigatorio')
        }
        if(!this.state.coresDisponiveis){
            msgs.push('O campo Cores Disponíveis é obrigatorio')
        }
        if(!this.state.marcaProduto){
            msgs.push('O campo Marca é obrigatorio')
        }
        if(!this.state.precoCusto){
            msgs.push('O campo Preço Custo é obrigatorio')
        }
        if(!this.state.precoVenda){
            msgs.push('O campo Preço Venda é obrigatorio')
        }
        if(!this.state.qtDePecas){
            msgs.push('O campo Quantidade é obrigatorio')
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
            nomeProduto : this.state.nomeProduto,
            descricaoProduto : this.state.descricaoProduto,
            coresDisponiveis : this.state.coresDisponiveis,
            marcaProduto : this.state.marcaProduto,
            precoCusto: this.state.precoCusto,
            precoVenda: this.state.precoVenda,
            qtDePecas: this.state.qtDePecas
        }
        this.ProdutoService.salvar(dadosProduto).then(response => {
            mensagemSucesso("Cadastro realizado com sucesso")
            this.cancelar()
        }).catch(error => {
                mensagemErro(error.response.data)
        });

    }

    cancelar = () =>{
        this.props.history.push('/listar-produtos')
    }
    
    formatCurrency = (value) => {
        const numericValue = value.replace(/\D/g, '');

        const formattedValue = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }).format(numericValue / 100); 

        return formattedValue;
    };

    handleChangeCusto = (e) => {
        const { value } = e.target;
        const formattedValue = this.formatCurrency(value);

        this.setState({ precoCusto: formattedValue });
    };

    handleChangeVenda = (e) => {
        const { value } = e.target;
        const formattedValue = this.formatCurrency(value);

        this.setState({ precoVenda: formattedValue });
    };

    handleChangeQtPecas = (e) => {
        const { value } = e.target;
    
        // Ensure only positive numeric values are set
        if (value === '' || (value.match(/^\d*\.?\d*$/) && Number(value) >= 0)) {
          this.setState({ qtDePecas: value });
        }
      };

    render() {
        return (
            <>
            <NavBar></NavBar>
            <Dashboard></Dashboard>

                <Card title="Cadastro Produto"  icon="bx bxs-user">

                    <div className="form-control-sm row g-2"  >
                        <div class="col-md-6">
                            <FormGroup label="Nome * " htmlFor="inputDefault" >
                                <input type="text"
                                    name="nomeProduto"
                                    className="form-control"
                                    placeholder="Digite o nome do produto"
                                    id="inputNome"
                                    onChange={e => this.setState({nomeProduto: e.target.value})}
                                />
                            </FormGroup>
                        </div>
                        

                        <div class="col-md-6">
                            <FormGroup label="Descrição * " htmlFor="inputDefault" >
                                <input type="text"
                                    name="descricaoProduto"
                                    className="form-control"
                                    placeholder="Digite a descrição do produto"
                                    id="inputDescricao"
                                    onChange={e => this.setState({descricaoProduto: e.target.value})}
                                />
                            </FormGroup>
                        </div>
                        

                        <div class="col-md-6">
                            <FormGroup label="Cores Disponíveis * " htmlFor="inputDefault" >
                                <input type="text"
                                    name="coresDisponiveis"
                                    className="form-control"
                                    placeholder="Digite o nome do produto"
                                    id="inputCores"
                                    onChange={e => this.setState({coresDisponiveis: e.target.value})}
                                />
                            </FormGroup>
                        </div>
                        
                        <div class="col-md-6">
                            <FormGroup label="Marca * " htmlFor="inputDefault" >
                                <input type="text"
                                    name="marcaProduto"
                                    className="form-control"
                                    placeholder="Digite o nome do produto"
                                    id="inputMarca"
                                    onChange={e => this.setState({marcaProduto: e.target.value})}
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-6">
                            <FormGroup label="Preço Custo * " htmlFor="inputDefault">
                                <input
                                type="text"
                                name="precoCusto"
                                className="form-control"
                                placeholder="Digite o preço de custo do produto"
                                id="inputPrecoCusto"
                                value={this.state.precoCusto}
                                onChange={this.handleChangeCusto}
                                />
                            </FormGroup>
                        </div>
                        <div className="col-md-6">
                            <FormGroup label="Preço Venda * " htmlFor="inputDefault">
                                <input
                                type="text"
                                name="precoVenda"
                                className="form-control"
                                placeholder="Digite o preço de venda do produto"
                                id="inputPrecoVenda"
                                value={this.state.precoVenda}
                                onChange={this.handleChangeVenda}
                                />
                            </FormGroup>
                        </div>

                        <div className="col-md-6">
                            <FormGroup label="Quantidade de peças * " htmlFor="inputDefault">
                            <input
                                type="text"  // Use type="text" instead of type="number"
                                name="qtPecas"
                                className="form-control"
                                placeholder="Digite quantas unidades deseja cadastrar"
                                id="inputQtPecas"
                                value={this.state.qtDePecas}
                                onChange={this.handleChangeQtPecas}
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

export default withRouter(CadastroProduto)