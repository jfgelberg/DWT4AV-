import * as peliculaService from "../services/peliculas.service.js"
import * as peliculaView from "../views/peliculas.view.js"

const getPeliculas = (req, res)=>{
    peliculaService.getPeliculas()
        .then(productos => {
            res.send(peliculaView.crearPagina("Listado de peliculas", peliculaView.crearListadoPeliculas(productos)))
        })
}

const getPeliculaId = (req, res) => {
    console.log(req.params.id)
    peliculaService.getPeliculaId(req.params.id)
        .then( pelicula => res.send( peliculaView.crearPagina("detalle", peliculaView.crearDetallePelicula(pelicula)) ) )
}
const nuevaPelicula = (req, res) => {
    res.send( peliculaView.crearPagina("Nueva pelicula", peliculaView.nuevaPelicula() ) )
}

const agregarPelicula = (req, res) => {
    peliculaService.agregarPelicula(req.body)       
    .then( ( pelicula ) => res.send( peliculaView.crearPagina("Nueva pelicula", `      
     <div class="container mt-5 ">
         <h2 class='text-center'>Se agrego con exito la siguiente pelicula: </h2>
         <div class="card w-50 m-auto bg-dark text-light border border-none">
             <div class="card-body bg-dark text-light">
             <h3 class="card-title bg-dark text-light">Pelicula: ${pelicula.titulo}</h3>
             <h4 class="card-text">corresponde al ID: ${pelicula.id}</h4>
             </div>
             <div>
                 <a class='btn btn-success m-5 text-light text-center' href='/peliculas' >Volver</a>
             </div>
         </div>
     </div>
        `  ) ) )
    .catch( (err) => res.send(peliculaView.crearPagina("Error Al agregar una pelicula", `<p>${err}</p>`)) )
}

const eliminarPelicula = (req, res) => {
    peliculaService.eliminarPelicula(req.params.id)
        // .then( ( pelicula ) => res.send( peliculaView.crearPagina("Pelicula Eliminada", `<p>id: ${pelicula.id} <br> Titulo: ${pelicula.titulo}</p>`  ) ) )
        .then( ( id ) => res.redirect("/peliculas") )
        .catch( (err) => res.send(peliculaView.crearPagina("Error Al eliminar una pelicula", `<p>${err}</p>`)) )
}

const modificarPeliculaForm = (req, res) => {
    const idPelicula = req.params.id
    peliculaService.getPeliculaId(idPelicula)
        .then( pelicula => res.send( peliculaView.crearPagina("Modificar Pelicula", peliculaView.modificarForm(pelicula) ) ) )
        .catch( (err) => res.send(peliculaView.crearPagina("Error Al modificar una pelicula", `<p>${err}</p>`)) )
    
}

export const modificarPelicula = (req, res) => {
    const idPelicula = req.params.id
    peliculaService.modificarPelicula(idPelicula, req.body)
        .then( () => res.redirect("/peliculas") )

}

export {
    getPeliculaId,
    getPeliculas,
    nuevaPelicula,
    agregarPelicula,
    eliminarPelicula,
    modificarPeliculaForm
}