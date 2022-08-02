
    //write your code here
    var pronoun = ["the", "our"];
    var adj = ["great", "big"];
    var noun = ["jogger", "racoon"];
    var Dominios = pronoun.map(function (dominio) {
        adj.map(function (adjetivo){
            noun.map(function(sustantivo){
                console.log(dominio,adjetivo,sustantivo);
            })
        })
    })
    
