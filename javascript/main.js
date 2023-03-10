const hip = document.querySelector('#hipotenusa');
const catb = document.querySelector('#cateto-oposto');
const catc = document.querySelector('#cateto-adjacente');
const resultado = document.querySelector('#total');

function calcularPitagoras(){
    if(hip.value && catb.value && catc.value > 0){
        resultado.innerHTML = "Você já possui o cálculo feito !";
        document.getElementById('hipotenusa').value = "";
        document.getElementById('cateto-oposto').value = "";
        document.getElementById('cateto-adjacente').value = "";
    }else {
        if(catb.value && hip.value > 0){
            hip.value *= hip.value;
            catb.value *= catb.value;
            resultado.value = hip.value - catb.value;
            resultado.innerHTML = Math.sqrt(resultado.value.toFixed(1));
        }else if(catb.value && catc.value > 0){
            resultado.innerHTML = Math.hypot(parseFloat(catb.value), parseFloat(catc.value)).toFixed(1);
        }else if(catc.value && hip.value > 0){
            hip.value *= hip.value;
            catc.value *= catc.value;
            resultado.value = hip.value - catc.value;
            resultado.innerHTML = Math.sqrt(resultado.value.toFixed(1));
        }
        document.getElementById('hipotenusa').value = "";
        document.getElementById('cateto-oposto').value = "";
        document.getElementById('cateto-adjacente').value = "";
    }
}

document.querySelector('.calculate').onclick = function(){
    calcularPitagoras();
}
