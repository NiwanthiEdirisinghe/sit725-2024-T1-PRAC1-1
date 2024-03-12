function changeText(){
    console.log('test');
    let sampleText = ['TEXT-1', 'TEXT-2','TEXT-3','TEXT-4','TEXT-5'];
    var number = getRandomNumberBetween(0,sampleText.length-1);
    document.getElementById('heading').innerHTML= sampleText[number];
}

function getRandomNumberBetween(min, max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
