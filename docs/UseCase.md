## Histórico de Revisão

| Data       | Versão | Descrição      | Autor(es)                                                                              |
| ---------- | ------ | -------------- | -------------------------------------------------------------------------------------- |
| 07/07/2023 | 0.1    | Criação do UC  | [Ana Luíza](https://github.com/analufernanndess)                                       |
| 11/07/2023 | 0.2    | Adicionando UC | [Ana Luíza](https://github.com/analufernanndess) e [Tales](https://github.com/TalesRG) |

## Use Case:

O diagrama de caso de uso é uma ferramenta importante no processo de análise e design de sistemas, permitindo uma compreensão clara das interações entre os usuários e o sistema, e auxiliando no planejamento e na comunicação dos requisitos funcionais do sistema.

## Especificação de Caso de Uso: Cadastrar cliente

**1. Cadastrar cliente**

**1.1 Breve descrição:**

Caso de uso utilizado pelo usuário Luis Felipe, dono da Óptica, para efetuar o cadastro do cliente que deseja realizar uma compra em sua loja, bem como obter informações sobre o resgistros dos mesmos.

**1.2 Atores**

- Luis Felipe, dono da Óptica

**2. Fluxo de Eventos:**

**2.1 Fluxo Principal:**

Este caso de uso é indicado quando Luis Felipe escolhe a opção de cadastro de clientes

**2.1.1** O usuário seleciona a opção "cadastrar clientes".

**2.1.2** O usuário preenche as seguintes informações do cliente:

- Nome
- CPF
- Telefone
- Email
- Data de Nascimento

**2.1.3** O usuário finaliza o cadastro, selecionando o botão "cadastrar".

**2.1.4** O sistema, a partir da finalização do cadastro, guarda as informações, que ficarão armazenadas em "Listar Cliente".

**2.1.5** O caso de uso é encerrado.

**2.2 Fluxos Alternativos:**

**FA1 - CPF inválido**

Se o sistema determinar que o CPF do cliente não é válido, o sistema mostra a mensagem: “CPF inválido” e o caso de uso termina.

**FA2 - Telefone inválido**

Se o sistema determinar que o telefone do cliente não é válido, o sistema mostra a mensagem: “Telefone inválido” e o caso de uso termina.

**FA3 - Data de nascimento inválida**

Se o sistema determinar que a data de nascimento informada não é válida, o sistema mostra a mensagem: Data de nascimento inválida” e o caso de uso termina.

**2.3 Fluxos de Exceção**

**FE01 - Cliente já cadastrado**

Se o sistema determinar que o cliente já foi cadastrado, o sistema mostra a mensagem: "Cliente já cadastrado" e o caso de uso termina.

**FE02 - Sair**

O usuário pode encerrar o sistema a qualquer momento.

**3. Regras de Negócio:**

| Nome               | Formato             | Máx. quantidade de caracteres | Obrigatoriedade |
| ------------------ | ------------------- | ----------------------------- | --------------- |
| Nome               | Ana Luíza Fernandes | 255                           | Sim             |
| CPF                | 999.999.999-99      | 14                            | Não             |
| Telefone           | (99)99999-9999      | 14                            | Sim             |
| Email              | email@email.com     | 255                           | Não             |
| Data de Nascimento | 99/99/9999          | 10                            | Sim             |

**4. Pré-condições**

**4.1 Login:**

Para utilizar este caso de uso é necesssário que o usuário esteje "logado" no sistema.

**4.2 Validação do sistema**

Para utilizar este caso de uso é necessário que o sistema tenha validado o usuário.

**5. Pós-Condições**

**5.1 Registro de Cadastros:**

Ao final desse caso de uso, as operações realizadas devem ser registradas com o objetivo de tornar possível a recuperação desses dados.

**6. Pontos de Extensão**

Não se aplica.

## Especificação de Caso de Uso: Cadastrar Produto

**1. Cadastrar Produto**

**1.1 Breve descrição:**
Caso de uso utilizado pelo usuário Luis Felipe, dono da Óptica, para realizar cadastro de produtos, bem como obter informações sobre o resgistros dos mesmos.

**1.2 Atores**

- Luis Felipe, dono da Óptica

**2. Fluxo de Eventos**

**2.1 Fluxo Principal:**

Este caso de uso é indicado quando Luis Felipe escolhe a opção de cadastro de produtos.

**2.1.1** O usuário seleciona a opção "cadastro de Produtos".

**2.1.2** O usuário começa a cadastrar o produto utilizando as seguintes informações:

- Nome

- Descrição

- Cores Disponíveis

- Marca

- Preço Custo

- Preço Venda

- Quantidade De Peças

**2.1.3** O usuário finaliza o cadastro, selecionando o botão "cadastrar".

**2.1.4** O sistema, a partir da finalização do cadastro guarda as informações.

**2.1.5** O caso de uso é encerrado.

**2.2 Fluxos Alternativos:**

Não se aplica

**2.3 Fluxos de Exceção**

**FE01 - Campo vazio**

Se o sistema determinar que algum dos campos: nome, descrição, cores disponíveis, marca, preço de custo, preço de venda ou quantidade de peças não foi preenchido, o sistema mostra a mensagem: “Todos os campos devem ser preenchidos” e o caso de uso termina.

**FE02 - Sair**

O usuário pode encerrar o sistema a qualquer momento, o caso de uso é encerrado.

**3. Regras de Negócio:**

| Nome                | Formato                                                             | Obrigatoriedade |
| ------------------- | ------------------------------------------------------------------- | --------------- |
| Nome                | Aviator Classic                                                     | Sim             |
| Descrição           | Sol/Grau                                                            | Sim             |
| Cores disponíveis   | Fosco Areia-escuro, Polido Preto, Polido Marrom-escuro transparente | Sim             |
| Marca               | Ray Ban                                                             | Sim             |
| Preço custo         | R$ 99,99                                                            | Sim             |
| Preço Venda         | R$ 99,99                                                            | Sim             |
| Quantidade de peças | 999                                                                 | Sim             |

**4. Pré-condições**

**4.1 Login:**

Para utilizar este caso de uso é necesssário que o usuário esteje "logado" no sistema.

**4.2 Validação do sistema**

Para utilizar este caso de uso é necessário que o sistema tenha validado o usuário.

**5. Pós-Condições**

**5.1 Registro de Cadastros:**

Ao final desse caso de uso, as operações realizadas devem ser registradas com o objetivo de tornar possível a recuperação desses dados.

**6. Pontos de Extensão**

Não se aplica.

## Especificação de Caso de Uso: Cadastrar vendas

**1. Cadastrar vendas**

**1.1 Breve Descrição:**

Caso de uso utilizado pelo usuário Luis Felipe, dono da Óptica, para efetuar o cadastro de vendas, bem como obter informações sobre o resgistros dos mesmos.

**1.2 Atores**

- Luis Felipe, dono da Óptica

**2. Fluxo de Eventos**

**2.1 Fluxo Principal:**

Este caso de uso é indicado quando Luis Felipe escolhe a opção de cadastro de vendas.

**2.1.1** O usuário seleciona a opção "cadastro de vendas".

**2.1.2** O usuário começa a cadastrar a venda utilizando as seguintes informações:

- Nome do cliente

- Produto

- Quantidade

- Valor

- Data da venda

**2.1.3** O usuário finaliza o cadastro, selecionando o botão "cadastrar".

**2.1.4** O sistema, a partir da finalização do cadastro guarda as informações.

**2.1.5** O caso de uso é encerrado.

**2.2 Fluxos Alternativos:**

Não se aplica

**2.3 Fluxos de Exceção**

**FE01 - Cliente não cadastrado**

Caso o o cliente ainda não esteja cadastrado, o caso de uso é encerrado.

**FE02 - Produto não cadastrado**

Caso o o cliente ainda não esteja cadastrado, o caso de uso é encerrado.

**FE03 - Sair**

O usuário pode encerrar o sistema a qualquer momento, o caso de uso é encerrado.

**3. Regras de Negócio:**

| Nome            | Formato                                          | Obrigatoriedade |
| --------------- | ------------------------------------------------ | --------------- |
| Nome do cliente | Ana Luiza                                        | Sim             |
| Produto         | "Produto selecionado pelo cliente"               | Sim             |
| Quantidade      | 99                                               | Sim             |
| Valor           | R$ 99,99                                         | Sim             |
| Data da venda   | 99/99/9999                                       | Sim             |

**4. Pré-condições**

**4.1 Login:**

Para utilizar este caso de uso é necesssário que o usuário esteje "logado" no sistema.

**4.2 Validação do sistema**

Para utilizar este caso de uso é necessário que o sistema tenha validado o usuário.

**4.3 Cadastro de clientes**

Para utilizar este caso de uso é necessário que o usuário tenha cadastrado um cliente no sistema.

**4.4 Cadastro de Produto**

Para utilizar este caso de uso é necessário que o usuário tenha cadastrado um produto no sistema.

**5. Pós-Condições**

**5.1 Registro de Cadastros:**

Ao final desse caso de uso, as operações realizadas devem ser registradas com o objetivo de tornar possível a recuperação desses dados.

**6. Pontos de Extensão**

Não se aplica.
