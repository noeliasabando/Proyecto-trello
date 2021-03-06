const ocultarInput= document.getElementById("anadirLista");

ocultarInput.addEventListener("click", (event)=>{
  ocultarInput.classList.toggle("oculto");
  document.getElementById("tituloLista").classList.toggle("oculto");
  document.getElementById("botonAnadirLista").classList.toggle("oculto");
  document.getElementById("iconoX").classList.toggle("oculto");
})

const guardarTituloLista= document.getElementById("botonAnadirLista");

function anadirColumna(){
  let tablero = document.getElementById("tablero")
  let tituloLista= document.getElementById("tituloLista").value;
  document.getElementById("tituloLista").value ="";

  let columna= document.createElement("div");
  columna.className = "col col-10 col-xs-10 col-md-8 col-lg-6 col-xl-3 columna";
  let fondoColumna= document.createElement("div");
  fondoColumna.className= "card-white col fondoColumna";
  let titulo= document.createElement("div");
  titulo.className= "row titulo";
  titulo.textContent = tituloLista;

  let contenedorOpciones= document.createElement("div");
  contenedorOpciones.className= "row contenedorOpciones";
  let contenedorInterno= document.createElement("div");
  contenedorInterno.className= "col p-0 contenedorInterno"

  let anadirTarjeta= document.createElement("div");
  anadirTarjeta.className= "col col-12 anadirTarjeta";
  anadirTarjeta.addEventListener("click", mostrarTarjetaOnclick);
  anadirTarjeta.textContent= "+ Añada una tarjeta";
  let tituloTarjeta= document.createElement("textarea");
  tituloTarjeta.className= "col form-control col-12 oculto";
  tituloTarjeta.placeholder= " Introduzca un título para esta tarjeta...";
  tituloTarjeta.classList.add("tituloTarjetas");
  
  let botonAnadirTarjeta= document.createElement("button");
  botonAnadirTarjeta.className= "col btn btn-outline-success col-5 oculto";
  botonAnadirTarjeta.addEventListener("click" , anadirTarjetaOnclick);
  botonAnadirTarjeta.textContent= "Añadir tarjeta";
  botonAnadirTarjeta.classList.add("botonAnadirTarjetas")

  contenedorInterno.appendChild(anadirTarjeta);
  contenedorInterno.appendChild(tituloTarjeta);


  contenedorInterno.appendChild(botonAnadirTarjeta);

  contenedorOpciones.appendChild(contenedorInterno);

  fondoColumna.appendChild(titulo);
  fondoColumna.appendChild(contenedorOpciones);

  columna.appendChild(fondoColumna);

  tablero.appendChild(columna);

  /* tablero.innerHTML+= `
  <div class="columna col col-12 col-md-3">
    <div class="card-white col fondocolumna papa de hermano">
      <div class="row titulo hermano">
          tutulo
      </div> 
      <div class="row contenedoropciones hermano">
        <div class="col p-0">
          <div id="anadirTarjeta" class="col col-12" onclick="anadirTarjeta()">Añada una tarjeta</div>
          <textarea id="tituloTarjeta" class="col form-control col-12 oculto" type="text" placeholder=" Introduzca un título para esta tarjeta..."></textarea>
          <button id="botonAnadirTarjeta" class="col btn btn-outline-success col-4 oculto" onclick="anadirColumna()">Añadir lista</button>
        </div>
      </div>
    </div>
  </div>
  `
 */
}

function mostrarTarjetaOnclick(event){
  let hijos= event.target.parentElement.childNodes
  hijos.forEach(hijo => {
    hijo.classList.toggle("oculto");
  });
}/*toggle si esta lo quita, si no esta lo pone*/

function anadirTarjetaOnclick(event){
  let nuevoHijo= document.createElement("div");
  nuevoHijo.className= "row nuevaTarea";
  nuevoHijo.textContent= event.target.previousSibling.value; /* devuelve nodo anterior al nodo especificado */
  event.target.previousSibling.value = "";
  let padre= event.target.parentElement.parentElement.parentElement;
  let nuevaTarea= padre.insertBefore(nuevoHijo, padre.lastChild);

}


