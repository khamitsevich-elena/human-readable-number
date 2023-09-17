module.exports = function toReadable (number) {
    let num = number.toString()
    let singleDigitNumber = function (num) {
    switch(num) {        
        case '0': 
        return 'zero';
        break;
        case '1': 
        return 'one';
        break;
        case '2': 
        return 'two';
        break;
        case '3': 
        return 'three';
        break;
        case '4': 
        return 'four';
        break;
        case '5':
        return 'five';
        break;
        case '6': 
        return 'six';
        break;
        case '7': 
        return 'seven';
        break;
        case '8': 
        return 'eight';
        break;
        case '9': 
        return 'nine';
        break;
  }
}

if(num.length==1){
return singleDigitNumber(num)
}

let twoDigitNumber = function (num) {
if(num[0]==1){
switch(num) {
    case '10': 
    return 'ten';
    break;
    case '11': 
    return 'eleven';
    break;
    case '12': 
    return 'twelve';
    break;
    case '13': 
    return 'thirteen';
    break;
    case '14': 
    return 'fourteen';
    break;
    case '15': 
    return 'fifteen';
    break;
    case '16': 
    return 'sixteen';
    break;
    case '17': 
    return 'seventeen';
    break;
    case '18': 
    return 'eighteen';
    break;
    case '19': 
    return 'nineteen';
    break;
}
}
if(num[0]==2){
if(num==20) {
    return 'twenty'
}
else{
    return `twenty ${singleDigitNumber(num[1])}`
}
}
if(num[0]==3){
if(num==30) {
    return 'thirty'
}
else{
    return `thirty ${singleDigitNumber(num[1])}`
}
}
if(num[0]==4){
if(num==40) {
    return 'forty'
}
else{
    return `forty ${singleDigitNumber(num[1])}`
}
}
if(num[0]==5){
if(num==50) {
    return 'fifty'
}
else{
    console.log(num)
    console.log(`fifty ${singleDigitNumber(num[1])}`)
    return `fifty ${singleDigitNumber(num[1])}`
}
}
if(num[0]==6){
if(num==60) {
    return 'sixty'
}
else{
    return `sixty ${singleDigitNumber(num[1])}`
}
}
if(num[0]==7){
if(num==70) {
    return 'seventy'
}
else{
    return `seventy ${singleDigitNumber(num[1])}`
}
}
if(num[0]==8){
if(num==80) {
    return 'eighty'
}
else{
    return `eighty ${singleDigitNumber(num[1])}`
}
}
if(num[0]==9){
if(num==90) {
    return 'ninety'
}
else{
    return `ninety ${singleDigitNumber(num[1])}`
}
}
}

if(num.length==2){
return twoDigitNumber(num)
}

if(num.length==3){
if(num[1]==0 && num[2]==0){
    return `${singleDigitNumber(num[0])} hundred`
}
if(num[1]==0){
return `${singleDigitNumber(num[0])} hundred ${singleDigitNumber(num[2])}`
}
else{
return `${singleDigitNumber(num[0])} hundred ${twoDigitNumber(num.slice(1))}`
}
}
}
