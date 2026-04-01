# Projeto ES_2 - Simulador de Veiculo (TypeScript)

## Descricao
Este projeto implementa um simulador simples de veiculo em linha de comando usando TypeScript.
O usuario cria um veiculo informando dados iniciais e interage com um menu para executar acoes como acelerar, frear, trocar marcha e ligar/desligar farol.

O foco principal do projeto e praticar:
- Programacao orientada a objetos (classe e metodos)
- Separacao de responsabilidades entre classe de dominio e interface de uso
- Interacao por terminal com entrada de dados

## Funcionalidades
- Criacao de veiculo via terminal
- Impressao dos dados do veiculo
- Aceleracao baseada na potencia
- Frenagem com limite minimo de velocidade em 0
- Subida de marcha com limite maximo
- Reducao de marcha com limite minimo
- Ligar e desligar farol

## Requisitos do trabalho
Arquivo de requisitos atual:
- Criar um objeto a partir da classe Veiculo
- Criar veiculo
- Imprimir o veiculo
- Acelerar
- Frear
- Subir marcha
- Reduzir marcha

Status atual:
- Todos os itens acima estao implementados
- Funcionalidade adicional implementada: controle de farol

## Estrutura do projeto
- index.ts: ponto de entrada, menu interativo e funcoes de orquestracao
- Veiculo.ts: classe Veiculo com atributos e metodos de comportamento
- requisitos.MD: lista de requisitos da atividade
- tsconfig.json: configuracao do compilador TypeScript
- package.json: metadados e dependencias do projeto

## Tecnologias e dependencias
- Node.js
- TypeScript
- ts-node
- prompt-sync
- @types/prompt-sync

## Como executar
### 1. Instalar dependencias
No diretorio raiz do projeto:

```bash
npm install
```

### 2. Executar o projeto
Como a aplicacao esta em TypeScript, execute com ts-node:

```bash
npx ts-node index.ts
```

## Fluxo de uso da aplicacao
Ao iniciar, o sistema solicita:
- Marca
- Modelo
- Potencia
- Numero de marchas

Depois disso, o menu fica disponivel com as opcoes:
- 1 - Acelerar
- 2 - Frear
- 3 - Subir marcha
- 4 - Descer marcha
- 5 - Ligar/Desligar farol
- 6 - Imprimir dados do veiculo
- 0 - Sair

## Regras de negocio atuais
- Aceleracao so ocorre quando a marcha atual for diferente de 0
- Aceleracao incrementa velocidade por `potencia * 0.1`
- Frenagem decrementa velocidade por `potencia * 0.1`
- Velocidade nunca fica negativa
- Marcha nao ultrapassa o limite maximo (`numeroMarchas`)
- Marcha nao desce abaixo de 0
- Farol alterna entre ligado e desligado

## Exemplo rapido de execucao
Fluxo tipico:
1. Criar veiculo (ex.: marca Fiat, modelo Argo, potencia 100, 5 marchas)
2. Subir marcha para 1
3. Acelerar algumas vezes
4. Ligar farol
5. Imprimir dados
6. Frear
7. Encerrar

## Possiveis melhorias futuras
- Validacao de entradas do usuario (evitar valores invalidos)
- Ligar/desligar motor com impacto nas acoes
- Sistema de combustivel
- Limitacao de velocidade por marcha
- Testes automatizados

## Comandos Git uteis (fluxo com branch de feature)
Criar branch de feature:

```bash
git checkout -b feature/nome-da-feature
```

Salvar alteracoes:

```bash
git add .
git commit -m "feat: descricao da feature"
```

Publicar branch:

```bash
git push -u origin feature/nome-da-feature
```

## Autor
Projeto academico para pratica de TypeScript e orientacao a objetos.
