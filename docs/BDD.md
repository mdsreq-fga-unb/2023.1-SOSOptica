# Behavior Driven Development
## Histórico de Revisão
| Data | Versão | Descrição | Autor(es) |
|------|--------|-----------|-----------|
| 19/06/2023 | 0.1 | Primeira versão do BDD | [Ana Luíza](https://github.com/analufernanndess)|

## 1. BDD
### 1.1. **US01 - Eu, como usuário, desejo poder cadastrar um cliente para salvar suas informações no sistema.**

#### 1.1.1. Critério de Aceitação: Deve ser possível cadastrar clientes no sistema.

CASO VÁLIDO:

    Cenário - Cadastrar cliente com sucesso
        1. Dado que o usuário está na tela de cadastro de cliente
        2. Quando o usuário preenche todos os campos corretamente
        3. Então o sistema exibe uma mensagem de sucesso

CASO INVÁLIDO:

    Cenário - Cadastrar cliente com **falha**
       1. Dado que o usuário está na tela de cadastro de cliente
       2. Quando o usuário não preenche todos os campos corretamente
       3. Então o sistema exibe uma mensagem de erro
       4. E o sistema não cadastra o cliente

#### 1.1.2. Critério de Aceitação: A página de cadastro de cliente deve ter campos para inserir as seguintes informações: Nome, endereço, número de telefone, CPF e e-mail, data de nascimento .

CASO VÁLIDO:

    Cenário - inserir dados do cliente com sucesso
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar o cliente
        2. Quando o usuário começar a cadastrar o cliente, cujo o nome: Ana Luíza Fernandes, CPF: 064.998.785-99,telefone: (61)98888-8888, email: ana@email.com e a data de nascimento: 18/05/2003 
        3. Então com os dados válidos o sistema deve armazenar os dados cadastrais do cliente.

CASO INVÁLIDO:

    Cenário - inserir dados do cliente com **falha**
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar o cliente
        2. Quando o usuário começar a cadastrar o cliente, cujo o nome: Ana Luíza Fernandes, CPF: 06.998.785-99,telefone: (6)98888-888, email: anaemail.com e a data de nascimento: 18/05/1000 
        3. Então com os dados inválidos o sistema não deve armazenar os dados cadastrais do cliente.

#### 1.1.3. Critério de Aceitação: O sistema deve validar se o CPF inserido é válido.

CASO VÁLIDO:

    Cenário - inserir CPF válido
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar o cliente
        2. Quando o usuário começar a cadastrar o cliente, cujo o CPF: 064.998.785-99
        3. Então com o CPF válido o sistema deve armazenar os dados cadastrais do cliente.

CASO INVÁLIDO:
    
    Cenário - inserir CPF inválido
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar o cliente
        2. Quando o usuário começar a cadastrar o cliente, cujo o CPF: 06.998.785-99
        3. Então com o CPF inválido o sistema não deve armazenar os dados cadastrais do cliente.

#### 1.1.4. Critério de Aceitação: O sistema deve validar se o e-mail inserido é válido.

CASO VÁLIDO:

    Cenário - inserir e-mail válido
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar o cliente
        2. Quando o usuário começar a cadastrar o cliente, cujo o e-mail:ana@email.com
        3. Então com o e-mail válido o sistema deve armazenar os dados cadastrais do cliente.

CASO INVÁLIDO:

    Cenário - inserir e-mail inválido
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar o cliente
        2. Quando o usuário começar a cadastrar o cliente, cujo o e-mail:anaemail.com
        3. Então com o e-mail inválido o sistema não deve armazenar os dados cadastrais do cliente.

#### 1.1.5. Critério de Aceitação: O sistema deve validar se o telefone inserido é válido.

CASO VÁLIDO:

    Cenário - inserir telefone válido
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar o cliente
        2. Quando o usuário começar a cadastrar o cliente, cujo o telefone:(61)98888-8888
        3. Então com o telefone válido o sistema deve armazenar os dados cadastrais do cliente.

CASO INVÁLIDO:

    Cenário - inserir telefone inválido
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar o cliente
        2. Quando o usuário começar a cadastrar o cliente, cujo o telefone:(6)98888
        3. Então com o telefone inválido o sistema não deve armazenar os dados cadastrais do cliente.

#### 1.1.6. O sistema deve conter máscara para os campos de telefone e CPF. 

CASO VÁLIDO:
    
    Cenário - contém "máscara" para os campos de telefone e CPF
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar o cliente
        2. Quando o usuário começar a cadastrar o cliente e inserir o CPF e o telefone, o sistema deve conter máscara para os campos de telefone e CPF.
        3. Então com o telefone e CPF válidos o sistema deve armazenar os dados cadastrais do cliente.

CASO INVÁLIDO:

    Cenário - não contém "máscara" para os campos de telefone e CPF
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar o cliente
        2. Quando o usuário começar a cadastrar o cliente e inserir o CPF e o telefone, o sistema não deve conter máscara para os campos de telefone e CPF.
        3. Então com o telefone e CPF inválidos o sistema não deve armazenar os dados cadastrais do cliente.

#### 1.1.7. Após o cadastro, o sistema deve exibir uma mensagem de sucesso do cadastro.

CASO VÁLIDO:

    Cenário - exibir mensagem de sucesso do cadastro
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar o cliente.
        2. Quando o usuário começar a cadastrar o cliente e inserir todos os dados válidos, cujo o nome: Ana Luíza Fernandes, CPF: 064.998.785-99,telefone: (61)98888-8888, email: ana@email.com e a data de nascimento: 18/05/2003 
        3. Então o sistema deve exibir uma mensagem de sucesso do cadastro.
    
CASO INVÁLIDO:

    Cenário - não exibir mensagem de sucesso do cadastro
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar o cliente.
        2. Quando o usuário começar a cadastrar o cliente e inserir todos os dados inválidos, cujo o nome: Ana Luíza Fernandes, CPF: 06.998.785-99,telefone: (6)98888-888, email: anaemail.com e a data de nascimento: 18/05/1000 
        3. Então o sistema não deve exibir uma mensagem de sucesso do cadastro.

### 1.2. **US02 - Eu, como usuário, desejo uma lista para visualizar as informações do cliente no sistema.**
#### 1.2.1. A lista de clientes deve possuir uma página própria.

CASO VÁLIDO:

    Cenário - exibir lista de clientes
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de listar clientes
        2. Quando o usuário entrar na aba de listar clientes
        3. Então o sistema deve exibir uma lista de clientes

CASO INVÁLIDO:

        Cenário - não exibir lista de clientes
            1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de listar clientes
            2. Quando o usuário não entrar na aba de listar clientes
            3. Então o sistema não deve exibir uma lista de clientes

#### 1.2.2. Deve se possível vizualizar informações básicas na lista: Nome, Telefone.

CASO VÁLIDO:

    Cenário - exibir informações básicas na lista
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de listar clientes
        2. Quando o usuário entrar na aba de listar clientes
        3. Então o sistema deve exibir uma lista de clientes com as informações básicas, como: Ana Luíza Fernandes, telefone: (61)98888-8888

CASO INVÁLIDO:

    Cenário - não exibir informações básicas na lista
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de listar clientes
        2. Quando o usuário entrar na aba de listar clientes
        3. Então o sistema não deve exibir uma lista de clientes com as informações básicas, como: Ana Luíza Fernandes, telefone: (61)98888-8888

#### 1.2.3. Deve ser possível filtrar a lista com base em informações específicas: Nome, CPF.

CASO VÁLIDO:
    
    Cenário - filtrar a lista com base em informações específicas
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de listar clientes
        2. Quando o usuário entrar na aba de listar clientes e filtrar a lista com base em informações específicas
        3. Então o sistema deve exibir uma lista de clientes com as informações específicas, como: Ana Luíza Fernandes, CPF: 064.998.785-99

CASO INVÁLIDO:

    Cenário - não filtrar a lista com base em informações específicas
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de listar clientes
        2. Quando o usuário entrar na aba de listar clientes e não filtrar a lista com base em informações específicas
        3. Então o sistema não deve exibir uma lista de clientes com as informações específicas, como: Ana Luíza Fernandes, CPF: 064.998.785-99

### 1.3. US03 - Eu, como usuário, desejo cadastrar uma receita para efetuar o pedido de um cliente.
#### 1.3.1. O sistema deve possuir uma página própria para cadastrar receita.

CASO VÁLIDO:

    Cenário - exibir página própria para cadastrar receita
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar receita
        2. Quando o usuário entrar na aba de cadastrar receita e começar a inserir os dados da receita
        3. Então o sistema deve exibir uma página própria para cadastrar receita

CASO INVÁLIDO:

    Cenário - não exibir página própria para cadastrar receita
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar receita
        2. Quando o usuário não entrar na aba de cadastrar receita e não inserir os dados da receita
        3. Então o sistema não deve exibir uma página própria para cadastrar receita

#### 1.3.2. A página de cadastro deve possuir os campos: Validade, Médico Responsável, Informações da receita.

CASO VÁLIDO:

    Cenário - exibir campos para cadastrar receita
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar receita
        2. Quando o usuário entrar na aba de cadastrar receita e começar a inserir os dados da receita
        3. Então o sistema deve exibir os campos: Validade: 01/2024, Médico Responsável: Afonso, Informações da receita: Longe esférico OD 1.0, Longe esférico OE 1.0, Longe Cilindrico OD 0.5, Longe Cilindrico OE 1.0, Perto Esferico OE 1.0, Perto Esferico OD 1.5, Perto Cilindrico OD 0.5, Perto Cilindrico OE 1.0 

CASO INVÁLIDO:

    Cenário - não exibir campos para cadastrar receita
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar receita
        2. Quando o usuário não entrar na aba de cadastrar receita e não começar a inserir os dados da receita
        3. Então o sistema não deve exibir os campos: Validade, Médico Responsável, Informações da receita

#### 1.3.3. Deve ser possível vincular um cliente cadastrado a receita.

CASO VÁLIDO:

    Cenário - vincular um cliente cadastrado a receita
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar receita
        2. Quando o usuário já estiver cadastrado uma receita
        3. Então o sistema deve vincular um cliente cadastrado a receita

CASO INVÁLIDO:

    Cenário - não vincular um cliente cadastrado a receita
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar receita
        2. Quando o usuário não cadastrar uma receita
        3. Então o sistema não deve vincular um cliente cadastrado a uma receita

### 1.4. US04 - Eu, como usuário, desejo poder enviar mensagens promocionais para os clientes.

CASO VÁLIDO:

    Cenário - 