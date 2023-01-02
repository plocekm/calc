

function screen(val){

    document.getElementById('result').value += val;
}

function answer(){

    let operation = document.getElementById('result').value;

    let result = eval(operation);

    document.getElementById('result').value = result;


}

function clearInput(){
    document.getElementById('result').value="";
}