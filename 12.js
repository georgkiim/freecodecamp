function mouthSize(animal) {
  const a = 'alligator';
  if(animal.toUpperCase()==a.toUpperCase()){ return 'small';
} else return 'wide';
}



function distinct(a) {
    return [...new Set(a)];
  }

  function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    let arrayPlus = arr1.concat(arr2);
  for (i=0; i < arrayPlus.length; i++){
      sum += arrayPlus[i];
      
    }
    return sum;
    }









    switch (val) {
        case 1:
          answer = "alpha";
          break;
        case 2:
          answer = "beta";
          break;
        case 3:
          answer = "gamma";
          break;
        case 4:
          answer = "delta";
          break;
      }



      case 1:
    answer = "alpha";
    break;
    case 2:
    answer = "beta";
    break;
    case 3:
    answer = "gamma";
    break;
    case 4:
    answer = "delta";
    break;    
    function greet(name){
        return "Hello, "+name+" how are you doing today?";
      }


      String.prototype.isUpperCase = function() {
        return String(this) === this.toUpperCase();
      }

      function abbrevName(name){
        const newArray = name.split(" ")
        return (newArray[0][0] + "." + newArray[1][0]).toUpperCase()
     }