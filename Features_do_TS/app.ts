const btn = document.querySelector('#btn');
const input = document.querySelector('#input') as HTMLInputElement;
const input2 = document.querySelector('#input2') as HTMLInputElement;

function addNum(num: number, num2: number){
  return num + num2;
}

if(btn){
btn.addEventListener('click', () =>{
  if(input && input2){
  addNum(Number(input.value), Number(input2.value))
}
})
}