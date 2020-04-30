# Data Lovers

## Índice

* [Definición del producto](#1-definición-del-producto)
* [Historias de usuario](#2-historias-de-usuario)
* [Diseño de la Interfaz de Usuario](#3-Diseño-de-la-Interfaz-de-Usuario)

## 1. Definición del producto

contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

## 2. Historias de usuario

### Historias de Usuario 1 ### 
"Yo, **como** jugador de Pokemon Go, **quiero** que me de una página de bienvenida **para** poder acceder al contenido de la página.

#### Criterios de aceptación ####
El usuario ingresa a la página y aparece un mensaje de bienvenida. El ingreso debe ser fácil desde cualquier dispositivo.
A desarrollar: HTML, CSS, Responsive

#### Definición de terminado ####

### Historias de Usuario 2 ### 
"Yo, **como** visitante, **quiero** poder ver todos los pokemones, **para** conocerlos.

#### Criterios de aceptación ####
El usuario ingresa a la página desde el boton, vera los 151 pokemones con su foto y número. Esta visualización debe ser bien vista desde cualquier dispositivo.
A desarrollar: HTML, CSS (estilos de la página), Responsive, DOM 

#### Definición de terminado ####

### Historias de Usuario 3 ### 
"Yo, **como** jugador de Pokemon Go, **quiero** ordenar los pokemones de forma ascendente y descendente, **para** poder conocerlos.

#### Criterios de aceptación ####
El usuario debe ir al despliegue del menú "ordenar por" y seleccionar la pestaña "número", luego seleccionar si quiere verlos desde ascendente o descendente. Luego, vera los pokemones ordenados del 1 al 151 y del 151 al 1. Esta visualización debe ser bien vista desde cualquier dispositivo. 
A desarrollar: HTML, CSS (estilos de la página), Responsive, DOM 

#### Definición de terminado ####

### Historias de Usuario 4 ### 
"Yo, **como** jugador de Pokemon Go, **quiero** ordenar los pokemones por tipo, **para** poder verlos.

#### Criterios de aceptación ####
El usuario debe ir al despliegue del menú "ordenar por" y seleccionar la pestaña "tipos", luego seleccionar unos de los 16 tipos (ej.agua, fuego, etc). Luego, vera los pokemones según el tipo seleccionado. Esta visualización debe ser bien vista desde cualquier dispositivo. 
A desarrollar: HTML, CSS (estilos de la página), Responsive, DOM 

#### Definición de terminado ####

### Historias de Usuario 5 ### 
"Yo, **como** jugador de Pokemon Go, **quiero** ver los pokemones segun debilidad, **para** conocerlos más.

#### Criterios de aceptación ####
El usuario debe ir al despliegue del menú "ordenar por" y seleccionar la pestaña "debilidad", luego seleccionar unos de los 16 debilidades (ej.agua, fuego, etc). Luego, vera los pokemones según la debilidad seleccionada. Esta visualización debe ser bien vista desde cualquier dispositivo. 
A desarrollar: HTML, CSS (estilos de la página), Responsive, DOM 

## 3. Diseño de la Interfaz de Usuario

#### Diagrama de flujo y prototipo en papel y lápiz

![diagramaDeFlujo](/prototipados/diagramaFlujo.JPG)
![prototipo1](/prototipados/P1.JPG)
![prototipo2](/prototipados/P2.JPG)
![prototipo3](/prototipados/P3.JPG)

#### Prototipo de baja fidelidad

![prototipo1](/prototipados/PBF1.JPG)
![prototipo2](/prototipados/PBF2.JPG)
![prototipo3](/prototipados/PBF3.JPG)
![prototipo4](/prototipados/PBF4.JPG)
![prototipo5](/prototipados/PBF5.JPG)

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc. Recuerda utilizar la
[identidad gráfica](https://drive.google.com/open?id=1eeWFqrWpy-OYOH4EHDckFGunyrm9iNeE)
correspondiente a cada set de datos que elijas.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

definir qué deberá hacer el producto en base al conocimiento que puedas obtener de tu usuario.

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los datos más relevantes que quieren ver en la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?


