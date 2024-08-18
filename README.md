#Desafio Docker 2 - Node.js com MySQL e Nginx
Este repositório contém um projeto de exemplo que demonstra a configuração e execução de uma aplicação Node.js com banco de dados MySQL e um servidor Nginx como proxy reverso, todos utilizando Docker Compose.

##Pré-requisitos
Docker
Docker Compose
Como executar
Clone este repositório:

##Bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Use o código com cuidado.

##Crie os arquivos necessários:

index.js: Crie um arquivo index.js na raiz do projeto com o código da sua aplicação Node.js.
nginx.conf: Crie um arquivo nginx.conf na raiz do projeto com a configuração do Nginx para o proxy reverso.
Inicie os serviços:

##Bash
docker-compose up -d
Use o código com cuidado.

Isso iniciará os containers Node.js, MySQL e Nginx em segundo plano.

##Acesse a aplicação:

Acesse a aplicação em http://localhost:8080 no seu navegador. O Nginx irá encaminhar as requisições para o container Node.js na porta 3000.

##Estrutura do projeto
docker-compose.yml: Define os serviços (Node.js, MySQL, Nginx), suas configurações e dependências.
index.js: Contém o código da sua aplicação Node.js.
nginx.conf: Contém a configuração do Nginx para o proxy reverso.
##Descrição dos serviços
node:

Utiliza a imagem andrebezerramarinho/node_docker_desafio_2:latest.
Mapeia a porta 3000 do container para a porta 3000 do host.
Utiliza o modo de rede desafio.
O container é nomeado como node_desafio.
Monta o arquivo index.js local no container em modo somente leitura (ro).
Depende do serviço mysql estar em execução.
mysql:

Utiliza a imagem andrebezerramarinho/mysql_docker_desafio_2:latest.
Mapeia a porta 3306 do container para a porta 3306 do host.
Utiliza o modo de rede desafio.
O container é nomeado como mysqldesafio.
Define a senha do root do MySQL como RootPassword.
reverse:

Utiliza a imagem oficial do Nginx (nginx:latest).
O container é nomeado como reverse.
Utiliza o modo de rede desafio.
Mapeia as portas 8080 e 443 do container para as mesmas portas no host.
Monta o arquivo nginx.conf local no container em modo somente leitura (ro).
Depende do serviço node estar em execução.
Observações
Certifique-se de substituir seu-usuario e seu-repositorio pelos seus dados reais do GitHub.
Adapte o arquivo index.js com o código da sua aplicação Node.js.
Configure o arquivo nginx.conf de acordo com as suas necessidades de proxy reverso.
Lembre-se de que a senha do root do MySQL está definida como RootPassword por padrão. Altere-a para uma senha forte em um ambiente de produção.
Este README.md fornece uma visão geral do projeto e instruções básicas para executá-lo. Sinta-se à vontade para adicionar mais detalhes ou seções conforme necessário.