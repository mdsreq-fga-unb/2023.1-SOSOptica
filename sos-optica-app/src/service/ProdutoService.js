import Apiservice from "../app/apiservice";

class ProdutoService extends Apiservice{

    constructor() {
        super('/api/produtos');

    }

    async listarProdutos(){
        return await this.get('/listar-produtos');
    }

    async listarFaltaNoEstoque(){
        return await this.get('/listar-estoque');
    }

}
export default ProdutoService;