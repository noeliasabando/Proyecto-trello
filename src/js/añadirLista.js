const ocultarInput= document.getElementById("anadirLista");

ocultarInput.addEventListener("click", (event)=>{
  ocultarInput.classList.toggle("oculto");
  document.getElementById("tituloLista").classList.toggle("oculto");
  document.getElementById("botonAnadirLista").classList.toggle("oculto");
})

const guardarTituloLista= document.getElementById("botonAnadirLista");

function anadirColumna(){
  let tablero = document.getElementById("tablero")
  let tituloLista= document.getElementById("tituloLista").value;
  document.getElementById("tituloLista").value ="";

  let columna= document.createElement("div");
  columna.className = "columna col col-12 col-md-3";
  let fondoColumna= document.createElement("div");
  fondoColumna.className= "card-white col";
  let titulo= document.createElement("div");
  titulo.className= "row";
  titulo.textContent = tituloLista;

  let contenedorOpciones= document.createElement("div");
  contenedorOpciones.className= "row";
  let contenedorInterno= document.createElement("div");
  contenedorInterno.className= "col p-0"

  let anadirTarjeta= document.createElement("div");
  anadirTarjeta.className= "col col-12";
  anadirTarjeta.addEventListener("click", mostrarTarjetaOnclick);
  anadirTarjeta.textContent= "+ Añada una tarjeta";
  let tituloTarjeta= document.createElement("textarea");
  tituloTarjeta.className= "col form-control col-12 oculto";
  tituloTarjeta.placeholder= " Introduzca un título para esta tarjeta...";
  let botonAnadirTarjeta= document.createElement("button");
  botonAnadirTarjeta.className= "col btn btn-outline-success col-4 oculto";
  botonAnadirTarjeta.addEventListener("click" , anadirTarjetaOnclick);
  botonAnadirTarjeta.textContent= "Añadir tarjeta";

  contenedorInterno.appendChild(anadirTarjeta);
  contenedorInterno.appendChild(tituloTarjeta).style.width="310px";
  contenedorInterno.appendChild(tituloTarjeta).style.marginLeft="5px";
  contenedorInterno.appendChild(tituloTarjeta).style.marginTop="-15px";


  contenedorInterno.appendChild(botonAnadirTarjeta).style.backgroundColor="#5aac44";
  contenedorInterno.appendChild(botonAnadirTarjeta).style.color="white";
  contenedorInterno.appendChild(botonAnadirTarjeta).style.marginLeft="10px";
  contenedorInterno.appendChild(botonAnadirTarjeta).style.marginTop="5px";
  contenedorInterno.appendChild(botonAnadirTarjeta).style.fontSize="15px";

  contenedorOpciones.appendChild(contenedorInterno).style.color="grey";

  fondoColumna.appendChild(titulo).style.paddingLeft="20px";
  fondoColumna.appendChild(titulo).style.fontWeight="bold";
  fondoColumna.appendChild(contenedorOpciones).style.paddingTop="20px";

  columna.appendChild(fondoColumna).style.padding="15px";

  tablero.appendChild(columna).style.border-radious;"10px";

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
}

function anadirTarjetaOnclick(event){
  let nuevoHijo= document.createElement("div");
  nuevoHijo.className= "row";
  nuevoHijo.textContent= event.target.previousSibling.value;
  let nuevaTarea= event.target.parentElement.parentElement.parentElement.appendChild(nuevoHijo);
}
