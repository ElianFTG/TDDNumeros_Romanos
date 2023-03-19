function romano(num) {
    const map = {1 : "I", 5 : "V", 10 : "X"};
    let cadena = "";
    let cont = 0;
    let aux = num;
    var flag = true;
    while(aux != 0){
        cont ++;
        aux = parseInt(aux / 10);
    }
    while(cont != 0 && flag == true){
        if(cont == 1){
            if (num == 4 || num == 9){
                if (num == 9){
                    cadena += "IX";
                }
                else{
                    cadena += "IV";
                }
            }
            else if (num < 4){
                for(var i = 0; i < num % 10; i += 1){
                        cadena += map[1];
                }
            }
            else{
                cadena += "V";
            }
        }
        if(cont == 2){
            if (num % 10 == 0) {
                cadena += map[10];
                flag = false;
            }
            else if (num % 10 == 4 || num % 10 == 9){
                if (num == 9){
                    cadena += "XC";
                }
                else{
                    cadena += "XL";
                }
            }
            else if (num % 10 < 4){
                for(var i = 0; i < num % 10; i += 1){
                        cadena += map[10];
                }
            }
            else{
                cadena += "L";
            }
        }
        cont --;
        num /= 10;
    }
    return cadena;
}

export default romano;