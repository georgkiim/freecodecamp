const index = (array, n) => array.length > n ? Math.pow(array[n], n) : -1;

function billboard(name, price = 30){
    const nameArray = name.split("");
    return multiply(nameArray.length,price)
      
    } 
    const multiply = (num1, num2) => {
      return num1 * num2;
    };