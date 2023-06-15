import React from "react";
import Apiservice from "../app/apiservice";

// eslint-disable-next-line import/no-anonymous-default-export
class VendaService extends Apiservice{

    constructor() {
        super("/api/vendas");
    }

    async salvarVendas(dadosVenda){
        return await this.post('/cadastrar',dadosVenda);
    }
}

export default VendaService;