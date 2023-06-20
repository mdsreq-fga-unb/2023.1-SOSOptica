## Histórico de Revisão

| Data       | Versão | Descrição                                       | Autor(es)                                                                                                                                                           |
|------------|--------|-------------------------------------------------| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24/05/2023 | 1.0    | Primeira versão do Backlog do Produto           | [Ana](https://github.com/anafernanndess), [Renato](https://github.com/Osidious), [Luis](https://github.com/luishenrrique), [Tales](https://github.com/TalesRG) e [Weslley Barros](https://github.com/weslley17w) |
| 30/05/2023 | 1.1    | Adicionando User storys completas na tabela MVP | [Tales](https://github.com/TalesRG)|
| 19/06/2023 | 1.2    | Refatoração | [Ana Luiza](https://github.com/analufernanndess)

## 1. Product Backlog
O Backlog do Produto é um artefato da metodologia ágil SCRUM, que consiste em uma lista dos requisitos funcionais emergentes para o desenvolvimento do produto. O escopo do projeto foi delimitado a partir da necessidade de criar um novo sistema de gerenciamento para uma otica. O objetivo é entregar um produto profissional com um custo abaixo do mercado, focado na agilidade em gerenciar cliente,produtos e vendas.
### 1.1. Épico 1 - Usuário
| User stories |  
|--------------|
| US-01 - Eu como administrador desejo poder cadastrar um Usuario para acessar o sistema.|
| US-02 - Eu, como administrador, gostaria de poder editar as informações de um usuário existente, Para atualizar seus dados conforme necessário e garantir a precisão das informações do usuário no sistema. |                 
| US-03 - Eu, como administrador, desejo poder fazer login na minha conta de Usuário para acessar o sistema. |
### 1.2. Épico 2 - Cliente
| User stories |  
|--------------|
| US-04 - Eu, como administrador, desejo poder cadastrar um novo cliente, Para que eu possa armazenar suas informações no sistema. |
| US-05 - Eu, como administrador, gostaria de poder editar as informações de um cliente existente, Para atualizar e corrigir os dados do cliente conforme necessário.  |
| US-06 - Eu, como administrador, desejo poder visualizar uma lista de todos os clientes cadastrados, Para que eu possa consultar suas informações.  |
| US-07 - Eu, como administrador, gostaria de consultar o histórico de compras de um cliente específico.  |
| US-08 - Eu, como administrador, gostaria de poder cadastrar uma receita e atribuir a ela um cliente, para efetuar o pedido de um cliente. |
| US-09 - Eu, como adminstrador, realizar importação dos dados existentes do cliente para o sistema SOSOptica |
| US-10 - Eu, como administrador, gostaria de poder de criar templates de mensagens para agilizar o processo de envio de comunicações frequentes, Para reutilizar o conteúdo e personalizá-lo conforme necessário.  |
| US-11 - Eu, como administrador, gostaria de poder editar templates de mensagens para personalizá-los conforme necessário. Para adaptar o conteúdo às minhas necessidades e agilizar o processo de envio de comunicações.  |
| US-12 - Eu, como administrador, gostaria poder visualizar uma lista de todos os templates de mensagens disponíveis, Para identificar rapidamente os templates disponíveis.  |
| US-13 - Eu, como administrador, gostaria de poder ter a capacidade de excluir templates de mensagens que não são mais necessários. Para manter a lista de templates organizada e evitar a seleção acidental de templates obsoletos. |
### 1.3. Épico 3 - Vendas
| User stories |  
|--------------|
| US-14 - Eu, como administrador, desejo criar uma venda de produtos para um cliente, Para registrar e acompanhar as transações de vendas.  |
| US-15 - Eu, como administrador, gostaria de poder editar as informações de uma venda existente, Para corrigir erros, atualizar detalhes ou adicionar informações. |
| US-16 - Eu, como administrador, gostaria de saber quais os produtos que mais vendem, para identificar produtos com bastante demanda por parte dos meus clientes.|
| US-17 - Eu, como administrador, gostaria de Verificar quanto foi vendido no dia. |
### 1.4. Épico 4 - Produto
| User stories |  
|--------------|
| US-18 - Eu, como administrador, desejo cadastrar novos produtos no estoque para manter um registro preciso da quantidade disponível.  |
| US-19 - Eu, como administrador, desejo poder editar as informações de um produto existente no estoque para manter seus dados atualizados.  |
| US-20 - Eu, como administrador, desejo visualizar uma lista atualizada com todos os produtos do estoque disponíveis.  |
| US-21 - Eu, como administrador, gostaria de poder deletar um produto existente, Para remover produtos obsoletos ou não utilizados do sistema.  |
| US-22 - Eu, como administrador, gostaria de saber quais produtos estão com estoque baixo, para manter um melhor controle do estoque.  |

## Requisitos não funcionais

<br>

Os requisitos não funcionais (RNFs) definem os atributos do sistema, como segurança, confiabilidade, desempenho, capacidade de manutenção, usabilidade. Eles servem como restrições ou constrangimentos no design do sistema em diferentes pendências.

<br>

N° | Classificação | Requisitos Não Funcionais
:---------: |  :-------: |  :-------:
RNF01 | Requisitos de Implementação | A parte do Back-End do sistema deve ser desenvolvido em Java/Spring Boot
RNF02 | Requisitos de Implementação | A parte do Front-End do sistema deve ser desenvolvido em React
RNF03 | Requisitos de Implementação | O sistema deve ser desenvolvido em orientação a objetos
RNF04 | Requisitos de Portabilidade | A aplicação deve ser WEB
RFN05 | Requisitos de Usabilidade | A aplicação deve ser responsiva
RFN06 | Requisitos de Usabilidade | A interface da aplicação deve ser de fácil manipulação
RFN07 | Requisitos de Suportabilidade | O sistema deve ser testável em Java e React
