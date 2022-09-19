const display = document.querySelector(".calculator-input");
const buttons = document.querySelector(".calculator-keys");
let displayValue = '0';
let firstValue = null;
let secondValue = false;
let operators = null;

update();

function update()
{
    display.value = displayValue;
}

buttons.addEventListener('click',buton);

function buton(e)
{
    const element = e.target;

    if(!element.matches('button')) return;

    if(element.classList.contains('operator')){
        // console.log('operator',element.value);
        islem(element.value);
        update();
       return;
    }

    if(element.classList.contains('decimal')){
        // console.log('decimal',element.value);
        if (displayValue.includes('.')) {

            return;
        }
        
    }

    if(element.classList.contains('clear')){
        display.value = '0';
        update();
        return;
    }

    // console.log('number',element.value);
    numbers(element.value);

}

function islem(nextOp)
{
    const deger = parseFloat(displayValue);

   
    
    if(firstValue === null)
    {
        firstValue = deger;
    }
    else if(operators)
    {
        const result = hesapla(firstValue,deger,operators);
        displayValue = String(result);
        firstValue = result ;
    }
  
    secondValue =true;
    operators = nextOp;
   
}

function hesapla(first,second,operate){
    if(operate === '+')
    {
        return first + second;
    }
    else if(operate === '-')
    {
        return first - second;
    }
    else if(operate === '*')
    {
        return first * second;
    }
    else if(operate === '/')
    {
        return first / second;
    }
}

function numbers(number) {
    if(secondValue === true)
    {
        displayValue = number;
        secondValue = false;
    }
    else{
        if(displayValue === '0'){
            displayValue = number;
        }
        else{
            displayValue = displayValue + number;     
        }  
    }
    
    update();
   
}

