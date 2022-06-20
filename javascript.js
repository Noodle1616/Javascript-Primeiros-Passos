let refrigerante = 11.99;
let macarrao = 6.99;
let ervilha = 6.99;
let arroz = 22.99;
let feijao = 11.89;
let vinho = 70.00;

let refrigerante_ = refrigerante * prompt(`Refrigerante: R$${refrigerante} - Escolha a quantidade`);
    alert(`Valor total do Refrigerante é: ${refrigerante_}`)

let macarrao_ = macarrao * prompt(`Macarrão: R$${macarrao} - Escolha a quantidade`);
    alert(`Valor total do Macarrão é: ${macarrao_}`)

let ervilha_ = ervilha * prompt(`Ervilha: R$${ervilha} - Escolha a quantidade`);
    alert(`Valor total da Ervilha é: ${ervilha_}`)

let arroz_ = arroz * prompt(`Arroz: R$${arroz} - Escolha a quantidade`);
    alert(`Valor total do Arroz é: ${arroz_}`)

let feijao_ = feijao * prompt(`Feijão: R$${feijao} - Escolha a quantidade`);
    alert(`Valor total do Feijão é: ${feijao_}`)

let vinho_ = vinho * prompt(`Vinho: R$${vinho} - Escolha a quantidade`)
    alert(`Valor total do Vinho é: ${vinho_}`)

    let valorSemVinho = refrigerante_ + macarrao_ + ervilha_ + arroz_ + feijao_
    let valorTotal = valorSemVinho + vinho_;
        alert(`O valor total é: R$${valorTotal}`)



        if (Math.floor(valorTotal) % 2 === 0){
            let valor1 = valorSemVinho / 2
            alert(`Você pagara ${valor1}`)
            

        }else{
            let valor2 = valorTotal / 2
            alert(`Você pagara ${valor2}`)
            
        }
    