const precoEtiqueta = 100;
const condicaoPagamento = 1;

if ( condicaoPagamento === 1){
    console.log(precoEtiqueta -(precoEtiqueta * 0.1));
}

else if (condicaoPagamento === 2){
    console.log(precoEtiqueta -(precoEtiqueta - 0.15));
}

else if (condicaoPagamento === 3){
    console.log(precoEtiqueta);
}

else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}