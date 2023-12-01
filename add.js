import isInteger from "lodash"

export function add(num1, num2){
    if(isInteger(num1) && isInteger(num2)) {
        return num1 + num2
    } else {
        return NaN;
    }
    
}