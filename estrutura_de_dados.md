# Estrutura de Dados 
Principais : 
- vetores e matrizes 
- Registro
- Lista
- Pilha 
- Fila 
- Árvore 
- Tabela Hash 
- Grafos
Operações básicas devemos saber em uma estrutura de dados?
Inserir, excluir, localizar dados, percorrer itens e classificar dados.
## Registro 

Fornece um formato especializado para armazenar informações em memória. Permite armazenar mais de um tipo de dado
ex: Registro de um cliente contém CPF, Nome , Endereço e contato . Toda estrutura da Registro pode ser acessado por meio de ponto . Ex: pessoa.CPF

## Listas 

Armazena dados de um tipo em uma ordem específica 
- listas possuem tamanho ajustável , enquanto arrays tem tamanho fixo 
Dois tipos de listas : 
- Ligadas 
Existem os nós onde cada um dos nós conhece o valor que está sendo armazenado em seu interior além de conhecer o elemento posterior a ele. Os nós são amarrados com essa indicação de qual é o próximo nó
- Duplamente Ligadas 
São bidirecionais. Nelas nós conhecemos o próximo elemento e o anterior , o que permite a navegação reversa 
# Pilhas 
Serve como uma coleção de elementos e permite o acesso a somente um item de dados armazenado, uma manipulação por ves 

- LIFO 
Last in first out : 
O primeiro elemento a ser retirado é o ultimo que tiver sido inserido 
![](./img/lifo.png)
- FIFO 
First in first out . O primeiro elemento a ser retirado é o primeiro que tiver sido inserido 
![](./img/fifo.png)

## Filas : 

Admite remoção de elementos e inserção de novos sujeita à regra FIFO. 

![](./img/fila.png)

## Árvore 

Organiza os elementos de forma hierárquica, onde existe o fundo da árvore (raiz) e seus subordinados (nós ou folhas)

![](./img/arvore.png)

## Tabelas Hash 

Tabela de Espalhamento 
Associa chaves à valores 

Espalha os elementos de forma não organizada (nem alfabeticamente nem numericamente ... )

![](./img/hash.png)

acesso rápido a partir da chave 

## Grafos

Permite programar a relação entre objetos

objetos são vértices ou nós do grafo 

relacionamentos são as arestas 

![](./img/grafo1.png)

