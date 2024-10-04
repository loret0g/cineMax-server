# CineMAX API Server 📡

Este repositorio contiene el servidor API de CineMAX, una plataforma donde los usuarios pueden gestionar sus películas favoritas, agregarlas a su lista de seguimiento (WatchList), 
valorarlas, y agregar comentarios. El servidor está construido utilizando JSON Server.

## Características 🚀

- 📃 **JSON Server**: Simulación de una API REST para manejo de películas y listas de seguimiento.
- 🎥 **Películas**: Almacena información sobre las películas añadidas a la WatchList.
- ⭐ **Valoraciones y Comentarios**: Gestión de las valoraciones de los usuarios y sus comentarios.
- 👁️ **Estados**: Marca si una película está en la lista de favoritas o si ha sido vista.

## Estructura del Proyecto 🗂️

### movies

La API maneja objetos de películas con la siguiente estructura:

```json
{
  "title": "Título de la película",
  "backdrop_path": "/path.jpg",
  "overview": "Descripción de la película",
  "genres": ["Action", "Comedy"],
  "watched": false,
  "liked": false,
  "rating": 0,
  "comment": "Comentario del usuario",
  "id": 1
}
```

## Used API Endpoints in the App

| HTTP Method | URL                         | Request Body                                                   | Description                                                |
| ----------- | --------------------------- | -------------------------------------------------------------- | ---------------------------------------------------------- |
| GET         | `/movies/`                  |                                                                | Sends all movies                                            |
| POST        | `/movies`                   | `{title, backdrop_path, overview, genres, watched, liked, rating }` | Creates a new movie                                        |
| PUT         | `/movies/:movieId`          | `{title, description, isFav}`                                  | Edits a movie object                                        |
| DELETE      | `/movies/:movieId`          |                                                                | Deletes a movie                                             |
| PATCH       | `/movies/:movieId`          | `{comment}`                                                    | Adds a new comment                                          |
| PATCH       | `/movies/:movieId`          | `{watched}`                                                    | Marks movie as watched                                      |
| PATCH       | `/movies/:movieId`          | `{liked}`                                                      | Marks movie as favourite                                    |
| PATCH       | `/movies/:movieId`          | `{rating}`                                                     | Updates movie rating                                        |

 
## Links 🔗

- [Repositorio Frontend](https://github.com/loret0g/cineMAX)
- [Despliegue en CineMAX](https://cinemax-ironhack.netlify.app)

