const root1 = document.getElementById('root');
const secondSC = document.getElementById('secondScreenCod');
const thirdSDC = document.getElementById('thirdScreenDecod');
const fourthSR = document.getElementById('fourthScreenReturn');
const head = document.getElementById('header');

const btn1C = document.getElementById('boton1C');
btn1C.addEventListener('click', () => {
  root1.style.display = 'none';
  secondSC.style.display = 'block';
  fourthSR.style.display = 'block';
  head.style.display = 'block';  
});
const btn2D = document.getElementById('boton2D');
btn2D.addEventListener('click', () => {
  root1.style.display = 'none';
  secondSC.style.display = 'none';
  thirdSDC.style.display = 'block';
  fourthSR.style.display = 'block';
  head.style.display = 'block';
});
const btn3Reg = document.getElementById('botonRegreso');
btn3Reg.addEventListener('click', () => {
  root1.style.display = 'block';
  secondSC.style.display = 'none';
  thirdSDC.style.display = 'none';
  fourthSR.style.display = 'none';
  head.style.display = 'none';
  document.getElementById('textCod').value = '';
  document.getElementById('textDecod').value = '';
  document.getElementById('complex1').value = '';
  document.getElementById('complex2').value = '';
  document.getElementById('resultadoCod').innerHTML='';
  document.getElementById('resultadoDecod').innerHTML='';
});
const btn4Cod = document.getElementById('botonCodificar');
btn4Cod.addEventListener('click', () => {
  const texttoCod = document.getElementById('textCod').value;
  const complexity1 = document.getElementById('complex1').value;
  const CResult = window.cipher.encode(complexity1, texttoCod);
  document.getElementById('resultadoCod').innerHTML = CResult;
});
const btn5Decod = document.getElementById('botonDecodificar');
btn5Decod.addEventListener('click', () => {
  const textDecod = document.getElementById('textDecod').value;
  const complexity2 = document.getElementById('complex2').value;
  const DResult = window.cipher.decode(complexity2, textDecod);
  document.getElementById('resultadoDecod').innerHTML = DResult;
});