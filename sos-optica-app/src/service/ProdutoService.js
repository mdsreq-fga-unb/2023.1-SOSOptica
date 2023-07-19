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

    deletar(id){
        return this.delete(`/${id}`)
    }

    salvar(dadosProduto){
        return this.post('/cadastrarProduto',dadosProduto)
    }

}

export default ProdutoService;