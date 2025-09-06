let calculation = "";
function updateCalculation(values){
    calculation = calculation + values;
    calculationDisplay(calculation)
    // console.log(calculation);
}

function calculationDisplay(values) {
    document.querySelector('.calculator-display').innerHTML = values;
}