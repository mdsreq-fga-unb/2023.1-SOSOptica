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
    async pesquisarProdutoPorNome(nome){
        return await this.get(`/pesquisar?nome=${nome}`);
    }

    deletar(id){
        return this.delete(`/${id}`)
    }

    salvar(dadosProduto){
        return this.post('/cadastrarProduto',dadosProduto)
    }
    /*
    async atualizar(id, dadosProduto){
        return (await this.put(`/${id}`,dadosProduto));
    }
    */
}

export default ProdutoService;