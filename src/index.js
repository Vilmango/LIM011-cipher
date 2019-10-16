const btn1 = document.getElementById('boton1');
btn1.addEventListener('click', () => {
  document.getElementById('root').style.display = 'none';
  document.getElementById('secondScreenCod').style.display = 'block';
  document.getElementById('fourthScreenReturn').style.display = 'block';
  document.getElementById('header').style.display = 'block';  
  
});
const btn2 = document.getElementById('boton2');
btn2.addEventListener('click', () => {
  document.getElementById('root').style.display = 'none';
  document.getElementById('secondScreenCod').style.display = 'none';
  document.getElementById('thirdScreenDecod').style.display = 'block';
  document.getElementById('fourthScreenReturn').style.display = 'block';
  document.getElementById('header').style.display = 'block';
});
const btn3 = document.getElementById('botonRegreso');
btn3.addEventListener('click', () => {
  document.getElementById('root').style.display = 'block';
  document.getElementById('secondScreenCod').style.display = 'none';
  document.getElementById('thirdScreenDecod').style.display = 'none';
  document.getElementById('fourthScreenReturn').style.display = 'none';
  document.getElementById('header').style.display = 'none';
  document.getElementById('textCod').value = '';
  document.getElementById('textDecod').value = '';
  document.getElementById('complex1').value = '';
  document.getElementById('complex2').value = '';
  document.getElementById('resultadoCod').innerHTML='';
  document.getElementById('resultadoDecod').innerHTML='';
});
const btn4 = document.getElementById('botonCodificar');
btn4.addEventListener('click', () => {
  const texttoCod = document.getElementById('textCod').value;
  const complexity1 = document.getElementById('complex1').value;
  // console.log(texttoCod);
  // console.log(complexity1);
  const CResult = window.cipher.encode(complexity1, texttoCod);
  document.getElementById('resultadoCod').innerHTML = CResult;
});
const btn5 = document.getElementById('botonDecodificar');
btn5.addEventListener('click', () => {
  const textDecod = document.getElementById('textDecod').value;
  const complexity2 = document.getElementById('complex2').value;
  // console.log(textDecod);
  // console.log(complexity2);
  const DResult = window.cipher.decode(complexity2, textDecod);
  document.getElementById('resultadoDecod').innerHTML = DResult;
});
