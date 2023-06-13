import React from "react";
import {withRouter} from "react-router-dom";
import Card from "../../components/Card";
import Table from "./Table";

class ListarCliente extends React.Component{
    render(){
        return(

                <>
                    <Card title="Listar Clientes">
                    <div className="row" style={{margin:"20px"}}>
                        <div className="col-md-12">
                        <Table></Table>
                        </div>
                    </div>

                    </Card>
                </>


        )
    }
}

export default withRouter(ListarCliente)