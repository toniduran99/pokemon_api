window.onload = function(){
 
    
    fetch(`https://pokeapi.co/api/v2/pokemon/24`)
      .then(respuesta => respuesta.json()) // the .json() method parses the JSON response into a JS object literal
      .then(data => {

        let element = document.getElementById("lista") ;
        element.innerHTML = `<img src ='${data.sprites.front_default}'/>
        <li class= "order"><span>${data.name}</span></li>`;

} 


);
}
