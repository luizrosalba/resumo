function translatePigLatin(str) {
    const regpig = /^([^aeiou].*)?([aeiou].*$)/g;
    const regpig3 = /^([^aeiou].*)?(.*$)/g;
    const regpig2 = /^([aeiou])(.*)$/g;
    
    if (str.match(regpig)!==" " )
        str= str.replace(regpig, '$2$1'.concat('ay') );
  
    /*if 
        (str.match(regpig3)!==" " )
        str= str.replace(regpig3, '$2$1'.concat('ay') );
    */
    if (str.match(regpig2)!==" " )
        str=str.replace(regpig2, '$1$2'.concat('way') ) ;
    
    return str;
  }

console.log(translatePigLatin("rhythm"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("california"));


