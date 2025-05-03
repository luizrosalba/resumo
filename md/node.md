## NPM

NPM, which stands for Node Package Manager, is a companion app that installs
alongside Node (though it is developed separately and can be updated on a different
schedule than Node). With it, you can download packages, which are reusable JavaScript
modules (and any supporting stuff they might need) from a central package registry (or a
private repository if you have one). The central repository you can find at
www.npmjs.com
You can visit it through a web browser and look through all the packages available,
which makes finding exactly what you need easy.

A Few More NPM Commands
Aside from install, there are many other NPM commands, but you’ll probably only use
a subset most of the time. For example, to find out what modules are installed in your
project, you can issue this command:

- npm ls
  Like on a *nix system, ls is short for list, and that’s what it does: lists the installed
  modules. What you’ll see is a textual tree that shows the modules and then the modules
  they depend on. In other words, more will likely be shown than just the modules you
  explicitly installed (some modules don’t have dependencies, but in the NPM ecosystem,
  those tend to be the exception rather than the rule).
  Tip  one very helpful tip i can give is that if you want to see just the top-level
  modules, whether in the global or local cache, you can add --depth=0 to the ls
  command.
  If you want to see what’s installed in global cache instead, you can do
- npm -g ls
  In fact, keep that -g option in mind because you can add that to most NPM
  commands to differentiate between the local and global caches.
  You can also update a given module:
- npm update express
  Just provide the name of the module to update, and NPM will take care of it, updating
  to the latest available version. If you don’t provide a package name, then NPM will dutifully
  update all packages. And yes, you can drop a -g on it either way to target the global cache.

### Initializing a New NPM/Node Project

Now, in all of this, I did skip one step that clearly is optional but is, in fact, typical, and
that’s initializing a new project. With most Node/NPM projects, you’ll also have a file
named package.json in the root directory of the project. This file is the project manifest
file, and it provides metadata information to NPM (and Node, at least indirectly) about
your project that it needs to do certain things. It will tell NPM what modules to install if
they haven’t been installed yet for one thing (which makes giving a project to another
developer very easy!). It will also contain information like the name and version of the
project, its main entry point, and lots of other information (most of which is optional, but
we’ll look at that a bit more in the next chapter).
While you can write this file by hand or even go entirely without it, it’s a good idea to
have it, and it’s a good idea to let NPM create it for you, which you can do by executing
this command:

- npm init

### Adding Dependencies

Now, let’s say you want to add that Express package I mentioned to this project. There
are two choices. First, you could edit package.json yourself, adding this element:
"dependencies": {
"express": "^4.16.1"
}
However, doing just that won’t have any effect. The module isn’t installed at this
point. To do that, you now must issue a command:

- npm
  NPM will now (using Node as a runtime, it should be mentioned, because NPM is
  just a JavaScript application that runs on Node) go fetch the Express package from the
  central repository, will determine all the dependencies it needs, and will download
  and install all of them in the node_modules directory under the current directory. All
  these modules are now in the project cache (not global cache, it should be noted) and
  ready for you to use (normally, you wouldn’t use the transient dependencies of Express
  directly, though you certainly could, but it’s good form to declare all the modules you
  intend to use explicitly in package.json as dependencies).
  Another alternative, and the one generally favored by developers, is not to edit the
  file directly and instead let NPM do it by issuing a command like this:
- npm install express --save
  This will cause NPM to add the dependency entry in package.json for you. This
  avoids the possibility of accidentally fat-fingering something and having a broken
  experience (or, worse, handing the project to another developer only to get the dreaded
  “It won’t even start up!” call).
- Note  You can also replace --save with --save-dev. this results in a
  devDependencies entry being added to package.json. the difference is
  that devDependencies are modules that you only need during development,
  but which your project code itself doesn’t depend on. as you’ll see later, two
  good examples of this are typeScript and Webpack. also, when uninstalling
  dependencies, --save and --save-dev can also be used to remove the
  dependency from package.json.

The reason this is all important is that, now, let’s say you want to give this project
to someone else. You typically do not want to provide them with all the dependencies
your project requires, all the content of node_modules, if for no other reason that that
directory can quickly grow to a large size. Instead, they can recreate it using the
package.json file just by doing this:
npm install
That will cause NPM to read the package.json file and automatically install all
the dependencies! Now, the person you’re working with has the same development
environment as you as far as project dependencies go for this project without having to  do any leg work themselves! Pretty sweet, right?
As you can guess, there’s quite a bit more to NPM than just what I’ve shown here, but
these are the real basics.

### NPM: More on package.json

In the last chapter, you learned how to init a project with NPM, which generates a
package.json file. I said then that most of its contents were optional, and that’s definitely
true, but let’s talk about what’s available in that file, discussing each of the keys available
(remember it’s just a JSON file, which means it’s defining a JavaScript object, which has keys or properties or attributes or even elements – all these terms are generally taken to be
interchangeable in this context):

- name – We start with a simple one: the name of the thing you’re
  coding! The name element’s value must be no more than 214
  characters, cannot start with a dot or an underscore, can have no
  uppercase letters, and must be URL-safe.
- author – The author is a single person and is defined by an object
  with three potential attributes: name, email, and url (where name is
  required, and both email and url are optional). Alternatively, you
  can make the value a single string in the form "<name> <email>
  (<url>)" and NPM will parse it for you automatically.
- bin – Some packages require executables to be installed to do their
  work and added to the path. That’s where the bin element comes
  in. You can make the value an object (or map, which is probably the
  more appropriate term here) that maps a command to an executable
  and NPM will take care of “installing” it for you when you install the
  package by creating the appropriate symlink.
- browser – Some modules are meant to be used in a browser, not in
  Node, and for those packages, you can use this element instead of
  the main element (coming up shortly!) to hint to the users of your
  package that it depends on primitives available to JavaScript that
  aren’t available in Node.
- bugs – If your project has an issue tracker, then you can reference
  it with the bugs element. The value of this is an object with two
  attributes, url and email, and you can specify either or both (but you
  must specify at least one, or NPM will complain).
- bundledDependencies – Some projects need to preserve NPM
  packages locally or through a single download. For those, this
  element allows you to specify an array of package names that will be
  bundled with your package when you publish it.
- config – If you need to have parameters available in the environment
  when your package is used, then the config element might do the
  trick. Here, you can specify a value like "config" : { "port" :
  "8888" } and then in your code you can reference npm_package_
  config_port as an environment variable to get the value configured.
- contributors – The contributors element is just like the author element
  except that this is an array of people who helped with the project.
- cpu – If your code is only meant to run on certain system architectures,
  you can specify which as an array of strings with the cpu element.
- dependencies – You saw the dependencies element in the previous
  chapter, but I’ll also mention that in addition to specifying a package
  name and optionally a version to be pulled down from the NPM
  registry, you can also specify a URL to a tarball to be downloaded or a
  Git/GitHub URL or a local file system path.
- description – A freeform string that describes your package. It’s as
  simple as that!
- devDependencies – Again, one I mentioned in the previous chapter,
  and it’s simply the same as dependencies, but it names packages that
  are only needed during development.
- directories – This element allows you to describe the structure
  your package, things like the location of library components binary
  content, man pages, Markdown documentation, examples, and tests.
  See the Common JS package specification for details on this.
- engines – This element allows you to specify what version(s) of Node
  your package works on. You can also use this element to define what
  version(s) of NPM is capable of properly installing the package.
- files – When your package is installed as a dependency, NPM will
  need to know what files to include. It will by default assume all, but if
  you want or need to be specified, then the files element will let you
  do that. It works a lot like a .gitignore file, but in reverse: anything
  listed in this element will be included, not ignored.
- homepage – If your project has a web site, then you can specify the
  URL of its homepage with this element.
- keywords – The keywords element is an arbitrary array of strings that
  can be used to help people find your package (more on this in the
  next section).
- license – The value of the license element is the license your
  package is released under. The value of this must be a currently
  registered SPDX license identifier (see spdx.org for a list).
  Alternatively, if you are using a custom license or one that doesn’t yet
  have an SPDX identifier, then you can set the value to "SEE LICENSE
  IN <filename>" and place the <filename> license file alongside the
  package.json file. Or, if you don’t grant rights to use your package to
  anyone (vis-à-vis, you want to make it private and/or unpublished),
  then you can use a value of "UNLICENSED".
- man – With this element you can specify a single file or an array of
  filenames to put in place for the Linux man program to display for
  your package.
- main – This is the primary entry point to your package. For example,
  if your package is named super_duper_cool_package, then a user
  will expect to be able to do require("super_duper_cool_package")
  after they install it. To allow this, the main element must point to the
  file that exports your package’s main export object.
- optionalDependencies – If your package has dependencies and
  NPM can’t install them, then it will fail the installation of your
  package. If, however, you want to specify that some dependencies
  are okay to be missing and that NPM should go ahead with the
  installation anyway, then optionalDependencies is where you can
  list them.
- os – Just like cpu, if your package only works on certain OSs, then this
  element is where you can have an array of strings naming those it
  runs on.
- peerDependencies – Sometimes, a package will function as a plugin
  to others, and so you’ll need a way to define what other packages
  yours is compatible with. The peerDependencies element allows you
  to do that.
- private – If you want to ensure that you can’t accidentally publish
  your package, then set private to false, and NPM will refuse to publish
  it (more to come on publishing in the next section).
- publishConfig – This element is an object that defines many pieces
  of metadata that come into play with publishing your package to the
  NPM registry. This includes things like tags and such. This can get
  fairly involved, and we won’t (for the most part) be worrying about
  any of it in this book beyond a few words in the next section, so I’ll
  leave this one to the NPM documentation if and when you need it.
- repository – If you’d like to specify where the code for your package
  lives, whether GitHub or something else, whether public or private,
  the repository element is where you do that.
  https://github.com/luizrosalba/ArquiteturainternanoNodeefilas.md/blob/master/README.md

### Auditing Package Security

The sad reality is that, sometimes, packages you use will be discovered to have security
vulnerabilities, just like any other software you use. But, being aware of this, the NPM
team has constructed a useful command for dealing with this:

- npm audit
  Running this command will scan your package.json file (or global packages if you
  use -g) and submit the list of dependencies to the default NPM registry requesting a
  report on any known vulnerabilities in them. This report will also include information on
  how to remediate. But, if you want the quick answer, execute this command:
- npm audit fix
  That will cause NPM to update any vulnerable packages with the newest available
  version that hasn’t had the vulnerability reported in it.
  If you’d like to see a detailed audit report, execute
- npm audit --json
  or, if you prefer plain text
- npm audit --readable
  Finally, if you’d like to see what npm audit fix would do but without literally doing
  it, you can use
- npm audit fix --dry-run

### Updating Packages

Once you have a project set up, you may on occasion want to update the packages it
depends on. This is very easy to do:

- npm update
  Yep, that’s it! NPM will go off and update all packages to the latest version, respecting
  your SemVer settings. You naturally can stick a -g in there too in order to update global
  packages.

## TDD e BDD

https://github.com/luizrosalba/node-tdd/edit/master/README.md

### node-tdd

Exemplo de desenvolvimento de API em Node.js usando TDD

### Instalar dependências

```
npm install
```

### Criar container para o banco MongoDB com Docker

Execute o arquivo para gerar o container:

```
./runDocker.sh
```

*Obs.: O Docker precisa estar instalado. Instruções de como instalar o Docker em Windows, Mac e Linux, veja [este post](https://blog.umbler.com/br/containers-102-primeiros-passos-para-realizar-a-instalacao?a=7e8480pk).*

### Executando os testes

Para executar os testes unitários, use o comando:

```
mpm run test:unit
```

Para executar os testes de integração, use o comando:

```
pm run test:integration
```

### Referências

[Documentação do Express](https://expressjs.com)

[Documentação do Sinon.js](https://sinonjs.org) - módulo para uso de *stubs*, *mock* e *spy*

[Documentação do Mocha](https://mochajs.org) - módulo de execução de suites de teste

[Documentação do Chai](https://www.chaijs.com) - módulo para fazer asserções

[Documentação do SuperTest](https://github.com/visionmedia/supertest) - módulo que emula e abstrai requisições HTTP

### Observações

Este código faz parte do curso **_Desenvolvimento Back-end com Node.js_** na [Digital Inovation One](https://digitalinnovation.one).

## Node JWT

https://github.com/luizrosalba/node-jwt/edit/master/README.md

Exemplo de API em Node.js usando JWT

### Instalar dependências

```
npm install
```

### Gerando certificados

O algorítmo de encriptação do token usa o conteúdo de arquivos de certificados que contém as chaves pública e privada. Para gerar estes arquivos, execute o arquivo:

```
$ ./generateKeys.sh
```

A senha solicitada pelo comando pode ficar em branco. Os arquivos **_private.key_** e **_public.key_** serão gerados na pasta **_src_**.

### Iniciar o servidor

Para iniciar o servidor Express, use o comando:

```
npm start
```

### Referências

[Documentação do Express](https://expressjs.com)

[Documentação do JsonWebToken](https://github.com/auth0/node-jsonwebtoken)

### Observações

Este código faz parte do curso **_Desenvolvimento Back-end com Node.js_** na [Digital Inovation One](https://digitalinnovation.one).

## Redis

### Tarefas em Background usando node e redis

- Instalei o docker https://hub.docker.com/
- Docker é uma plataforma de código aberto, desenvolvido na linguagem Go e criada pelo próprio Google.
  Por ser de alto desempenho, o software garante maior facilidade na criação e administração de ambientes isolados,
  garantindo a rápida disponibilização de programas para o usuário final.
- O Docker tem como objetivo criar, testar e implementar aplicações em um ambiente separado da máquina original,
  chamado de container. Dessa forma, o desenvolvedor consegue empacotar o software de maneira padronizada.
  Isso ocorre porque a plataforma disponibiliza funções básicas para sua execução,
  como: código, bibliotecas, runtime e ferramentas do sistema.

Um arquivo Docker pode ser formado por diversas camadas diferentes, onde se dividem em dois grupos:

- Imagens: elas são formadas por diferentes camadas. Com a sua utilização, o usuário pode facilmente compartilhar
  um aplicativo ou um conjunto de serviços em diversos ambientes. Quando há alguma alteração na imagem,
  ou uso de um comando como executar ou copiar, é criada uma camada.

-Containers: são formadas na reutilização das camadas. Um container é o local onde estão as modificações da
aplicação que está em execução. É por meio dele que o usuário pode modificar uma imagem.

- Permite Reversão
- permite Implantação rápida
- criei uma conta
- realizei o tutorial de instalação od docker desktop para windows gerando assim um container docker -tutorial rodando na porta 80
- não consegui startar o container do tutorial (ocorreu algum erro de portas ... )
- Para o Labs vou precisar do redis , para criar este container executei :
  docker run --name redis -p 6379:6379 -d -t redis:alpine
- Pelo amor do deus divino , quando for criar o container, crie com acesso a porta 80. para mudar isso depois é um inferno !!
- eu criei um arquivo explicando como adicionar o acesso a essa porta neste mesmo repositorio do github
- Ele usou a imagem padrão do  Linux 687e7ed93cd5 4.19.76-linuxkit #1 SMP Tue May 26 11:42:35 UTC 2020 x86_64 Linux
- agora pelo docker desktop eu tenho acesso a esta máquina virtual :D
  posso acompanhar os containers criados pelo comando :
- docker ps

insatlei o yarn

- apk add yarn
- yarn --version
- usar o Visual Studio Code com o container :
- adicionar a extensao do docker
- adicionar a extensão do remote container
- criar a paste :
- no VS F1
- remote containers : attach to running container
- está pronto para usar !
- criei uma pasta em ~/.vscoder-server/teste2
  Instalei o yarn express nodemailer dotenv
- yarn add express nodemailer dotenv
  Instalei o gitignore no container para subir o codigo para o git
- busquei o pacote gitignore , já me deu a opção de instalar no container e instalei com um clique
- abri a pasta teste2
- adicionei o git no container
  RUN apk update && apk upgrade && apk add --no-cache bash git openssh
- fui pra pasta teste2 e adicionei o controle git
- yarn add git
- Ele já atualizou as dependencias do projeto no json com o git

```Javascript
{
  "dependencies": {
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "git": "^0.1.5",
    "nodemailer": "^6.4.11"
  }
}
```

- dentro da pasta2 git init
  Initialized empty Git repository in /root/.vscode-server/teste2/.git/
  criei um arquivo .gitignore com a seguinte linha : node_modules
- isso faz com que o git ignore os modulos do node na hora de fazer os meus commits
- Adicionei o nodemon no projeto
  yarn add nodemon sucrase -D
  -Criei o arquivo nodemon.json dentre de teste2
  criei a pasta src e dentro dela coloquei servers.js
- import 'dotenv/config';
  dotenv permite usar variaveis de ambiente
- Criei o arquivo .env na pasta teste 2 e coloquei a o comando : PORT=8080
  .env é bom para usar com variaveis imutaveis como credeciasi de acesso , servidor etc...
- editei e meu server.js ficou assim :

```Javascript
import 'dotenv/config';
import express from 'express'; 

import UserController from './app/controllers/UserControllers'
const app = express();

app.use(express.json());

app.post('/users',UserController.store);

app.listen(process.env.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
  
});
```

e rodei no terminal para iniciallizar o servidor :

- yarn start
- Obs : VAriaveis de ambiente são carregadas qquando o servidor sobre , qquer alteração nelas o servidor deve reiniciar
- dentro da pasta src eu criei a pasta app > controllers > UserController.js
- yard add password-generator
  agora a senha vai ser gerada automaticamente (server.js) . Editando o arquivo UserControllers.js

```Javascript
import passwordGenerator from 'password-generator';
import Mail from '../lib/Mail'

export default {
     async store(req,res){
        const { name , email   } = req.body ; 
        const user = {
            name, 
            email, 
            password : passwordGenerator(15,false)
        };
  
  
         await  Mail.sendMail({
             from:'DIO <contato@batata.com.br>',
             to: `${name}<${email}>`,
             subject : "Cadastro de usuário",
             html: `Olá, ${name}, bem vindo a DIO.`
         })


        return res.json(user);
     }
 }
```

-yarn start

-criamos uma pasta lib dentro de app com o arquivo Mail.js

```Javascript
import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';

export default nodemailer.createTransport(mailConfig)
```

- Usamos o mailtrap.io para simular uma caixa de email
- https://mailtrap.io/inboxes
- criamos a pasta config/mail.js

```Javascript
export default{
    host: process.env.MAIL_HOST, 
    port: process.env.MAIL_PORT, 
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
}
```

```Usei
PORT = 8080

MAIL_HOST = smtp.mailtrap.io
MAIL_PORT = 2525
MAIL_USER= ---
MAIL_PASS= ----
```

<s>Não consegui enviar o email pois o meu container nao tem um servidor http , não consigo fazer o post que gera o usuario , a senha aleatória e manda o email. preciso instalar um servidor http para tanto. </s>

- não precisei de nada disso. o nodemon já inicia o servidor n porta 8080 com o nodejs com as configurações realizadas no arquivo server.js Consegui fazer o post usando o postman desta forma :

![](https://github.com/luizrosalba/Tarefasem-background-utilizando-Nodejs-e-Redis/blob/master/Capturar.PNG?raw=true)

- O professor então fala que uma fila em background poderia ajudar em situações onde muitos usuarios estivessem se cadastrando e nao recebendo o email por causa do await estar demorando muito
- Solução : criar uma fila de processamento em background
- criar o processo que cria a fila
- criamos o registrationmail.js dentro da pasta jobs
- Eu coloquei o pc em modo suspender e deu problema ao reiniciar. Quando reiniciou o docker nao queria abrir os containers por causa do ISS do WIndows. Desativei e funcionou
- Bull Ferramenta encontrada no github para gerenciamento de filas
- tinha uma kue mas parou de ser utilizada (sempre ficar de olho na ultima data do commit)
- criamos o arquivo RegistrationMAil dentro de uma pasta jobs

```Javascript
import Mail from '../lib/Mail'

export default {
    key : 'RegistrationMail',
    options: {
        delay:5000,
        priority:3
    },

    async handle({data}){ ///desestruturacao evita data.data
        const {user} = data; 

        await  Mail.sendMail({
            from:'DIO <contato@batata.com.br>',
            to: `${user.name}<${user.email}>`,
            subject : "Cadastro de usuário",
            html: `Olá, ${user.name}, bem vindo a DIO.`
        })
    }
}
```

- E removemos o await do Mail.js
- criamos um arquivo redis.js dentro da pasta config

```Javascript
export default { 
    host: process.env.REDIS_HOST, 
    port: process.env.REDIS_PORT, 

}
```

e no arquivo .env adicionar
REDIS_HOST = 127.0.0.1
REDIS_PORT = 6379

- Dentro da pasta lib criamos o Queue.js
- adicionamos o bull
- yarn add bull
- percebi que coloquei o config dentro da pasta app  , deveria estar fora , depois corrijo isso
- criamos um index.js dentro de jobs com a linha

```
export {default as RegistrationMail} from './RegistrationMail';
```

Adicionamos um arquivo Queue.js dentro de lib

```Javascript
import Queue from 'bull'; 
import redisConfig from '../config/redis';

import * as jobs from '../jobs';

const queues = Object.values(jobs).map(job=> ({
    bull: new Queue (job.key,redisConfig),
    name: job.key,
    handle:job.handle,
    options: job.options,
}))

export default{
    queues, 
    add(name,data){
        const queue = this.queues.find(queue=>queue.name===name); /// validação so adicioan se a fila existe 
        return queue.bull.add(data,queue.options); /// adiciona o job na fila 
    },
    process(){
        return this.queues.forEach(queue => {
            queue.bull.process(queue.handle);
            queue.bull.on('failed',(job,err) => {
                console.log('Job failed' , queue.key,job.data);
                console.log(err);
            });
        })
    }
}
```

Adicionamos o bull
criamos um queue.js dentro de src para ouvir se há ou nao um processo na fila

```Javascript
///criamos outro arquivo para processar em threads diferentes a fila 
import 'dotenv/config';
import Queue from './app/lib/Queue';
Queue.process();
```

- Adicionamos o bull-board apk add bull-board para visualizar o servidor em
  http://localhost:8080/admin/queues

```embaixo
"queue": "nodemon src/queue.js"
```

- Sentry : https://sentry.io/
- programa muito interessante que fica rodando dentro do servidor buscando exceções
  e nosso server.js ficou assim

```Javascript
import 'dotenv/config';
import express from 'express'; 
import BullBoard from 'bull-board';

import UserController from './app/controllers/UserControllers'
import Queue from './app/lib/Queue'

const app = express();
BullBoard.setQueues(Queue.queues.map(queue=>queue.bull));/// para cada fila , adiconar no bull 


app.use(express.json());
app.use('/admin/queues',BullBoard.UI);///adicionando o bull em uma rota

app.post('/users',UserController.store);

app.listen(process.env.PORT, () => {
    console.log(`Server running on the ${process.env.PORT}`)
});
```

## Node Hapi

https://github.com/luizrosalba/node-hapijs

## Node Mongoose

https://github.com/luizrosalba/node-ongoose/edit/master/README.md

## Construindo sexy APIs usando arquitetura serverless

Construindo sexy APIs usando arquitetura serverless,

### Serverless

Exemplo : Um server rodando em node.js onde você se preocupa prioritariamente
com a rota a ser construída

Vantagens :

- Roda uma função
- Paga-se o quante se usa
- Escalabilidade
- Facilidade no bootspraping
- Facilidade de por outros triggers

### Azures Functions x  AWs

- AWS mais recursos (Aws lambda , Googleecloud Functions , OpenWhisk... )
- Azure mais facil de se trabalhar serverless
- Serverless é muito usado para disparar triggers quando algo acontece
- Também para criar APIs
- listNotes ();
- createNote();
- updateNote();
- deleteNote ();
- azure functions core tools :
- https://docs.microsoft.com/pt-br/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash#v2
- Extensão do vccode : Azure Functions

### Criando uma API

- CRUD de produtos
- cria uma pasta c:\Users\escr\azure_func
- func init
- opção 2 node
- opção 1 javascript
- criou o dir e o json
- func new (cria uma nova funcao)
- template (triggers) - 8 HTTP trigger
- function name : GetProducts
- code .
- sim
- toda config pronta
- alteramos o index.js para :

```Javascript
module.exports = async function (context, req) {
    context.res =  { 
        status:200, 
        body: 'Hello World'
    }
}
```

- no terminal : func host start
- funciona !
- tiramos o metodo post da function.json
- definindo o nome da rota

```Javascript
{
  "bindings": [
    {
      "authLevel": "function",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["get"],
      "route": "products"
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```

- funciona : http://localhost:7071/api/products
- https://github.com/IgorHalfeld/digital-innovation-one-demo
- copiamos o github para mongoclient.js em shared
- npm i mongodb
- em index.js

```Javascript
const createMongoClient = require('../shared/mongoClient');

module.exports = async context => {
  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection('products');
  const res = await Products.find({});
  const body = await res.toArray();
  
  closeConnectionFn();
  context.res = { status: 200, body };
};
```

- http://localhost:7071/api/products retorna os produtos cadastrados no banco que o prof. criou em mongodb+srv://god:dog@cluster0-dfsvs.mongodb.net/dgo?retryWrites=true&w=majority
- trazendo só p id
- func new
- 8 HTTP TRIGGER
- GetProductByID
- no functions

```Javascript
{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["get"],
      "route": "products/{id}"
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```

- no index

```Javascript
const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
  const { id } = req.params;

  if (!id) {
    context.res = {
      status: 400,
      body: 'Provide a product id on params',
    };
    return;
  }

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection('products');
  const body = await Products.findOne({ _id: ObjectID(id) });

  closeConnectionFn();
  context.res = { status: 200, body };
};
```

- retorna o produto
- http://localhost:7071/api/products/5ddb00d8d90791a2afee4055
- Rota para criar produtos
- func new
- 8
- CreateProduct
- index.js

```Javascript
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
  const product = req.body || {};

  if (product) {
    context.res = {
      status: 400,
      body: 'Product is required',
    };
  }

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection('products');

  try {
    const products = await Products.insert(product);
    closeConnectionFn();
    context.res = { status: 201, body: products.ops[0] };
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Error on insert product',
    }; 
  }
};
```

- no function.json

```Javascript
{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["post"],
      "route": "products"
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```

- no postman
- criar o body raw

```Javascript
{
    "nome" : "curso" , 
    "price": 3 
}
```

-POST  http://localhost:7071/api/products/

- 201 created
- ao dar get percebemos o produto criado

```Javascript
{
    "_id": "5f45667fc4d15216d86e6efe",
    "nome": "curso",
    "price": 3
  }
```

- func new
- 8
- UpdateProduct
-
- no index

```Javascript
const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
  const { id } = req.params;
  const product = req.body || {};

  if (!id || !product) {
    context.res = {
      status: 400,
      body: 'Provide a product and product id on params',
    };
    return;
  }

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection('products');

  try {
    const products = await Products.findOneAndUpdate(
      { _id: ObjectID(id) },
      { $set: product },
    );
    closeConnectionFn();
    context.res = { status: 200, body: products };
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Error on insert product',
    }; 
  }
};
```

na function

```Javascript
{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["put"],
      "route": "products/{id}"
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```

- put http://localhost:7071/api/products/5f45667fc4d15216d86e6efe
  com o body raw para atualizar o preco para 4 reais

```Javascript
{
    "nome" : "curso" , 
    "price": 4 
}
```

- funciona !
  Criando o delete
- func new
- 8
- Delete Product
  no index

```Javascript
const { ObjectID } = require('mongodb');
const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
  const { id } = req.params;

  if (!id) {
    context.res = {
      status: 400,
      body: 'Provide a product id on params',
    };
    return;
  }

  const { client: MongoClient, closeConnectionFn } = await createMongoClient();
  const Products = MongoClient.collection('products');

  try {
    await Products.findOneAndDelete({ _id: ObjectID(id) });
    closeConnectionFn();
    context.res = {
      status: 200,
      body: 'Product deleted successfully!',
    };
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Error on delete product ' + id,
    };
  }
};
```

No Functions

```Javascript
{
  "bindings": [
    {
      "authLevel": "anonymous",
      "type": "httpTrigger",
      "direction": "in",
      "name": "req",
      "methods": ["delete"],
      "route": "products/{id}"
    },
    {
      "type": "http",
      "direction": "out",
      "name": "res"
    }
  ]
}
```

- DELETE http://localhost:7071/api/products/5f45667fc4d15216d86e6efe
- produto deletado com sucesso
- deploy no azure
- em todas as functions "authLevel": "anonymous", pois só uma function consegue acessar uma function
- clica com o botao direito sobre o painel do VS onde ficam os arquivos
- deploy to function app
- pay as you go  ( funcao ligada quando recebe )
- visual studio enterprise ( funcao sempre ligada )
- qeure reescreveR ?
- coloque o nome da nova funcao
- digital-innovation-one-api
- cria os resources
- no painel function apps
- na funcao que vc criou , no submenu cors
- allowed Origins * ( libera o acesso pra todos os dominios )
- sua api :
  https://digital-innovation-one-api.azurewebsites.net/api/products
- commit
- publish  azurefunc
- https://github.com/luizrosalba/azure_func

