function calcularMelhorPetshop(event) {
    event.preventDefault();

    var data = document.getElementById("data").value;
    var quantidadePequenos = parseInt(document.getElementById("quantidadePequenos").value);
    var quantidadeGrandes = parseInt(document.getElementById("quantidadeGrandes").value);

    // Distância
    var distanciaMeuCaninoFeliz = 2;
    var distanciaVaiRex = 1.7;
    var distanciaChowChawgas = 800;

    // Preços dos banhos em cada petshop
    var precoMeuCaninoFeliz = calcularPreco(distanciaMeuCaninoFeliz, 20, 40, data);
    var precoVaiRex = calcularPreco(distanciaVaiRex, 15, 50, data);
    var precoChowChawgas = calcularPreco(distanciaChowChawgas, 30, 45, data);

    // Custo total dos banhos para cães pequenos
    var totalPequenosMeuCaninoFeliz = quantidadePequenos * precoMeuCaninoFeliz.pequeno;
    var totalPequenosVaiRex = quantidadePequenos * precoVaiRex.pequeno;
    var totalPequenosChowChawgas = quantidadePequenos * precoChowChawgas.pequeno;

    // Custo total dos banhos para cães grandes
    var totalGrandesMeuCaninoFeliz = quantidadeGrandes * precoMeuCaninoFeliz.grande;
    var totalGrandesVaiRex = quantidadeGrandes * precoVaiRex.grande;
    var totalGrandesChowChawgas = quantidadeGrandes * precoChowChawgas.grande;

    // Custo total dos banhos para cães pequenos e grandes
    var totalJuntosMeuCaninoFeliz = totalPequenosMeuCaninoFeliz + totalGrandesMeuCaninoFeliz;
    var totalJuntosVaiRex = totalPequenosVaiRex + totalGrandesVaiRex;
    var totalJuntosChowChawgas = totalPequenosChowChawgas + totalGrandesChowChawgas;

    // Melhor petshop para cães pequenos
    var melhorPetshopPequenos = determinarMelhorPetshop(precoMeuCaninoFeliz.pequeno, precoVaiRex.pequeno, precoChowChawgas.pequeno);

    // Melhor petshop para cães grandes
    var melhorPetshopGrandes = determinarMelhorPetshop(precoMeuCaninoFeliz.grande, precoVaiRex.grande, precoChowChawgas.grande);

    // Melhor petshop para cães pequenos e grandes
    var melhorPetshopJuntos = determinarMelhorPetshop(totalJuntosMeuCaninoFeliz, totalJuntosVaiRex, totalJuntosChowChawgas);

    // Resultado
    var resultadoDiv = document.getElementById("resultado");

    resultadoDiv.innerHTML = "<p><strong>Melhor petshop para cães pequenos: </strong>" + melhorPetshopPequenos.nome + "</p > " +
        "<p>Valor: R$" + melhorPetshopPequenos.valor.toFixed(2) + " cada" + "</p>" +
        "<p><strong>Melhor petshop para cães grandes: </strong>" + melhorPetshopGrandes.nome + "</p>" +
        "<p>Valor: R$" + melhorPetshopGrandes.valor.toFixed(2) + " cada" + "</p>" +
        "<p><strong>Melhor petshop para cães pequenos e grandes juntos: </strong>" + melhorPetshopJuntos.nome + "</p>" +
        "<p>Valor: R$" + melhorPetshopJuntos.valor.toFixed(2) + "</p>" +
        "<p><strong>Outros petshops para cães pequenos: </strong>" + " <br> " +
        "Meu Canino Feliz: R$" + totalPequenosMeuCaninoFeliz.toFixed(2) + "<br>" +
        "Vai Rex: R$" + totalPequenosVaiRex.toFixed(2) + "<br>" +
        "ChowChawgas: R$" + totalPequenosChowChawgas.toFixed(2) + "</p>" +
        "<p><strong>Outros petshops para cães grandes: </strong><br>" +
        "Meu Canino Feliz: R$" + totalGrandesMeuCaninoFeliz.toFixed(2) + "<br>" +
        "Vai Rex: R$" + totalGrandesVaiRex.toFixed(2) + "<br>" +
        "ChowChawgas: R$" + totalGrandesChowChawgas.toFixed(2) + "</p>" +
        "<strong>Distância: </strong>" + "<br>" + "Meu Canino Feliz: " + distanciaMeuCaninoFeliz + "km" + "<br>" +
        "Vai Rex: " + distanciaVaiRex + "km" + "<br>" + "ChowChawgas: " + distanciaChowChawgas + "m";

}

function calcularPreco(distancia, precoPequeno, precoGrande, data) {

    return {
        pequeno: precoPequeno,
        grande: precoGrande
    };
}

function determinarMelhorPetshop(precoMeuCaninoFeliz, precoVaiRex, precoChowChawgas) {
    var menorPreco = Math.min(precoMeuCaninoFeliz, precoVaiRex, precoChowChawgas);
    var petshop = "";

    if (menorPreco === precoMeuCaninoFeliz) {
        petshop = {
            nome: "Meu Canino Feliz",
            valor: precoMeuCaninoFeliz
        };
    } else if (menorPreco === precoVaiRex) {
        petshop = {
            nome: "Vai Rex",
            valor: precoVaiRex
        };
    } else {
        petshop = {
            nome: "ChowChawgas",
            valor: precoChowChawgas
        };
    }

    return petshop;
}
