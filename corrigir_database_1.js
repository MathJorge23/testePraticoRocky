  //converter json para objeto js
  fetch('./broken_database_1.json')
  .then(r => r.json())
  .then(json => {
    json.forEach(objeto_jason => {
      // Corrigir nome do carro
      objeto_jason.nome = objeto_jason.nome.replace(/æ/g, 'a').replace(/ø/g, 'o');

      // Corrigir valor das vendas
      if (typeof objeto_jason.vendas === 'string') {
        objeto_jason.vendas = parseInt(objeto_jason.vendas, 10);
      }
    });

    // Converter objeto para string JSON
    const jsonString = JSON.stringify(json);

    // Escrever string JSON em um novo arquivo
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'database1_corrigido.json';
    a.click();
  });
