# Teste Prático Front-end BeTalent

Olá esse projeto foi um teste prático de front-end para a BeTalent. Este projeto consiste em uma interface responsiva que exibe uma tabela de Funcionários, com dados fornecidos por uma API simulada utilizando o json-server. A interface permite realizar pesquisas, formatar datas e telefones fornecido pela API no front-end e se adapta para dispositivos desktop e mobile conforme o mockup fornecido.

## Link de Visualização

https://betalentluixz.netlify.app
![Thumbnail Test](https://betalentluixz.netlify.app/thumbnail.png)

## Tecnologias Utilizadas

- **React.js**: Biblioteca principal para construção da interface.
- **json-server**: Para simular uma API com os dados dos colaboradores.
- **Node.js**: Ambiente de execução para o projeto.
- **Npm**: Gerenciador de pacotes.

## Bibliotecas e Dependências

- **PropTypes**: Para validação das propriedades dos componentes React.
- **tailwind-merge**: Auxilia na combinação de classes do Tailwind CSS, como o ContainerGrid.
- **Tailwind CSS**: Para estilização rápida e responsiva da interface.

## Funcionalidades

- **Tabela de Colaboradores**: Exibe os seguintes dados:
  - Imagem (thumb do/a usuário/a)
  - Nome
  - Cargo
  - Data de admissão (formatada)
  - Telefone (formatado)
- **Input de Pesquisar**: Permite filtrar os colaboradores por nome, cargo ou telefone.
- **Responsividade**: Layout adaptado para desktop e mobile.
- **API Simulada**: Os dados são carregados via fetch a partir do json-server.

### 1. Clone do Repositório e Instalação das Dependências e Execução

1. **Abra seu terminal** (CMD, PowerShell ou o terminal integrado do VSCode, Intelijjei, etc...).

2. **Navegue até o diretório desejado** onde deseja salvar o projeto:

   ```bash
   cd caminho/para/sua/pasta/Projetos

   # Clona o repositório para sua máquina
   git clone "https://github.com/LuixzSouza/BeTalentTest.git"

   # Entra na pasta do projeto
   cd /BeTalentTest

   # Instala as dependências do projeto
   npm install

   # Inicia o servidor de desenvolvimento
   npm run dev
   ```bash
