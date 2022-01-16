## Seletores no CSS

- seletores são elementos html a,p,h1,h3
- dentro de chaves uma propriedade e um valor

```Javascript
a,p,h1,h3{
    color: blue; 
    font-size:14px;
}
```

- qualquer elemento terá a mesma aparencia
- varias regras para elementos do mesmo tipo
- Ids e classes podem representar qquer tipos de elementros
- classe é precedida por um ponto
- id precedido por um #

```Javascript
.header{
    padding:10px
}
```

```Javascript
#header{
    padding:15px
}
```

- um id só pode ser usado uma vez na pagina
- cada elemento html é representado por uma caixa (box model)
- podem alterar sua aparencia![](https://github.com/luizrosalba/hmtl5css/blob/master/img/box_model.PNG?raw=true)
- margens = espaçamento entre elementos
- bordas circulam padding e conteudo
- padding = espaçamento entre a borda e o conteudo
- text, imagem , video , etc
- padding: 10px (topo fundo  ) 5px (dir esq);
- padding: topo 15 px direita 10 inferior px 5  esqueda px 0 ;
- ou podemos especificar apenas uma usando padding- opçao
- backgroud tem várias opções - image, position ...
- usar o site mdn para ver as opções
- https://developer.mozilla.org/pt-BR/docs/Web/Tutoriais
- border : largura , cor e estilo (solida pontilhada , tracejada ... )
- border radius - arredonda os cantos de um elemento
- dica : se eh quadrado border-radius de 50% deixa ele circular

