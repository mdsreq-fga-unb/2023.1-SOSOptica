import Apiservice from "../app/apiservice";

class ProdutoService extends Apiservice{

    constructor() {
        super('/api/produtos');

    }

    async listarProdutos(){
        return await this.get('/listar-produtos');
    }

}
export default ProdutoService;