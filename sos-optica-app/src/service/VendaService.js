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

    async pesquisarProdutoOuNome(nome){
        return await this.get('/pesquisar?nome='+nome);
    }
  
}

export default VendaService;