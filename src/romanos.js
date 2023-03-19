function romano(num) {
    let cadena = "";
    if(num < 5){
        if(num == 4){
            cadena += "IV";
        }
        else {
            for(var i = 1; i <= num; i += 1){
                cadena += "I";
            }
        }
    }
    if (num == 5){
        cadena = "V";
    }
    if (num == 9){
        cadena = "IX"; 
    }
    return cadena;
}

export default romano;