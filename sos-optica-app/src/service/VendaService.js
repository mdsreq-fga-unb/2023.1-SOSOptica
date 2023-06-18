import Apiservice from "../app/apiservice";

// eslint-disable-next-line import/no-anonymous-default-export
class VendaService extends Apiservice{

    constructor() {
        super("/api/vendas");
    }

    async salvarVendas(dadosVenda){
        return await this.post('/cadastrar',dadosVenda);
    }

    async listarVendas(page = 0, size = 10){
        return await this.get('/?pagina='+page+'&tamanho='+size);
    }

    
}

export default VendaService;