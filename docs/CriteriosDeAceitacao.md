## Critérios de Aceitação:

### US-01 Eu, como usuário, desejo poder cadastrar um Usuario para acessar o sistema.

- A pagina de cadastro de Usuario deve exibir nome, email, senha.
- Ao cadastrar novo usuario deve ser exibido uma mensagem de “sucesso”.
- Ao cadastrar Usuario com email já existente deve exibir mensagem de erro : “ Usuario já cadastrado com o email informado “.

### US-03 Eu, como usuário, desejo poder fazer login na minha conta de Usuário para acessar o sistema.

- Sistema consegue encontrar o Usuario
- Identificar Usuario Logado
- A página de login deve ser exibida corretamente, com os campos de nome de usuário/endereço de e-mail e senha visíveis e destacados.
- Se as informações de login forem válidas, o usuário deve ser redirecionado para a página inicial da conta.
- Se as informações de login forem inválidas, o usuário deve receber uma mensagem de erro clara indicando que as credenciais estão incorretas.

### US04 Eu, como Usuário, desejo poder cadastrar um novo cliente, Para que eu possa armazenar suas informações no sistema.

- Deve ser possível cadastrar clientes no sistema.
- A página de cadastro de cliente deve ter campos para inserir as seguintes informações: nome, número de telefone, CPF e e-mail, data de nascimento.
- O sistema deve validar se o email inserido é válido.
- O sistema deve validar se o CPF inserido é válido.
- O sistema deve validar se o telefone inserido é válido.
- O sistema deve conter máscara para os campos de telefone e CPF.
- Após o cadastro, o sistema deve exibir uma mensagem de sucesso do cadastro.
- Caso deseje cancelar o cadastro, o Usuário deve ser redirecionado para a página de lista de itens de cliente atualizada.

### US05 Eu, como Usuário, gostaria de poder editar as informações de um cliente existente, Para atualizar e corrigir os dados do cliente conforme necessário.

- O sistema deve permitir que o usuário edite campos como nome, endereço, número de telefone, e-mail e outras informações relevantes.
- O sistema deve realizar validações de dados durante a edição para garantir que as informações sejam inseridas corretamente.
- O sistema deve exibir uma mensagem de confirmação para informar ao usuário que as alterações foram salvas com sucesso.
- O sistema deve permitir o cancelamento da edição, restaurando as informações originais do cliente.
- Caso ocorra um erro durante o processo de edição, o sistema deve fornecer uma mensagem de erro.

### US06 Eu, como Usuário, desejo poder visualizar uma lista de todos os clientes cadastrados, Para que eu possa consultar suas informações.

- Deve existir uma página ou tela dedicada para a lista de clientes.
- Cada cliente na lista deve exibir informações básicas, como nome e número de telefone.
- Deve ser possível buscar clientes na lista com base em critérios específicos, como nome e CPF.
- Ao clicar no icone "Excluir" deve excluir registro e exibir uma messagem confirmando que o cliente foi excluido com sucesso.
- Ao clicar no icone "Editar" o Usuário deve ser redirecionado para página de editar Cliente.

### US07 Eu, como Usuário, gostaria de consultar o histórico de vendas da óptica.

- Deve existir uma página dedicada para o histórico de vendas.
- O histórico de vendas deve ser apresentada de forma clara e organizada, exibindo informações relevantes, como produto, cliente, quantidade, valor e data da venda.
- Caso o histórico seja extenso, o sistema deve fornecer recursos de paginação para facilitar a navegação entre as páginas de resultados.

### US09 Eu, como Usuário, realizar importação dos dados existentes do cliente para o sistema SOSOptica

- O banco de dados do sistema deve conter Produto que já existem na base de dados antiga com os devidos campos preenchidos: Nome, Descrição, Marca, Cores disponívei, Quantidade, Preço de custo, Preço de venda e Data de cadastro.

### US14 Eu, como Usuário, desejo criar uma venda de produtos para um cliente, Para registrar e acompanhar as transações de vendas.

- Deve ser possível selecionar o cliente para o qual a venda está sendo realizada.
- Deve ser possível adicionar produtos à venda, especificando a quantidade e o preço unitário.
- Deve haver um cálculo automático do valor total da venda com base nas quantidades e preços dos produtos.
- A venda criada deve ser armazenada no sistema para consulta e análise posterior.

### US-15 Eu, como usuário, gostaria de poder editar as informações de uma venda existente, Para corrigir erros, atualizar detalhes ou adicionar informações.

- Deve existir uma opção de edição na página “listar vendas”.
- O sistema deve permitir que o usuário edite os campos relevantes da venda, como cliente, produtos, quantidades, preços e outras informações adicionais.
- O sistema deve realizar validações de dados durante a edição para garantir que as informações sejam inseridas corretamente.
- O sistema deve permitir a adição ou remoção de produtos da venda, ajustando automaticamente os cálculos de quantidades e preços.
- Após a conclusão da edição, o sistema deve salvar as alterações e atualizar as informações da venda no banco de dados.
- Após a conclusão da edição, o sistema deve salvar as alterações e atualizar as informações da venda no banco de dados.
- O sistema deve permitir o cancelamento da edição, restaurando as informações originais da venda.
- Caso ocorra um erro durante o processo de edição, o sistema deve fornecer uma mensagem de erro.

### US-18 Eu, como usuário, desejo cadastrar novos produtos no estoque para manter um registro preciso da quantidade disponível.

- Produto deve ser cadastrado no banco de dados com sucesso.
- Os campos necessários para cadastrar um item de estoque, como nome, descrição, quantidade, marca, preço de custo , preço de venda e cores disponíveis devem estar presentes na página de cadastro.
- Após preencher todas as informações necessárias, o Usuário deve ter a opção de salvar o registro do item de estoque.
- Após o cadastro, o sistema deve exibir uma mensagem de sucesso do cadastro.
- Caso deseje cancelar o cadastro, o Usuário deve ser redirecionado para a página de lista de produtos atualizada.

### US-19 Eu, como usuário, desejo poder editar as informações de um produto existente no estoque para manter seus dados atualizados.

- Todos os campos de informação do item de estoque devem ser editáveis, permitindo ao usuário modificar as informações conforme necessário.
- Ao salvar as atualizações feitas no item de estoque, o sistema deve realizar as validações necessárias para garantir que os dados inseridos sejam válidos e coerentes.
- O sistema deve exibir uma mensagem de confirmação indicando que as alterações foram salvas com sucesso.
- O sistema deve permitir ao usuário cancelar a edição do item de estoque a qualquer momento, sem realizar nenhuma alteração.
- Após cancelar a edição, o usuário deve ser redirecionado para a lista de itens de estoque atualizada.

### US20 Eu, como Usuário, desejo visualizar uma lista atualizada com todos os produtos do estoque disponíveis.

- A tabela na página de listagem de estoque deve exibir corretamente os detalhes de cada item de estoque, como nome, quantidade disponível e preço de venda.
- A lista de estoque deve ser ordenada de acordo com o critério especificado (por exemplo, nome do produto ou quantidade disponível).
- A função de pesquisa na lista de estoque deve permitir que o Usuário insira o nome ou parte do nome do produto e exiba apenas os itens que correspondem à pesquisa.
- Quando a lista de estoque for muito extensa, deve haver suporte para paginação, dividindo a lista em várias páginas.
- Cada item na lista de estoque exibido em cada página da paginação deve incluir ícones visíveis para editar e excluir o item.
- Ao clicar no icone "Excluir" deve excluir registro e exibir messagem que item foi excluido com sucesso.
- Ao clicar no icone "Editar" o Usuário deve ser redirecionado para página de editar item.

### US-21 Eu, como usuário, gostaria de poder deletar um produto existente, Para remover produtos obsoletos ou não utilizados do sistema.

- Deve existir uma opção para deletar um produto na página “listar produtos”.
- Ao selecionar a opção de deletar, o sistema deve exibir uma confirmação para garantir a ação do usuário.
- Após a confirmação, o produto selecionado deve ser removido permanentemente do sistema.
- Depois de deletado, o produto não deve mais ser exibido na lista de produtos disponíveis no sistema.

### US22 Eu, como Usuário, gostaria de saber quais produtos estão com estoque baixo, para manter um melhor controle do estoque.

- Visualizar produtos que estão em falta ou baixa quantidade no estoque
- Vizualizar os produtos de maneira ordenada de maneira que o produto com menos quantidade esteja em primeiro e o com mais quantidade esteja em ultimo.
