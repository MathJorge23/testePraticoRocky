  //converter json para objeto js
fetch('./broken_database_2.json')
.then(r => r.json())
.then(json => {
  json.forEach(objeto_jason => {
    // Corrigir nome da marca
    objeto_jason.marca = objeto_jason.marca.replace(/æ/g, 'a').replace(/ø/g, 'o');
  });
});

    // Converter objeto para string JSON
const jsonString = JSON.stringify(json);

  // Escrever string JSON em um novo arquivo
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'database2_corrigido.json';
  a.click();