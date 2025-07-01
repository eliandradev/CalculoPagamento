function aplicarDesconto (valor, desconto){
    return (valor -(valor * (desconto / 100)));
}

function aplicarJuros (valor, juros){
    return (valor +(valor * (juros / 100)));
}

const precoEtiqueta = 100;
const condicaoPagamento = 1;

if ( condicaoPagamento === 1){
    return(aplicarDesconto -(precoEtiqueta, 10));
}

else if (condicaoPagamento === 2){
    return(precoEtiqueta -(precoEtiqueta, 15));
}

else if (condicaoPagamento === 3){
    return(precoEtiqueta);
}

else {
    return(aplicarJuros(precoEtiqueta, 10));
}