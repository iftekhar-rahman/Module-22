function add(num1, num2 = 0){
    // if(num2 == undefined){
    //     num2 = 0;
    // }
    // num2 = num2 || 0;
    return num1 + num2;
}
const result = add(5, 5);
console.log(result);