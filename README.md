![bob dylan](https://www.bobdylan.com/wp-content/themes/icon-bobdylan/img/bob-dylan-title-small.png)


# loremDylan

Proyecto abierto a colaboraciones.
Endpoint para desarroyadores web que están cansados de pokemons y de rickymortyes

Nos devolverá una respuesta en formato json con un array de objetos que contiene todas las canciones del maestro bobdylan que tiene en su web.
Un array de objetos con las siguientes propiedades:

```
song: 'Título de la canción',
lyrics: 'Texto en inglés'
cover: 'url de la portada del disco en el que fue publicado'
```

## endpoints

En su versión primera esta api cuenta con los siguientes endopoints del tipo get. Por ahora sólamente se pueden leer el fichero.

### Todas las canciones sin paginar.

`````
https://loremdylan-production.up.railway.app/api/v1/all
`````

### Todas las canciones paginadas de 10 en 10

`````
https://loremdylan-production.up.railway.app/api/v1/paginated
`````

`````
https://loremdylan-production.up.railway.app/api/v1/paginated/?page=NUMBER
`````

### 1O Canciones del dylan

`````
https://loremdylan-production.up.railway.app/api/v1/10/?page=NUMBER
`````

### Frase aleatoria de las canciones del dylan

`````
https://loremdylan-production.up.railway.app/api/v1/frase
`````



## Webscraping

Esta api está construída desde los datos que se encuentran en el fichero ```data/bobDylanSongs.json```.
Si se desea actualizar el fichero se puede desde la consola y con el comando ```npm run dylanToJson``` nos generará un archivo en formato ```json``` con las canciones de bobDylan en la carpeta data de este respositorio.

![lista de canicones](songsPage.png)