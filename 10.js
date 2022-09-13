const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

function billboard(name, price = 30){
    const nameArray = name.split("");
    return multiply(nameArray.length,price)
      
    } 
    const multiply = (num1, num2) => {
      return num1 * num2;
    };

    var countSheep = function (num){
        let str = "";
        for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
        return str;

        
        const removeChar = str => {
            return str.slice(1, str.length - 1)
        }
        
        