function romano(num) {
    const map = new Map([[100, "C"],[90, "XC"],[50, "L"],[40, "XL"],[10,"X"], [9,"IX"], [5,"V"], [4,"IV"], [1,"I"]]);
    let cadena = "";
    var flag = false;
    while(num != 0) {
        map.forEach((value, key, map) => {
            if(num >= key && flag == false){
                cadena += value;
                num = num - key;
                flag = true;
            }
        });
        flag = false;
    }
    return cadena;
}

export default romano;