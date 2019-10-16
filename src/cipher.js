window.cipher = {
  encode: (complexity1, texttoCod) => {
    let position = 0;
    let cResult = '';
    for (let i = 0; i < texttoCod.length; i += 1) {
      position = texttoCod.charCodeAt(i);
      if (position >= 65 && position <= 90) {
        cResult += String.fromCharCode((((position - 65) + parseInt(complexity1, 10)) % 26) + 65);
      } else if (position >= 97 && position <= 122) {
        cResult += String.fromCharCode((((position - 97) + parseInt(complexity1, 10)) % 26) + 97);
      } else {
        cResult += texttoCod.charAt(i);
      }
    }
    return cResult;
  },
  decode: (complexity2, textDecod) => {
    let position = 0;
    let DResult = '';
    for (let i = 0; i < textDecod.length; i += 1) {
      position = textDecod.charCodeAt(i);
      if (position >= 65 && position <= 90) {
        DResult += String.fromCharCode((((position - 90) - parseInt(complexity2, 10)) % 26) + 90);
      } else if (position >= 97 && position <= 122) {
        DResult += String.fromCharCode((((position - 122) - parseInt(complexity2, 10)) % 26) + 122);
      } else {
        DResult += textDecod.charAt(i);
      }
    }
    return DResult;
  },
};

