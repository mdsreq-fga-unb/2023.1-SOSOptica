import React from "react";
import Card from "../components/Card";
import FormGroup from "../components/form-group";
class CadastroCliente extends React.Component{


    render() {
        return (
            <div className="container" style={{position:"relative" ,left:"500px"}}>
                <Card title="Cadastrar Cliente">
                    <div className="row">
                        <div className="col-md-12" >
                            <FormGroup label="Nome * " htmlFor="inputDefault"  >
                                <input type="text"
                                       className="form-control"
                                       placeholder="Digite o nome do cliente"
                                       id="inputDefault"/>
                            </FormGroup>

                            <FormGroup label="CPF * " htmlFor="inputDefault">
                                <input type="text"
                                       className="form-control"
                                       placeholder="000.000.000-00"
                                       id="inputDefault"/>
                            </FormGroup>

                            <FormGroup label="Telefone * " htmlFor="inputDefault">
                                <input type="tel"
                                       className="form-control"
                                       id="inputDefault"/>
                            </FormGroup>

                            <FormGroup label="Email * " htmlFor="inputDefault">
                                <input type="email"
                                       className="form-control"
                                       id="inputDefault"/>
                            </FormGroup>

                            <FormGroup label="Data de nascimento * " htmlFor="inputDefault">
                                <input type="date"
                                       className="form-control"
                                       id="inputDefault"/>
                            </FormGroup>

                            <FormGroup label="Genero" htmlFor="exampleSelect2" >
                                <select multiple="" className="form-select" id="exampleSelect2" >
                                    <option>Prefiro não informar</option>
                                    <option>Masculino</option>
                                    <option>Feminino</option>
                                </select>
                            </FormGroup>
                            <br/>
                            <button type="button" className="btn btn-primary">Cadastrar</button>

                        </div>
                    </div>

                </Card>

            </div>




        );
    }
}

export default CadastroCliente