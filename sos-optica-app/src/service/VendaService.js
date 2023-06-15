import React from "react";
import Apiservice from "../app/apiservice";

class VendaService extends Apiservice{

    constructor() {
        super("/api/vendas");

    }

    async salvarVendas(dadosVenda){
        return await this.post('/cadastrar',dadosVenda);
    }
}

export default VendaService;