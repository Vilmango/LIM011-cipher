const next = document.getElementById("nextlink");
const previous = document.getElementById("previouslink");
const last =document.getElementById("thirdlink")
const container = document.getElementById("container");
const root1 = document.getElementById('root');
const btn1C = document.getElementById('boton1C');
const btn2D = document.getElementById('boton2D');
const btn3Reg = document.getElementById('botonRegreso');
const btn4Reg = document.getElementById('botonRegreso2');
const btn4Cod = document.getElementById('botonCodificar');
const btn5Decod = document.getElementById('botonDecodificar');
btn1C.addEventListener('click', () => {
    container.classList.add("nextlink");
});

btn2D.addEventListener('click', () => {
  container.classList.add("secondlink");
});

btn3Reg.addEventListener('click', () => {
  document.getElementById('textCod').value = '';
  document.getElementById('textDecod').value = '';
  document.getElementById('complex1').value = '';
  document.getElementById('complex2').value = '';
  document.getElementById('resultadoCod').innerHTML='';
  document.getElementById('resultadoDecod').innerHTML='';
  container.classList.remove("nextlink");
});

btn4Reg.addEventListener('click', () => {
  document.getElementById('textCod').value = '';
  document.getElementById('textDecod').value = '';
  document.getElementById('complex1').value = '';
  document.getElementById('complex2').value = '';
  document.getElementById('resultadoCod').innerHTML='';
  document.getElementById('resultadoDecod').innerHTML='';
  container.classList.remove("secondlink");
});

btn4Cod.addEventListener('click', () => {
  const texttoCod = document.getElementById('textCod').value;
  const complexity1 = document.getElementById('complex1').value;
  const CResult = window.cipher.encode(complexity1, texttoCod);
  document.getElementById('resultadoCod').innerHTML = CResult;
  container.classList.remove();
});

btn5Decod.addEventListener('click', () => {
  const textDecod = document.getElementById('textDecod').value;
  const complexity2 = document.getElementById('complex2').value;
  const DResult = window.cipher.decode(complexity2, textDecod);
  document.getElementById('resultadoDecod').innerHTML = DResult;
  container.classList.remove();
});
