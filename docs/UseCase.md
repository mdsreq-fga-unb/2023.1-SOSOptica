## Histórico de Revisão
|Data| Versão | Descrição | Autor(es) |
|----|--------|-----------|-----------|
|07/07/2023| 0.1 | Criação do UC | [Ana Luíza](https://github.com/analufernanndess)
|11/07/2023| 0.2 | Adicionando UC | [Ana Luíza](https://github.com/analufernanndess) e [Tales](https://github.com/TalesRG)

## 1.Use Case:
   
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

**2.1.2** O usuário começa a cadastrar o cliente utilizando as seguintes informações:

- Nome 
    
- CPF
    
- Telefone
   
- Email

- Data de Nascimento

**2.1.3** O usuário finaliza o cadastrado, selecionando o botão "cadastrar".

**2.1.4** O sistema, a partir da finalização do cadastro, guarda as informações, que ficaram armazenadas em "Listar Cliente".

**2.1.5** O caso de uso é encerrado.

**2.2 Fluxos Alternativos:**

**2.3 Fluxos de Exceção**

**3. Regras de Negócio:**

| Nome | Formato | Máx. quantidade de caracteres|Obrigatoriedade 
|------|---------|----------------|-------------------------
| Nome | Ana Luíza Fernandes | 255 | Sim
| CPF | xxx.xxx.xxx-xx| 14 | Não
| Telefone | (61)98888-8888 | 14 | Sim
| Email | email@email.com | 255 | Não
| Data de Nascimento | xx/xx/xxxx | 10 | Sim

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

## Especificação de Caso de Uso: Cadastrar Receita:

**1. Cadastrar receita**

**1.1 Breve Descrição:**
   
   Caso de uso utilizado pelo usuário Luis Felipe, dono da Óptica, para efetuar o cadastro de receita de um cliente que deseja realizar uma compra em sua loja, bem como obter informações sobre o resgistros dos mesmos.
   
**1.2 Atores**

   - Luis Felipe, dono da Óptica


**2. Fluxo de Eventos**
   
**2.1 Fluxo Principal:**

   Este caso de uso é indicado quando Luis Felipe escolhe a opção de cadastro de receita.
   
**2.1.1** O usuário seleciona a opção "cadastrar receita".

**2.1.1** O usuário começa a cadastrar a receita utilizando as seguintes informações:

- Nome do cliente;
- OE
- OD
- PL/PLANO
- ESF
- CIL
- DNP
- AD

**2.1.2** O usuário finaliza o cadastrado, selecionando o botão "cadastrar".

**2.1.3** O sistema, a partir da finalização do cadastro e guarda as informações.

**2.1.4** O caso de uso é encerrado.

**2.2 Fluxos Alternativos:**

**2.3 Fluxos de Exceção**

**3. Regras de Negócio:**

| Nome | Formato |Obrigatoriedade |
|------|---------|----------------|
| Nome | Ana Luíza Fernandes | Sim|
| OE | OE | Sim
| OD | OD | Sim
| PL/Plano | -20 à 20 | Sim
| ESF | -20 à 15 | Sim
| Cil | -10 à 0 | Sim
| DNP | 40 à 70 | Sim
|AD|0.25 à 5|Sim|

**4. Pré-condições**

**4.1 Login:**

Para utilizar este caso de uso é necesssário que o usuário esteje "logado" no sistema.

**4.2 Validação do sistema**

Para utilizar este caso de uso é necessário que o sistema tenha validado o usuário.

**4.3 Cadastro de clientes**
Para utilizar este caso de uso é necessário que o usuário tenha cadastrado um cliente no sistema.

**5. Pós-Condições**

**5.1 Registro de Cadastros:**

Ao final desse caso de uso, as operações realizadas devem ser registradas com o objetivo de tornar possível a recuperação desses dados.

**6. Pontos de Extensão**

Não se aplica.

   



