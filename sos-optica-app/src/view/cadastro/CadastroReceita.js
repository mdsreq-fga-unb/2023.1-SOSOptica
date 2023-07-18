import React from "react";
import Card from "../../components/Card";
import FormGroup from "../../components/form-group";
//import ReceitaService from "../../service/ReceitaService";
import {withRouter} from "react-router-dom";
import NavBar from "../../components/dashboard/NavBar";
import Dashboard from "../../components/dashboard/Dashboard";

class CadastroReceita extends React.Component{

    state = {
        medicoResponsavel :     "",
        dataDeValidadeReceita : "",
        longeEsfericoOD:        false, 
        longeEsfericoOE:        false, 
        longeCilindricoOD:      false, 
        longeCilidrincoOE:      false,  
        pertoEsfericoOD:        false, 
        pertoEsfericoOE:        false,
        pertoCilindricoOD:      false,
        pertoCilindricoOE:      false 
    }

/*     constructor() {
        super();
        this.receitaService = new ReceitaService();
    } */

    handleChange = e => {
        const { name, checked } = e.target;
        this.setState({ [name]: checked });
    };

    handleSubmit = e =>{
        e.preventDefault();
        console.log(`checked: ${this.state.longeEsfericoOD}`);
        console.log(`checked: ${this.state.longeEsfericoOE}`);
        console.log(`checked: ${this.state.longeCilindricoOD}`);
        console.log(`checked: ${this.state.longeCilindricoOE}`);
        console.log(`checked: ${this.state.pertoEsfericoOD}`);
        console.log(`checked: ${this.state.pertoEsfericoOE}`);
        console.log(`checked: ${this.state.pertoCilindricoOD}`);
        console.log(`checked: ${this.state.pertoCilindricoOE}`);
    }

/*     constructor() {
        super();
        this.receitaService = new ReceitaService();
    }
 */
/*     validar(){
        const msgs = []

        if(!this.state.medicoResponsavel){
            msgs.push('O campo médico responsável é obrigatorio')
        }

        if (!this.state.dataDeValidadeReceita){
            msgs.push('O campo Data de validade é obrigatorio')
        }

        return msgs;
    } */

/*     cadastrarReceita = () =>{

        const msgs = this.validar();
        if (msgs && msgs.length > 0 ){
            msgs.forEach((msg,index) =>{
                mensagemErro(msg)
            });
            return false
        } */

/*         const dadosReceita = {
            medicoResponsavel : this.state.medicoResponsavel,
            dataDeValidadeReceita :   this.state.dataDeValidadeReceita,
            longeEsfericoOD:    this.state.longeEsfericoOD, 
            longeEsfericoOE:    this.state.longeEsfericoOE, 
            longeCilindricoOD:  this.state.longeCilindricoOD,
            longeCilidrincoOE:  this.state.longeCilindricoOE,  
            pertoEsfericoOD:    this.state.pertoEsfericoOD,
            pertoEsfericoOE:    this.state.pertoEsfericoOE,
            pertoCilindricoOD:  this.state.pertoCilindricoOD,
            pertoCilindricoOE:  this.state.pertoCilindricoOE
        }

        this.receitaService.salvar(dadosReceita).then(response => {
            mensagemSucesso("Cadastro realizado com sucesso")
            this.cancelar()
        }).catch(error => {
                mensagemErro(error.response.data)
        }); 
    }*/

    render(){
        return(
            <>
                <NavBar></NavBar>
            <Dashboard></Dashboard>

                <Card title="Cadastro Receita"  icon="bx bxs-user">

                    <div className="form-control-sm row g-2"  >
                        <div class="col-md-6">
                            <FormGroup label="Médico Responsável * " htmlFor="inputDefault" >
                                <input type="text"
                                    name="medicoResponasavel"
                                    className="form-control"
                                    placeholder="Digite o nome do médico responsável"
                                    id="inputNome"
                                    onChange={e => this.setState({medicoResponsavel: e.target.value})}
                                />

                            </FormGroup>
                        </div>
                        
                        <div class="col-md-6">
                            <FormGroup label="Data de validade * " htmlFor="inputDefault">
                                <input type="date"
                                    className="form-control"
                                    id="inputDataDeValidadeReceita"
                                    name="dataDeValidadeReceita"
                                    onChange={e => this.setState({dataDeValidadeReceita: e.target.value})}/>
                            </FormGroup>
                        </div>
                        
                        <div class="col-md-6">
                            <FormGroup onSubmit={this.handleSubmit}>
                                <label>
                                    <input
                                        type="checkbox"
                                        name="longeEsfericoOE"
                                        checked={this.state.longeEsfericoOE}
                                        onChange={this.handleChange}
                                    />
                                    <span> Longe Esférico Olho Esquerdo</span>
                                </label>
                            </FormGroup>
                        </div>

                        <div class="col-md-6">
                            <FormGroup onSubmit={this.handleSubmit}>
                                <label>
                                    <input  
                                        type="checkbox"
                                        name="longeEsfericoOD"
                                        checked={this.state.longeEsfericoOD}
                                        onChange={this.handleChange}
                                    />
                                    <span> Longe Esférico Olho Direito</span>
                                </label>
                            </FormGroup>
                        </div>

                        <div class="col-md-6">
                            <FormGroup onSubmit={this.handleSubmit}>
                                <label>
                                    <input  
                                        type="checkbox"
                                        name="longeCilindricoOE"
                                        checked={this.state.longeCilindricoOE}
                                        onChange={this.handleChange}
                                    />
                                    <span> Longe Cilíndrico Olho Esquerdo</span>
                                </label>
                            </FormGroup>
                        </div>

                        <div class="col-md-6">
                            <FormGroup onSubmit={this.handleSubmit}>
                                <label>
                                    <input  
                                        type="checkbox"
                                        name="longeCilindricoOD"
                                        checked={this.state.longeCilindricoOD}
                                        onChange={this.handleChange}
                                    />
                                    <span> Longe Cilíndrico Olho Direito</span>
                                </label>
                            </FormGroup>
                        </div>

                        <div class="col-md-6">
                            <FormGroup onSubmit={this.handleSubmit}>
                                <label>
                                    <input  
                                        type="checkbox"
                                        name="pertoEsfericoOE"
                                        checked={this.state.pertoEsfericoOE}
                                        onChange={this.handleChange}
                                    />
                                    <span> Perto Esférico Olho Esquerdo</span>
                                </label>
                            </FormGroup>
                        </div>

                        <div class="col-md-6">
                            <FormGroup onSubmit={this.handleSubmit}>
                                <label>
                                    <input  
                                        type="checkbox"
                                        name="pertoEsfericoOD"
                                        checked={this.state.pertoEsfericoOD}
                                        onChange={this.handleChange}
                                    />
                                    <span> Perto Esférico Olho Direito</span>
                                </label>
                            </FormGroup>
                        </div>

                        <div class="col-md-6">
                            <FormGroup onSubmit={this.handleSubmit}>
                                <label>
                                    <input  
                                        type="checkbox"
                                        name="pertoCilindricoOE"
                                        checked={this.state.pertoCilindricoOE}
                                        onChange={this.handleChange}
                                    />
                                    <span> Perto Cilíndrico Olho Esquerdo</span>
                                </label>
                            </FormGroup>
                        </div>

                        <div class="col-md-6">
                            <FormGroup onSubmit={this.handleSubmit}>
                                <label>
                                    <input  
                                        type="checkbox"
                                        name="pertoCilindricoOD"
                                        checked={this.state.pertoCilindricoOD}
                                        onChange={this.handleChange}
                                    />
                                    <span> Perto Cilíndrico Olho Direito</span>
                                </label>
                            </FormGroup>
                        </div>
                        
                        
                        <br/>
                        <div class="col-md-6 mt-5">
                            <button onClick={this.cadastrarReceita} type="button" className="btn btn-primary btn-hover" style={{borderRadius:"12px"}} >Cadastrar</button>
                        </div>
                    </div>
                </Card>

            </>
        );
    }
}

export default withRouter(CadastroReceita)