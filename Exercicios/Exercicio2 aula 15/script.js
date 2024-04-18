function calcularArea() {
    let largura = parseFloat(prompt("Digite a largura do terreno:"));
    let comprimento = parseFloat(prompt("Digite o comprimento:"));

    let areaTerreno = largura * comprimento;
    console.log(areaTerreno);
}

calcularArea();