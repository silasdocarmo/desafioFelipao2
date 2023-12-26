let score = match(101, 10);

function match(victories, losses){
    return victories - losses;
}

console.log(score);
let nivel = "";

if (score < 0){
    nivel = "Newbie";
}else if (score > 0 && score <= 10){
    nivel = "Ferro";
} else if (score > 10 && score <= 20){
    nivel = "Bronze";
} else if (score >= 20 && score <= 50){
    nivel = "Prata";
} else if (score >= 50 && score <= 80){
    nivel = "Ouro";
} else if (score >= 80 && score <= 90){
    nivel = "Diamante";
} else if (score >= 90 && score <= 100){
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}

console.log(`O heroi tem ${score} ponto(s), e está no nível ${nivel}!`)