import Apiservice from "../app/apiservice";

class ClienteService extends Apiservice{
    constructor() {
        super('/api/clientes');
    }

    salvar(dadosCliente){
        return this.post('/',dadosCliente)
    }
}
export default ClienteService;