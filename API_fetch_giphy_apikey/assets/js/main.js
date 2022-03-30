window.onload = function () {
  let apiKey = 'MPUYWOoBm4QM64jTHecxjczO2nTaXkLc'; //añade aquí tu apikey
  let query = 'kitten'; //lo que quieras buscar
  let limit = '35'; // el número de resultados que necesitas
  let resource = 'gifs'; //gifs - stickers
  let caja = document.getElementById("content");

  let buscar = document.querySelector('#boton');
  buscar.addEventListener('click', e => {
    let palabra = document.querySelector('#buscar').value;
    console.log(palabra);
    query = palabra;
    loadGif();
  })

  loadGif();
  function loadGif(){
    caja.innerHTML = '';
    fetch(`https://api.giphy.com/v1/${resource}/search?api_key=${apiKey}&q=${query}&limit=${limit}&offset=0&rating=g&lang=en`)
      .then(data => {
        return data.json();
      })
      .then(data => {
        console.log(data.data);
        let caja = document.getElementById("content");
        data.data.forEach(function (cat, index) {
          let item = `<div><h2>${cat.title}</h2>
          <img src="${cat.images.original.url}" alt="${cat.title}">
        </div>`;
          caja.innerHTML += item;
        });
      })


  }
}

