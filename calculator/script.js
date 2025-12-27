const display = document.querySelector('#display');

function displayValue(data){
    display.value += data;
}

function clean(){
   display.value = ' ';
}

function removeOne(){
    display.value = display.value.slice(0, -1);
}

function result(){
    try{
        display.value = eval(display.value)

        if(display.value == "undefined"){
            setTimeout(() => {
            clean()
           }, 1000);
        }
        display.value += value;
    } 
    catch{
        display.value = "Error"

        if(display.value == "Error"){
           setTimeout(() => {
            clean()
           }, 1000);
        }
        display.value += value;
    }
}