# Behavior Driven Development

## Histórico de Revisão

| Data       | Versão | Descrição              | Autor(es)                                        |
| ---------- | ------ | ---------------------- | ------------------------------------------------ |
| 19/06/2023 | 0.1    | Primeira versão do BDD | [Ana Luíza](https://github.com/analufernanndess) |

## 1. BDD

### 1.1. **US01 - Eu, como usuário, desejo poder cadastrar um cliente para salvar suas informações no sistema.**

#### 1.1.1. Critério de Aceitação: Deve ser possível cadastrar clientes no sistema.

CASO VÁLIDO:

    Cenário - Cadastrar cliente com sucesso
        1. Dado que o usuário está na tela de cadastro de cliente
        2. Quando o usuário preenche todos os campos obrigatórios corretamente. Por exemplo:
            - Nome: João
            - Telefone: 61 9 9999-9999
            - Data de Nascimento: 19/02/1995
        3. Então o sistema exibe uma mensagem de sucesso

CASO INVÁLIDO:

    Cenário - Cadastrar cliente com **falha**
       1. Dado que o usuário está na tela de cadastro de cliente
       2. Quando o usuário não preenche todos os campos obrigatórios corretamente. Por exemplo:
            - Nome: João
            - Telefone:
            - Data de Nascimento: 19/02/1995
       3. Então o sistema exibe uma mensagem de erro
            - O campo telefone deve ser preenchido!
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
            2. Quando o usuário não tiver cadastrado nenhum cliente
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

#### 1.4.1. Devo conseguir criar templates de mensagens para enviar para os usuários.

CASO VÁLIDO:

    Cenário - criar templates de mensagens para enviar para os usuários
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de criar templates de mensagens
        2. Quando o usuário entrar na aba de criar templates de mensagens e começar a inserir os dados do template
        3. Então o sistema deve exibir os campos: Nome do template: Promoção de aniversário, Promoção de lentes:50% off, Mensagem: Olá, feliz aniversário! Temos uma promoção de lentes com 50% off para você, venha conferir!

CASO INVÁLIDO:

    Cenário - não criar templates de mensagens para enviar para os usuários
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de criar templates de mensagens
        2. Quando o usuário entra na aba de criar templates e não existir nenhum templete disponível
        3. Então o sistema não deve exibir nenhum campo

#### 1.4.2. Devo ser capaz de programar mensagens de aniversário para clientes específicos

CASO VÁLIDO:

    Cenário - programar mensagens de aniversário para clientes específicos
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de programar mensagens de aniversário
        2. Quando o usuário entrar na aba de programar mensagens de aniversário e começar a inserir os dados da mensagem
        3. Então o sistema deve exibir os campos: Nome do cliente: Ana Luíza Fernandes, Data de aniversário: 01/01/1990, Mensagem: Olá, feliz aniversário! Temos uma promoção de lentes com 50% off para você, venha conferir!

CASO INVÁLIDO:

    Cenário - não programar mensagens de aniversário para clientes específicos
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de programar mensagens de aniversário
        2. Quando o usuário entrar na aba de programar mensagens de aniversário e não existir nenhum cliente cadastrado
        3. Então o sistema não deve exibir nenhum campo

### 1.5. US05 - Eu, como usuário, desejo poder cadastrar um novo produto para manter um estoque atualizado.

#### 1.5.1. Deve ser possível cadastrar produtos.

CASO VÁLIDO:

    Cenário - cadastrar produtos
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar produtos
        2. Quando o usuário entrar na aba de cadastrar produtos e começar a inserir os dados do produto
        3. Então o sistema deve exibir os campos: Nome do produto:Rayban, Quantidade: 10, Valor: R$500,00, data de cadastro: 01/01/2021

CASO INVÁLIDO:

    Cenaŕio - não cadastrar produtos
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar produtos
        2. Quando o usuário entrar na aba de cadastrar produtos e não inserir os dados do produto
        3. Então o sistema não deve cadastrar produtos

#### 1.5.2. A página de cadastro deve possuir os seguintes campos:Nome do Produto, Quantidade, Valor, Data de Cadastro

CASO VÁLIDO:

    Cenário - exibir campos para cadastrar produtos
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar produtos
        2. Quando o usuário entrar na aba de cadastrar produtos e começar a inserir os dados do produto
        3. Então o sistema deve exibir os campos: Nome do produto:Rayban, Quantidade: 10, Valor: R$500,00, data de cadastro: 01/01/2021

CASO INVÁLIDO:

    Cenário - não exibir campos para cadastrar produtos
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar produtos
        2. Quando o usuário entrar na aba de cadastrar produtos e não começar a inserir os dados do produto
        3. Então o sistema não deve exibir os campos

#### 1.5.3. O sistema deve validar se a quantidade informada é válida: valor positivo e inteiro.

CASO VÁLIDO:

    Cenário - validar se a quantidade informada é válida
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar produtos
        2. Quando o usuário entrar na aba de cadastrar produtos e começar a inserir os dados do produto, como quantidade: 10
        3. Então o sistema deve validar a quantidade informada

CASO INVÁLIDO:

    Cenário - não validar se a quantidade informada é válida
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar produtos
        2. Quando o usuário entrar na aba de cadastrar produtos e começar a inserir os dados do produto, como quantidade: -10
        3. Então o sistema não deve validar a quantidade informada

#### 1.5.4. O sistema deve validar se o valor informado é válido: valor positivo e real.

CASO VÁLIDO:

    Cenário - validar se o valor informado é válido
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar produtos
        2. Quando o usuário entrar na aba de cadastrar produtos e começar a inserir os dados do produto, como valor: R$500,00
        3. Então o sistema deve validar que o valor informado é válido

CASO INVÁLIDO:

    Cenário - não validar se o valor informado é válido
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar produtos
        2. Quando o usuário entrar na aba de cadastrar produtos e começar a inserir os dados do produto, como valor: -500,00
        3. Então o sistema não deve validar que o valor informado é válido

#### 1.5.5. Após o cadastro, o sistema deve exibir uma mensagem de sucesso do cadastro.

CASO VÁLIDO:

    Cenário - exibir mensagem de sucesso do cadastro
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar produtos
        2. Quando o usuário entrar na aba de cadastrar produtos e começar a inserir os dados do produto, como Nome do produto:Rayban, Quantidade: 10, Valor: R$500,00, data de cadastro: 01/01/2021 e clicar em cadastrar
        3. Então o sistema deve exibir uma mensagem de sucesso do cadastro

CASO INVÁLIDO:

    Cenário - não exibir mensagem de sucesso do cadastro
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de cadastrar produtos
        2. Quando o usuário entrar na aba de cadastrar produtos e não começar a inserir os dados do produto, como Nome do produto:Rayban, Quantidade: -10, Valor: -500,00, data de cadastro: 01/01/2021 e clicar em cadastrar
        3. Então o sistema não deve exibir uma mensagem de sucesso do cadastro

### 1.6. US06 - Eu, como usuário, desejo uma lista de produtos para poder visualizar a quantidade disponível.

#### 1.6.1. A lista de produtos deve possuir uma página própria.

CASO VÁLIDO:

    Cenário - exibir lista de produtos
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de lista de produtos
        2. Quando o usuário entrar na aba de lista de produtos
        3. Então o sistema deve exibir uma lista de produtos

CASO INVÁLIDO:

    Cenário - não exibir lista de produtos
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de lista de produtos
        2. Quando o usuário não tiver nenhum produto cadastrado
        3. Então o sistema não deve exibir uma lista de produtos

#### 1.6.2. Deve se possível vizualizar informações básicas na lista: Nome do Produto, Quantidade, Valor.

CASO VÁLIDO:

    Cenário - exibir informações básicas na lista
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de lista de produtos
        2. Quando o usuário entrar na aba de lista de produtos
        3. Então o sistema deve exibir uma lista de produtos com as informações básicas: Nome do Produto: Rayban, Quantidade: 10, Valor:R$500,00, data de cadastro: 01/01/2021

CASO INVÁLIDO:

    Cenário - não exibir informações básicas na lista
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de lista de produtos
        2. Quando o usuário não tiver nenhum produto cadastrado
        3. Então o sistema não deve exibir uma lista de produtos com as informações básicas

#### 1.6.3. Deve ser possível filtrar a lista com base em informações específicas: Quantidade, Valor.

CASO VÁLIDO:

    Cenário - filtrar a lista com base em informações específicas
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de lista de produtos
        2. Quando o usuário entrar na aba de lista de produtos e começar a filtrar a lista com base em informações específicas, como quantidade: 10
        3. Então o sistema deve filtrar a lista com base em informações específicas inseridas

CASO INVÁLIDO:

    Cenário - não filtrar a lista com base em informações específicas
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de lista de produtos
        2. Quando o usuário entrar na aba de lista de produtos e começar a filtrar a lista com base em informações que não existem, como quantidade: -10
        3. Então o sistema não deve filtrar a lista com base em informações específicas inseridas

### 1.7. US07 - Eu, como usuário, desejo ser notificado quando a quantidade de um determinado produto estiver baixa para que possa realizar novos pedidos.

#### 1.7.1. A lista de produtos deve possuir uma página própria.

CASO VÁLIDO:

    Cenário - exibir lista de produtos
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de lista de produtos
        2. Quando o usuário entrar na aba de lista de produtos e exista produtos cadastrados
        3. Então o sistema deve exibir uma lista de produtos

CASO INVÁLIDO:

    Cenário - não exibir lista de produtos
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de lista de produtos
        2. Quando o usuário não tiver nenhum produto cadastrado
        3. Então o sistema não deve exibir uma lista de produtos

#### 1.7.2. Deve se possível vizualizar informações básicas na lista: Nome do Produto, Quantidade, Valor.

CASO VÁLIDO:

    Cenário - exibir informações básicas na lista
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de lista de produtos
        2. Quando o usuário entrar na aba de lista de produtos
        3. Então o sistema deve exibir uma lista de produtos com as informações básicas: Nome do Produto: Rayban, Quantidade: 10, Valor:R$500,00, data de cadastro: 01/01/2021

CASO INVÁLIDO:

    Cenário - não exibir informações básicas na lista
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de lista de produtos
        2. Quando o usuário não tiver nenhum produto cadastrado
        3. Então o sistema não deve exibir uma lista de produtos com as informações básicas

#### 1.7.3. Deve ser possível filtrar a lista com base em informações específicas: Quantidade, Valor.

CASO VÁLIDO:

    Cenário - filtrar a lista com base em informações específicas
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de lista de produtos
        2. Quando o usuário entrar na aba de lista de produtos e começar a filtrar a lista com base em informações específicas, como nome: Rayban
        3. Então o sistema deve filtrar a lista com base em informações específicas inseridas

CASO INVÁLIDO:

    Cenário - não filtrar a lista com base em informações específicas
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de lista de produtos
        2. Quando o usuário entrar na aba de lista de produtos e começar a filtrar a lista com base em informações que não existem, como nome: Salmão
        3. Então o sistema não deve filtrar a lista com base em informações específicas inseridas

### 1.8. US08 - Eu, como usuário, desejo realizar o cadastro de uma venda a fim de manter um histórico de vendas.

#### 1.8.1. Deve ser possível realizar uma venda

CASO VÁLIDO:

    Cenário - realizar uma venda
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e cadastrar sua venda
        3. Então o sistema deve exibir uma página de venda

CASO INVÁLIDO:

    Cenário - não realizar uma venda
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e não cadastrar sua venda
        3. Então o sistema não deve exibir uma página de venda

#### 1.8.2. A página de venda deve possuir os seguintes campos: Cliente, Produtos e Desconto.

CASO VÁLIDO:

    Cenário - exibir campos na página de venda
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda
        3. Então o sistema deve exibir uma página de venda com os seguintes campos: Cliente, Produtos e Desconto.

CASO INVÁLIDO:

    Cenário - não exibir campos na página de venda
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e não existir nenhum Produto cadastrado e cliente cadastrado
        3. Então o sistema não deve exibir uma página de venda

#### 1.8.3. O usuário deve selecionar um cliente cadastrado.

CASO VÁLIDO:

    Cenário - selecionar um cliente cadastrado
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e selecionar um cliente cadastrado, cujo nome é: Ana Luiza Fernandes
        3. Então o sistema deve exibir uma página de venda com o cliente selecionado

CASO INVÁLIDO:

    Cenário - não selecionar um cliente cadastrado
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e não selecionar um cliente cadastrado
        3. Então o sistema não deve exibir uma página de venda

#### 1.8.4. O usuário deve selecionar um ou mais produtos cadastrados bem como a quantidade que o cliente comprará de cada produto.

CASO VÁLIDO:

    Cenário - selecionar um ou mais produtos cadastrados bem como a quantidade que o cliente comprará de cada produto
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e selecionar o cliente e um ou mais produtos cadastrados bem como a quantidade que o cliente comprará de cada produto, cujo são:Ana Luiza Fernandes, Rayban, 2
        3. Então o sistema deve exibir uma página de venda com o cliente e os produtos selecionados

CASO INVÁLIDO:

    Cenário - não selecionar um ou mais produtos cadastrados bem como a quantidade que o cliente comprará de cada produto
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e não selecionar o cliente e um ou mais produtos cadastrados bem como a quantidade que o cliente comprará de cada produto
        3. Então o sistema não deve exibir uma página de venda

#### 1.8.5. Após a conclusão da venda, o sistema deve exibir uma mensagem de venda realizada.

CASO VÁLIDO:

    Cenário - exibir mensagem de venda realizada
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e selecionar o cliente e um ou mais produtos cadastrados bem como a quantidade que o cliente comprará de cada produto e concluir a venda
        3. Então o sistema deve exibir uma mensagem de venda realizada

CASO INVÁLIDO:

    Cenário - não exibir mensagem de venda realizada
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e não selecionar o cliente e um ou mais produtos cadastrados bem como a quantidade que o cliente comprará de cada produto e concluir a venda
        3. Então o sistema não deve exibir uma mensagem de venda realizada

#### 1.8.6. Após a conclusão da venda, a compra deve ser incluída no histórico de compras do cliente.

CASO VÁLIDO:

    Cenário - incluir a compra no histórico de compras do cliente
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e selecionar o cliente e um ou mais produtos cadastrados bem como a quantidade que o cliente comprará de cada produto e concluir a venda
        3. Então o sistema deve incluir a compra no histórico de compras do cliente

CASO INVÁLIDO:

    Cenário - não incluir a compra no histórico de compras do cliente
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e não selecionar o cliente e um ou mais produtos cadastrados bem como a quantidade que o cliente comprará de cada produto e concluir a venda
        3. Então o sistema não deve incluir a compra no histórico de compras do cliente

#### 1.8.7. Após a conclusão da venda, os produtos comprados devem ser removidos do estoque.

CASO VÁLIDO:

    Cenário - remover os produtos comprados do estoque
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e selecionar o cliente e um ou mais produtos cadastrados bem como a quantidade que o cliente comprará de cada produto e concluir a venda
        3. Então o sistema deve remover os produtos comprados do estoque

CASO INVÁLIDO:

    Cenário - não remover os produtos comprados do estoque
        1. Dado que o usuário irá abrir o sistema da SoSÓptica e entrará na aba de venda
        2. Quando o usuário entrar na aba de venda e não concluir a venda pois não há produtos cadastrados no estoque
        3. Então o sistema não deve remover os produtos comprados do estoque
