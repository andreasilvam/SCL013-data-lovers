# POKEMANÍA
# Data Lovers

## Índice

* [Definición del producto](#1-definición-del-producto)
* [Historias de usuario](#2-historias-de-usuario)
* [Diseño de la Interfaz de Usuario](#3-Diseño-de-la-Interfaz-de-Usuario)

## 1. Definición del producto

Pokemanía es una página web dirigida a jugadores nivel intermedio que quieren conocer a los 151 pokemones de la primera generación, de la región de Kanto. Nuestra página comienza con un mensaje de bienvenida invitando al usuario a acceder mediante un botón. Luego estamos en la página principal, la cual muestra en su lado izquierdo un menú para filtrar la busqueda de los pokemones por Número, Tipos y Debilidad. Tambien en esta página, se muestra una galeria de imagenes de todos los pokemones, junto a su nombre y número, y a cada uno de ellos se podrá acceder a una ficha informativa donde se detalla su altura, peso, tipo, evolución, debilidades, etc.

* ¿Quiénes son los principales usuarios de producto? Jugadores intermedios de Pokemón Go
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto? Tener más conocimiento sobre Pokemon Go y jugar con mayor información.
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué? Las fichas con la información necesaria en cada pokemon. Además dentro de cada ficha se puede encontrar información de otros pokemones, logrando ver los vinculos que hay entre ellos como por ejemplo en sus evoluciones.
* ¿Cuándo utilizan o utilizarían el producto? Cuando necesiten batallar contra otro pokemon en el juego y/o para estudiar mas a cada pokemon.

## 2. Historias de usuario

### Historias de Usuario 1 ###
"Yo, **como** jugador de Pokemon Go, **quiero** que me de una página de bienvenida **para** poder acceder al contenido de la página.

#### Criterios de aceptación ####
El usuario ingresa a la página y aparece un mensaje de bienvenida. El ingreso debe ser fácil desde cualquier dispositivo.
A desarrollar: HTML, CSS, Responsive

#### Definición de terminado ####
Al ingresar se muestra el mensaje de bienvenida y el usuario hará click en Ingresar para conocer a los pokemones o ver los que me faltan.
El código cumple con la guía de estilos acordada.
El código esta en el repositorio.

### Historias de Usuario 2 ###
"Yo, **como** visitante, **quiero** poder ver todos los pokemones, **para** conocerlos.

#### Criterios de aceptación ####
El usuario ingresa a la página desde el boton, vera los 151 pokemones con su foto y número. Esta visualización debe ser bien vista desde cualquier dispositivo.
A desarrollar: HTML, CSS (estilos de la página), Responsive, DOM

#### Definición de terminado ####
Luego de ingresar, aparece un listado con imagenes de todos los pokemones ordenados por numero. El usuario al hacer click en una imagen podrá conocer la ficha técnica o descripción del pokemon.

### Historias de Usuario 3 ###
"Yo, **como** jugador de Pokemon Go, **quiero** ordenar los pokemones de forma ascendente y descendente, **para** poder conocerlos.

#### Criterios de aceptación ####
El usuario debe ir al despliegue del menú "ordenar por" y seleccionar la pestaña "número", luego seleccionar si quiere verlos desde ascendente o descendente. Luego, vera los pokemones ordenados del 1 al 151 y del 151 al 1. Esta visualización debe ser bien vista desde cualquier dispositivo.
A desarrollar: HTML, CSS (estilos de la página), Responsive, DOM

#### Definición de terminado ####
Aparece el listado de imagenes de todos los pokemones ordenados por numero. En la parte izquierda de la pagina habrá un "select" donde aparece la opción de ordenar el listado de pokemones por números, que puede ser del 1 al 151 o del 151 al 1. El usuario al hacer click en una imagen podrá conocer la ficha técnica o descripción del pokemon.

### Historias de Usuario 4 ###
"Yo, **como** jugador de Pokemon Go, **quiero** ordenar los pokemones por tipo, **para** poder verlos.

#### Criterios de aceptación ####
El usuario debe ir al despliegue del menú "ordenar por" y seleccionar la pestaña "tipos", luego seleccionar unos de los 16 tipos (ej.agua, fuego, etc). Luego, vera los pokemones según el tipo seleccionado. Esta visualización debe ser bien vista desde cualquier dispositivo.
A desarrollar: HTML, CSS (estilos de la página), Responsive, DOM

#### Definición de terminado ####
Aparece el listado de imagenes de todos los pokemones ordenados por numero. En la parte izquierda de la pagina habrá un "select" donde aparece la opción de ordenar el listado de pokemones por Tipos, y dentro de este, se desplegarán las 16 opciones de tipo a seleccionar. El usuario debe seleccionar la categoria que quiere al hacer click. Al hacer click va a aparecer los pokemones del tipo seleccionado.El usuario al hacer click en una imagen podrá conocer la ficha técnica o descripción del pokemon.

### Historias de Usuario 5 ###
"Yo, **como** jugador de Pokemon Go, **quiero** ver los pokemones segun debilidad, **para** conocerlos más.

#### Criterios de aceptación ####
El usuario debe ir al despliegue del menú "ordenar por" y seleccionar la pestaña "debilidad", luego seleccionar unos de los 16 debilidades (ej.agua, fuego, etc). Luego, vera los pokemones según la debilidad seleccionada. Esta visualización debe ser bien vista desde cualquier dispositivo.
A desarrollar: HTML, CSS (estilos de la página), Responsive, DOM

#### Definición de terminado ####
Aparece el listado de imagenes de todos los pokemones ordenados por numero. En la parte izquierda de la pagina habrá un "select" donde aparece la opción de ordenar el listado de pokemones por Debilidad, y dentro de este, se desplegarán las 16 opciones de debilidad a seleccionar. El usuario debe seleccionar la categoria que quiere al hacer click. Al hacer click va a aparecer los pokemones del tipo seleccionado. El usuario al hacer click en una imagen podrá conocer la ficha técnica o descripción del pokemon.

## 3. Diseño de la Interfaz de Usuario

#### Diagrama de flujo y prototipo en papel y lápiz

Realizamos el diagrama de flujo para identificar las funciones de la web, y luego el sketch del prototipo.

![diagramaDeFlujo](/prototipados/diagramaFlujo.JPG)
![prototipo1](/prototipados/P1.JPG)
![prototipo2](/prototipados/P2.JPG)
![prototipo3](/prototipados/P3.JPG)

#### Prototipo de baja fidelidad

![prototipoBF1](/prototipados/PBF1.jpg)
![prototipoBF2](/prototipados/PBF2.jpg)
![prototipoBF3](/prototipados/PBF3.jpg)
![prototipoBF4](/prototipados/PBF4.jpg)
![prototipoBF5](/prototipados/PBF5.jpg)

* Prototipo de baja fidelidad en InVision
[Ver](https://andrea375124.invisionapp.com/overview/POKEMON-ck9a1cm6a0j8g01b6tfqilkgz/screens?v=8y9wZJtAKo4dfldtAoUdoA%3D%3D&linkshare=urlcopied)

#### Prototipo de alta fidelidad

Luego de testar, recibir feedbacks de parte de distintos usuarios, compañeras y coachs, y analizar nuestro prototipo de baja, diseñamos nuestro Interfaz de usuario o prototipo de alta fidelidad en Figma y lo exportamos a Zeplin.

* Prototipo de alta fidelidad en Figma
[Ver](https://www.figma.com/proto/Z6L6zbXb7gPZTlqnzQcUTO/Untitled?node-id=37%3A5&scaling=min-zoom)

* Exportación del proyecto de Figma a Zeplin
[Ver](https://zpl.io/aB0kdeQ)

![prototipoFinal1](/prototipados/PF1.jpg)
![prototipoFinal2](/prototipados/PF2.jpg)
![prototipoFinal3](/prototipados/PF3.jpg)
![prototipoFinal4](/prototipados/PF4.jpg)

#### Testeos de usabilidad

Exportamos nuestro prototipo al Maze el cual nos arrojo los siquientes resultados por usuario:

![testMaze1](/prototipados/maze1.jpg)
Acá podemos ver que el puntaje de usabilidad de nuestro prototipo es de un 77% entre 4 usuarios que realizaron este test, y 9 bloqueos en las misiones.

![testMaze2](/prototipados/maze2.jpg)
Acá, si bien el puntaje resultó de un 78%, la tasa de click errónes fue de un 12%.

![testMaze3](/prototipados/maze3.jpg)
Acá, el puntaje resultó de un 45%, ya que los click errónes fue de un 25%, aunque se cumplió la misión. Este error nos hizo replantearnos la columna del menú "mostrar" y la dejaremos fija.

![testMaze4](/prototipados/maze4.jpg)
Acá, el puntaje resultó de un 96%, solo hubo una demora en el tiempo del click.

![testMaze5](/prototipados/maze5.jpg)
Puntaje 100%

![testMaze6](/prototipados/maze6.jpg)
Acá, el puntaje resultó de un 83%, ya que un usuario hizo click en otra parte que lo llevaba a otro lado.

![testMaze7](/prototipados/maze7.jpg)
Un 67% se sintió bien realizando la tarea, y un 33% súper bien.

![testMaze8](/prototipados/maze8.jpg)
Con estos comentarios recibidos mas nuestro feedback según los resultados obtenidos a traves del testeo, pudimos realizar nuestro producto final.

### Producto finalizado

Con estos comentarios recibidos mas nuestro feedback según los resultados obtenidos a traves del testeo, pudimos realizar nuestro producto final.

* Producto final
[Ver](https://andreasilvam.github.io/SCL013-data-lovers/src/index.html)

### Pruebas unitarias

Realizamos test para las funciones de filtrar por tipo, filtrar por debilidad, buscar por nombre, ordenar de forma ascendente y descendente.

![test](/prototipados/test.jpg)

