function romano(num) {
    let cadena = "";
    if(num < 5){
        for(var i = 1; i <= num; i += 1){
            cadena += "I";
        }
    }
    return cadena;
}

export default romano;