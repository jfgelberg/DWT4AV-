export function crearPagina(titulo, contenido){
    let html = `
    <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            <link href="estilos.css" rel="stylesheet">
            <title>${titulo}</title>
        </head>
        <body class='bg-dark text-light'>
        <div class="container">
            <div class="row">
            ${contenido}
            </div>
        </div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </body>
    </html>
    `
    return html
}

export function crearListadoPeliculas(peliculas){
    let html = ""
    html += ""
    html+="<h1 class='m-5'>Peliculas</h1>"
    html+="<h2 class='w-100 px-3 me-5 text-end'><a href='/peliculas/nuevo' class='btn btn-xl btn-warning m-2 p-2' style='width: 300px' >Agregar pelicula</a></h2>"
    html+="<table class='table table-dark table-striped border border-0 d-flex justify-content-center'>"
    html+="<tr>"
    html+="<th>ID</th>"
    html+="<th>titulo</th>"
    html+="<th>tematica</th>"
    html+="<th>fecha_estreno</th>"
    html+="<th>puntuacion</th>"
    html+="<th>categoria</th>"
    html+="<th>descripcion</th>"
    html+="<th>Detalle</th>"
    html+="<th>Modificar</th>"
    html+="<th>Eliminar</th>"

    html+="</tr>"
    html+="<tr>"
    if( peliculas.length === 0 ){
        html+="<td colspan='7'>No hay peliculas</td>"
    }else{
        peliculas.forEach(producto => {
            html+="<tr>"
            html+="<td>" + producto.id + "</td>"
            html+="<td>" + producto.titulo + "</td>"
            html+="<td>" + producto.tematica + "</td>"
            html+="<td>" + producto.fecha_estreno + "</td>"
            html+="<td>" + producto.puntuacion + "</td>"
            html+="<td>" + producto.categoria + "</td>"
            html+="<td>" + producto.descripcion + "</td>"
            html+=`<td> <a href='/peliculas/${producto.id}' class='btn btn-sm btn-info p-2 m-2' style='width: 100px'>Detalle</a> </td>`
            html+=`<td> <a href='/peliculas/modificar/${producto.id}' class='btn btn-sm btn-primary p-2 m-2' style='width: 100px'>Modificar</a> </td>`
            html+=`<td> <a href='/peliculas/eliminar/${producto.id}' class='btn btn-sm btn-danger p-2 m-2 borrar' style='width: 100px'>X</a> </td>`
            html+="</tr>"
        })
    }

    html+="</tr>"
    return html
}

export function crearDetallePelicula(pelicula){
    let html = `
        <div class="container">
        <div class="row">
          <div class="col-12">
            <h1 class='m-5 text-light text-center'>Película</h1>
            <div class='container'>
              <div class='d-flex align-items-end justify-content-end'>
                <a class='btn btn-success mb-3 text-light text-center w-100' href='/peliculas'>Atrás</a>
              </div>
              <div class='container'>
                <table class='table table-dark table-striped'>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Título</th>
                      <th>Temática</th>
                      <th>Fecha Estreno</th>
                      <th>Puntuación</th>
                      <th>Categoría</th>
                      <th>Descripción</th>
                      <th>Imagen</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>${ pelicula.id }</td>
                      <td>${ pelicula.titulo }</td>
                      <td>${ pelicula.tematica }</td>
                      <td>${ pelicula.fecha_estreno }</td>
                      <td>${ pelicula.puntuacion }</td>
                      <td>${ pelicula.categoria }</td>
                      <td style='width: 300px'>${ pelicula.descripcion }</td>
                      <td><img src="${ pelicula.img }" alt="${ pelicula.titulo }" style="width: 100px;"/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>      
    `
    return html    
}

export function nuevaPelicula(){
    let html = `
        <div class="container mt-5">
        <h2 class='text-center'>Agregar Película</h2>
        <form action='/peliculas/nuevo' method='post' class='w-50 d-block m-auto mb-5'>
            <div class="mb-3">
                <label for="titulo" class="form-label">Título</label>
                <input type="text" class="form-control" id="titulo" name="titulo" placeholder="Título de la película" required>
            </div>
            <div class="mb-3">
                <label for="tematica" class="form-label">Temática</label>
                <input type="text" class="form-control" id="tematica" name="tematica" placeholder="Temática de la película" required>
            </div>

            <div class="mb-3">
                <label for="fecha_estreno" class="form-label">Fecha de Estreno</label>
                <input type="date" class="form-control" id="fecha_estreno" name="fecha_estreno" required>
            </div>
            <div class="mb-3">
                <label for="puntuacion" class="form-label">Puntuación</label>
                <input type="number" class="form-control" id="puntuacion" name="puntuacion" placeholder="Puntuación de la película" min="0" max="10" step="0.1" required>
            </div>
            <div class="mb-3">
                <label for="categoria" class="form-label">Categoría</label>
                <select class="form-select" id="categoria" name="categoria" required>
                    <option value="" disabled selected>Selecciona una categoría</option>
                    <option value="accion">Acción</option>
                    <option value="comedia">Comedia</option>
                    <option value="drama">Drama</option>
                    <option value="terror">Terror</option>
                    <option value="ciencia_ficcion">Ciencia Ficción</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="descripcion" class="form-label">Descripción</label>
                <textarea class="form-control" id="descripcion" name="descripcion" rows="4" placeholder="Breve descripción de la película" required></textarea>
            </div>
            <div class="mb-3 d-flex gap-2">
                <button type="submit" class="btn btn-lg btn-primary w-50 ">Agregar</button>
                <a class='btn btn-danger btn-lg text-light text-center w-50' href='/peliculas' >Cancelar</a>
            </div>
        </form>
    </div>
    `
    return html
}


// export function nuevaPeliculaAgregada(pelicula){
//     let html = `
//     <div class="container mt-5">
//         <h2 class='text-center'>Se agrego con exito la siguiente pelicula: </h2>
//         <div class="card w-50 m-auto">
//             <div class="card-body">
//                 <h3 class="card-title">Pelicula: ${pelicula.titulo}</h3>
//                 <p class="card-text">corresponde al ID: ${pelicula.id}</p>
//             </div>
//             <div>
//                 <a class='btn btn-success m-5 text-light text-center' href='/peliculas' >Volver</a>
//             </div>
//         </div>
//     </div>
                
//     `
// }


// export function nuevaPelicula(){
//     let html = "<h1>Agregar Nueva Pelicula</h1>"
//     html += "<form action='/peliculas/nuevo' method='post' class='d-flex justify-content-center align-items-center flex-column w-100'>"
//     html += "<label for='titulo' class='form-label'>Titulo</label>"
//     html += "<input type='text' name='titulo' required class=''>"
//     html += "<br>"
//     html += "<label for='tematica'>Tematica</label>"
//     html += "<input type='text' name='tematica' required>"
//     html += "<br>"
//     html += "<label for='fecha_estreno'>Fecha de estreno</label>"
//     html += "<input type='date' name='fecha_estreno' required>"
//     html += "<br>"
//     html += "<label for='puntuacion'>Puntuacion</label>"
//     html += "<input type='number' name='puntuacion' required>"
//     html += "<br>"
//     html += "<label for='categoria'>Categoria</label>"
//     html += "<input type='text' name='categoria' required>"
//     html += "<br>"
//     html += "<label for='descripcion'>Descripcion</label>"
//     html += "<input type='text' name='descripcion' required>"
//     html += "<br>"
//     html += "<button type='submit' >Agregar</button>"
//     html += "</form>"
//     return html
// }

// export function modificarForm(pelicula){
//     let html = "<h1>Agregar Nueva Pelicula</h1>"
//     html += `<form action='/peliculas/modificar/${pelicula.id}' method='post'>`
//     html += "<label for='titulo'>Titulo</label>"
//     html += `<input type='text' name='titulo' value="${pelicula.titulo}" required>`
//     html += "<br>"
//     html += "<label for='tematica'>Tematica</label>"
//     html += `<input type='text' name='tematica' value="${pelicula.tematica}" required>`
//     html += "<br>"
//     html += "<label for='fecha_estreno'>Fecha de estreno</label>"
//     html += `<input type='date' name='fecha_estreno' value="${pelicula.fecha_estreno}" required>`
//     html += "<br>"
//     html += "<label for='puntuacion'>Puntuacion</label>"
//     html += `<input type='number' name='puntuacion' value="${pelicula.puntuacion}" required> `
//     html += "<br>"
//     html += "<label for='categoria'>Categoria</label>"
//     html += `<input type='text' name='categoria' value="${pelicula.categoria}" required>`
//     html += "<br>"
//     html += "<label for='descripcion'>Descripcion</label>"
//     html += `<input type='text' name='descripcion' value="${pelicula.descripcion}" required>`
//     html += "<br>"
//     html += "<button type='submit' >Agregar</button>"
//     html += "</form>"
//     return html    
// }

export function modificarForm(pelicula){
    let html = `
        <div class="container mt-5">
        <h2 class='text-center'>Agregar Película</h2>
        <form action='/peliculas/modificar/${pelicula.id}' method='post' class='w-50 d-block m-auto mb-5'>
            <div class="mb-3">
                <label for="titulo" class="form-label">Título</label>
                <input type="text" class="form-control" name="titulo" value="${pelicula.titulo}" placeholder="Título de la película" required>
            </div>
            <div class="mb-3">
                <label for="tematica" class="form-label">Temática</label>
                <input type="text" class="form-control" name="tematica" value="${pelicula.tematica}"placeholder="Temática de la película" required>
            </div>

            <div class="mb-3">
                <label for="fecha_estreno" class="form-label">Fecha de Estreno</label>
                <input type="date" class="form-control" name="fecha_estreno"value="${pelicula.fecha_estreno}" required>
            </div>
            <div class="mb-3">
                <label for="puntuacion" class="form-label">Puntuación</label>
                <input type="number" class="form-control" name="puntuacion" value="${pelicula.puntuacion}" placeholder="Puntuación de la película" min="0" max="10" step="0.1" required>
            </div>
            <div class="mb-3">
                <label for="categoria" class="form-label">Categoría</label>
                <select class="form-select" id="categoria" name="categoria" required>
                    <option value="${pelicula.categoria}" selected>${pelicula.categoria}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="descripcion" class="form-label">Descripción</label>
                <input type='text' class="form-control py-4" name='descripcion' value="${pelicula.descripcion}" required'>
            </div>
            <div class="mb-3 d-flex gap-2">
                <button type="submit" class="btn btn-lg btn-primary w-50 ">Modificar</button>
                <a class='btn btn-danger btn-lg text-light text-center w-50' href='/peliculas' >Cancelar</a>
            </div>
        </form>
    </div>
    `
    return html
}