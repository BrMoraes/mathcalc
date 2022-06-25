
function calcular() {
   let x = document.querySelector('#valor').value;
   let result = '';

   for(i = 0; i <= 10; i++) {
      y = x * i;
      r = y;
      result += x + ' ' +  'x' + ' ' +  i + ' ' +  '=' + ' ' +  r + '<br/>' + '<br/>';
   }

   document.querySelector('#demo').innerHTML = result;
}

function calcular2() {
   let a = document.querySelector('#valor2').value;
   let b = document.querySelector('#valor3').value;
   let result2 = '';
   c = a * b;

   result2 = a + ' ' + 'x' + ' ' +  b  + '=' + ' ' + c;

   document.querySelector('#demo2').innerHTML = result2;

}