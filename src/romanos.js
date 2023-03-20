function romano(num) {
    const map = new Map([[10,"X"], [9,"IX"], [5,"V"], [4,"IV"], [1,"I"]]);
    let cadena = "";
    let cont = 0;
    let aux = num;
    var flag = true;
    while(num != 0) {
        map.forEach((value, key, map) => {
            if(num >= key){
                cadena += value;
                num = num - key;
            }
        });
    }
    
    return cadena;
}

export default romano;