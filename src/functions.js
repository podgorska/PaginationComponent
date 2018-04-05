export const encodeStrings = (...args) => {
    let arrayOfArguments = [...args];
    let result = [];
    let arrayOfResults = [];
    for (let i = 0; i < arrayOfArguments.length; i+=1) {
        const argument = arrayOfArguments[i].split("");
        result = argument.map((el, ind) => argument.find((elem, idx) => elem === el && ind !== idx));
        result = result.map(el => {if(el === undefined) { return "0"} else return "+"});
        arrayOfResults.push(result);
    }
    arrayOfResults = [].concat(...arrayOfResults).reverse().join("");
    console.log(arrayOfResults)
};