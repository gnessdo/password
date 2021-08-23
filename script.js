
let btn = document.getElementById("btn");
let output = document.getElementById("output");

let number = [Math.floor(Math.random() * 10)]

btn.addEventListener('click', function(){
    let input = document.getElementById('inp1').value;
    if (input == number){
        output.innerHTML = 'you gussed right, your number was $(number'
    }  else if( input < number)(
        output.innerHTML = "daha dusuk reqem gridiniz!"
    );

    if (input > number) {
        output.innerHTML = "daha yuksek reqem girdiniz!"
    }
})