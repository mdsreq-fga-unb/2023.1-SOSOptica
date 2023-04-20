<h1 align="center"><b>VISÃO DO PRODUTO E PROJETO</b></h1>

## 1 VISÃO GERAL DO PRODUTO

## Histórico de Revisão

| **Data** | **Versão** | **Descrição** | **Autor** |
|---|---|---|---|
| 15/04/2023 | 0.1 | Criação do documento | [Ana](https://github.com/anafernanndess), [Renato](https://github.com/Osidious), [Ana](https://github.com/anafernanndess), [Tales](https://github.com/TalesRG) e [Weslley Barros](https://github.com/weslley17w) |
| 16/04/2023 | 0.5 | Adiciona as seção 1.3 e 2.1 | [Ana](https://github.com/anafernanndess), [Renato](https://github.com/Osidious), [Ana](https://github.com/anafernanndess), [Luis](https://github.com/luishenrrique), [Tales](https://github.com/TalesRG) e [Weslley Barros](https://github.com/weslley17w) |

### 1.1 Declaração de Posição do Produto

|  |  |
|---|---|
| Para | Optica Opção |
| Quem | Necessita de mais eficiência no gerenciamento de clientes |
| O (nome do produto) | É um software voltado para gerenciar os clientes da Óptica Opção  |
| Que | Ajuda a ótica gerenciar seus clientes facilitando encontrar dados do cliente e enviar mensagens de formas automáticas. |
| Ao contrário | [ssOtica](https://ssotica.com.br/) que é voltada para gerenciamento de clientes, estoques, emitir nota fiscal e gerenciamento de vendas. |
| Nosso produto | produto é webservice para gerenciamento de clientes da Óptica Opção |

### 1.2. Objetivos do Produto

<p style="text-indent: 20px; text-align: justify">
Ajudar a automatizar muitos dos processos de gerenciamento da óptica, tornando-os mais eficientes e precisos. Isso pode economizar tempo e dinheiro, permitindo que você se concentre em fornecer um excelente serviço ao cliente e crescer seu negócio.
</p>

### 1.3. Tecnologias a Serem Utilizadas

  Spring Boot, JUnit, PostgreSQL, React, Docker e Docker Compose  

## 2 VISÃO GERAL DO PROJETO

### 2.1 Organização do Projeto

  | Perfil | Atribuições | Responsável | Participantes |
|---|---|---|---|
| Scrum Master | Garantir que o time scrum se oriente pelos valores e práticas do Scrum | [Tales](https://github.com/TalesRG) | [Tales](https://github.com/TalesRG) |
| Product Owner | Define as funcionalidades do produto e prioriza os itens de Product Backlog. | Luis Felipe | Luis Felipe |
| Desenvolvedores Frontend | Desenvolvedor frontend é responsável por criar a interface do usuário garantindo que seja   atraente, intuitiva e funcional. | [Ana](https://github.com/anafernanndess) e [Renato](https://github.com/Osidious)  | Time |
| Desenvolvedores Backend | Desenvolvedor backend é responsável por desenvolver e manter a lógica e a infraestrutura do servidor de um aplicativo, que é responsável por processar, armazenar e recuperar dados do usuário | [Luis](https://github.com/luishenrrique) e [Tales](https://github.com/TalesRG)  | Time |
| DevOps | Atuar na unificação e a automação de processos | [Weslley Barros](https://github.com/weslley17w) | Time |

### 2.2 Planejamento das Fases e/ou Iterações do Projeto

| **Sprint** | **Produto (Entrega)** | **Data Início** | **Data Fim** |
|------------|-----------------------|-----------------|--------------|
| Sprint 1   | Definição do Produto  | 03/04/22        | 17/04/22     |

### 2.3 Matriz de Comunicação

<p style="text-indent: 20px; text-align: justify">
O WhatsApp e o Discord serão as principais plataformas de comunicação utilizadas pela equipe. WhatsApp para comunicações rápidas, e Discord para reuniões.
</p>

| **Descrição**                                                                      | **Área/Envolvidos**          | **Periodicidade** | **Produtos Gerados** |
|------------------------------------------------------------------------------------|------------------------------|-------------------|----------------------|
| \- *Acompanhamento das Atividades em Andamento; <br> \-  Planejamento de atividades* | \- *Equipe do Projeto*         | \- *Semanal*        | \- *Nenhum*            |
| \- *Daily*                                                                           | \- *Equipe*                    | \- *Diária*         | \- *Nenhum*            |
| \- *Reunião com cliente*                                                             | \- *Equipe <br><br>\- Cliente* | \- *Aperiódica*     | \- *Vídeo da reunião*  |

### 2.4 Gerenciamento de Riscos

<p style="text-indent: 20px; text-align: justify">
Antes de cada sprint, a equipe de desenvolvimento se reunirá em uma reunião de planejamento (planning), com o objetivo de identificar as tarefas a serem executadas durante a sprint em questão. Depois de definir as tarefas, a equipe apresentará as mesmas ao cliente para que este possa avaliar se as entregas propostas fazem sentido, lembrando que essa será a segunda verificação, sendo que a primeira foi feita durante a elicitação de requisitos. Ao final da sprint, será realizada uma reunião de revisão (review) com o cliente, onde serão apresentadas as entregas de valor. Nesta reunião, o cliente terá a oportunidade de dar um retorno sobre suas expectativas e verificar se o desenvolvimento do projeto está de acordo com o esperado. Se um risco for identificado durante a sprint, a equipe tomará as medidas necessárias para minimizar ou resolver o problema.
</p>

### 2.5 Critérios de Replanejamento

A necessidade do cliente mudar:

- Caso este cenário ocorra, precisamos replanejar o produto, para que atenda às novas necessidades do cliente.

A necessidade da equipe mudar:

- Entrada de um novo membro na equipe
- Saída de membro da equipe

## 3 PROCESSO DE DESENVOLVIMENTO DE SOFTWARE

<p style="text-indent: 20px; text-align: justify; font-style: italic;">
Levamos em conta as três natureza distintas apontadas por Sommerville: Técnicas, Humanas e Organizacionais. para formular perguntas que nos guiaram a abordagem de processo mais indicada para o nosso projeto.
</p>


- *Questões Técnicas:* <br>
<p style="margin-left: 70px; font-style: italic;">
  O sistema está sujeito a controle externo? <b>Sim</b>.<br>
  Que tipo de sistema está sendo desenvolvido? <b>Uma aplicação web</b><br>
  Qual o tamanho do projeto? <b>É um projeto pequeno</b>
</p>

- *Questões Humanas:*  <br>
<p style="margin-left: 70px; font-style: italic;">
Quais abordagens de desenvolvimento os desenvolvedores são familiarizados? <b>
Toda a equipe é familiar com SCRUM e parte da equipe é familiar com XP.</b><br>
Quais tecnologias estão disponíveis para apoiar o desenvolvimento do sistema? 
<b>HTML, CSS e JS</b>
</p>

- *Questões Organizacionais:* <br>
<p style="margin-left: 70px; 20px; font-style: italic;">
É necessária uma especificação detalhada antes de começar a fase de implementação 
do projeto? <b>Não. E além disso  parte dos requisitos ainda não são conhecidos 
ou estão sujeitos a reformulação.</b><br>Um esquema de entrega incremental é 
realista? <b>Sim</b>.
</p>

<p style="margin-left: 70px; 20px; font-style: italic;">
O cliente está disposto e disponível para participar do time de desenvolvimento?
<b> Sim. Temos contato próximo ao cliente o que nos garante sua participação no
projeto.</b>
</p>

<p style="text-indent: 20px; font-style: italic;">
Tendo em mente as respostas obtidas identifcamos a oportunidade de trabalhar com
uma abordagem iterativa fazendo uso de uma abordagem Ágil. Dessa maneira optamos por utilizar o SCRUM com elementos do XP(Extreme Programing) pelos seguintes motivos:
</p>

- *Feedback contínuo com o cliente;*
- *Equipe pequena;*
- *Requisitos flexíveis;*
- *Familiaridade da equipe.*

### 3.1 SCRUM:

- **Planejamento da sprint:** Onde é traçado o plano de atividades da sprint da 
semana. Realizado no primeiro dia de cada sprint.
- **Sprint:** Período onde são realizadas as atividades definidas durante o 
planejamento. Definimos a duração da sprint como uma semana
- **Review da sprint:** Processo de avaliação realizado ao final de cada sprint 
junto com o PO(Product Owner) para validar as - atividades da sprint.
- **Retrospectiva da sprint:** Processo também realizado ao final de cada sprint para
 verificar a qualidade do produto e da equipe.

### 3.2 XP(Extreme programming):

- **Programação em pares**: Processo em que dois programadores trabalham juntos em
 uma mesma máquina, um codifica e outro o acompanha, faz críticas e apresenta
sugestões. Pares não são fixos todos da equipe idealmente serão pareados entre
si.

- **Refatoração:** O código implementado deve passar por manutenções buscando
melhorar seu nível de qualidade.

- **Testes:** Devem ser implementados testes unitários, de integração e de
aceitação ao longo do processo de desenvolvimento

- **Integração Contínua:** O código deve ser integrado frequentemente de forma a
manter a base de dados coesa e consistente.

### 3.3 Atividades

#### 3.3.1 Planejamento da Sprint

| **Atividade** | **Método** | **Ferramenta** | **Entrega**                                                                              |
|---|---|---|---|
| Elicitação de Requisitos | Brainstorming | Discord | Requisitos levantados e suas prioridade                                                  |
| Verificação Validação | Reunião com o cliente | a definir | Reformulação dos requisitos que falharem a verificação e validação por parte do cliente  |

#### 3.3.2 Sprint

| **Atividade** | **Método** | **Ferramenta** | **Entrega** |
|---|---|---|---|
| Prototipagem | Mock-up | Figma, Miro | Protótipo do Requisito levantado durante o backlog |
| Desenvolvimento | Pair Programming | VsCode,Live Share(extensão) e Discord | Incremento do produto |
| Testes | Testes Unitários, de Integração e de Aceitação | VsCode | Testes elaborados com o objetivo de reduzir o número de falhas e garantir o bom funcionamento da aplicação |

#### 3.3.3 Review da Sprint

| **Atividade** | **Método** | **Ferramenta** | **Entrega** |
|---|---|---|---|
| Análise do progresso | Reunião com o cliente | a definir | Conjunto de atividades desenvolvidas no decorrer da sprint |

#### 3.3.4 Retrospectiva da Sprint

| **Atividade** | **Método** | **Ferramenta** | **Entrega** |
|---|---|---|---|
| Análise da Equipe | Brainstorming | Discord | Levantamento das dificuldades no decorrer da sprint |

## 4 LIÇÕES APRENDIDAS

## 4.1 Unidade 1

<p style="text-indent: 20px;">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
</p>

## 5 REFERÊNCIAS BIBLIOGRÁFICAS

* [Scrum Guide](https://scrumguides.org/)
* [Extreme Programming](http://www.extremeprogramming.org)
* Material da disciplina disponivel no aprender
