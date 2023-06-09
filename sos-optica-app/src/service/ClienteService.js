import Apiservice from "../app/apiservice";

class ClienteService extends Apiservice{
    constructor() {
        super('/api/clientes');
    }

    salvar(dadosCliente){
        return this.post('/',dadosCliente)
    }

    async getClienteById(id){
        return await this.get(`/${id}`);
    }

    async listarClientes(){
        return await this.get('/listar');
    }

    async pesquisarClientePorNome(nome){
        return await this.get(`/pesquisar?nome=${nome}`);
    }

    async atualizar(id, dadosCliente){
        return (await this.put(`/${id}`,dadosCliente));
    }
}
export default ClienteService;