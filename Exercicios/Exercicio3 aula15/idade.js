function votoPessoa(idade) {
    if (idade >= 18 && idade < 70) {
        return "É obrigatório votar !";
    }
    if ((idade >=16 && idade < 18) || idade > 70) {
        return "O voto é opcional !";
    } else  {
        return "É proibido votar !";
    }
}

let idade1 = Number(prompt("Digite a idade:"));
let mensagem = votoPessoa(idade1);
console.log(mensagem);

