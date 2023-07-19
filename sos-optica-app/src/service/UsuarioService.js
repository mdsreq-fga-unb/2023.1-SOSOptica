import Apiservice from "../app/apiservice";

class UsuarioService extends Apiservice {

    constructor() {
        super('/api/usuarios');

    }

      async autenticar(credentials) {
        return this.post('/login',credentials);
    }


    async salvar(dadosUsuario) {
        return this.post('/cadastrar-usuario', dadosUsuario)
    }
}

export default UsuarioService;