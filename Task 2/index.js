var input = document.getElementById('input'),
    result = document.getElementById('result'),
    inputType = document.getElementById('inputType'),
    resultType = document.getElementById('resultType'),
    inputTypeValue , resultTypeValue;

input.addEventListener('keyup' , myResult)
inputType.addEventListener('change' , myResult)
resultType.addEventListener('change' , myResult)

inputTypeValue = inputType.value
resultTypeValue = resultType.value

function myResult(){
    inputTypeValue = inputType.value
    resultTypeValue = resultType.value
    //For input type meter 
    if(inputTypeValue === 'meter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.001
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100
    } else if(inputTypeValue==='meter' && resultTypeValue === 'miles'){
        result.value = (input.value)*0.00062137
    } else if(inputTypeValue === 'meter' && resultTypeValue === 'meter'){
        result.value = input.value
    } 
    //For input type kilometer 
    if(inputTypeValue === 'kilometer' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 1000
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'centimeter'){
        result.value = Number(input.value) * 100000
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'miles'){
        result.value = (input.value)*0.62137119
    } else if(inputTypeValue === 'kilometer' && resultTypeValue === 'kilometer'){
        result.value = input.value
    }
    //For input type centimeter 
    if(inputTypeValue === 'centimeter' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 0.00001
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 0.01
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'miles'){
        result.value = (input.value)*0.00000621
    } else if(inputTypeValue === 'centimeter' && resultTypeValue === 'centimeter'){
        result.value = input.value
    } 
    // For input type miles
    if(inputTypeValue === 'miles' && resultTypeValue === 'meter'){
        result.value = Number(input.value) * 1609.344
    } else if(inputTypeValue === 'miles' && resultTypeValue === 'kilometer'){
        result.value = Number(input.value) * 1.609344
    } else if(inputTypeValue === 'miles' && resultTypeValue === 'centimeter'){
        result.value = (input.value) * 160934.4
    } else if(inputTypeValue === 'miles' && resultTypeValue === 'miles'){
        result.value = input.value
    }
}