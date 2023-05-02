# Game Boy Color - by RedkarRiv
Proyecto 1 GeeksHubs- Videoconsola con HTML, CSS y Javascript.

## Índice

- [⚙️Cómo funciona la Game Boy Color🕹️](#cómo-funciona)
- [🧩Fuentes y referencias👾](#fuentes-y-referencias)
- [🛠️Cómo se hizo la Game Boy Color⛏️](#desarrollo)
- [⚠️Errores conocidos🐛](#errores-conocidos)
- [🪪Licencia y Copyright💸](#licencia-y-copyright)

🕹️🎮⏯️👈👉👆👇☝️🎬🎼🖱️🎶🔕
©️®️🚨💽

### Cómo funciona

El simulador de la **🎮GAME BOY Color🎮 - by Redkar Rival** se puede ejecutar en navegadores web 🖥️ y teléfonos moviles 📱 con una visibilidad y funcionalidad optima en ambos dispositivos.

1. Las funciones de la **🎮GAME BOY Color🎮** son:

- 🎨Selector de colores: Puedes hacer "click" en cualquiera de los botones del selector de colores para cambiar el color de la **🎮GAME BOY Color🎮** y aplicar los siguientes efectos.


    - 👾 Sticker Pokemon en la parte inferior izquierda de la pantalla: Puedes volver a "clickar" en el color que esta seleccionado para quitarlo de la visualización.
    - 🔔 Sonido Pokemon: Cada vez que hagas "click" en uno de los colores, se producirá el sonido caracteristico del pokemon que aparece en el sticker. 
    
*🔕 Si no quieres reproducir estos sonidos, solo tienes que silenciar tu dispositivo o silenciar la página web (haciendo click derecho en la pesña y seleccionando la opción "Silenciar Sitio").*

- ⏯️START: Cuando pulsas el botón **START** se aplicarán los siguientes efectos:

    - 🚨Se enciende el led rojo de POWER de la consola.
    - 🎬Se inicia un gif en la pantalla que simula en arranque de la consola original.
    - 🎶Se reproduce el sonido del inicio del combate pokemon de las primeras generaciones (Pokemon Rojo, Pokemon Azul, Pokemon Verde y Pokemon Amarillo). 

*🔕 Si no quieres reproducir estos sonidos, solo tienes que silenciar tu dispositivo o silenciar la página web (haciendo click derecho en la pesña y seleccionando la opción "Silenciar Sitio").*

Si vuelves a pulsar START; se apagará el led rojo, se apagará la pantalla y se detendrá el efecto de sonido.

2. Los efectos de la **🎮GAME BOY Color🎮** son:

- 👆Pointer (puntero del ratón): 
   - 🔘Cuando se pasa por encima de los botones del selector de color, estos aumentan de tamaño.

   - ⚫Cuando se pulsan los botones del selector de color, los **botones A/B**, las teclas **Arriba, Abajo, Derecha e Izquierda** de la cruceta y los botones **START** y **SELECT**, se simula un efecto de presión eliminado el sombreado y aumentando la opacidad del color de relleno. Estos efectos desaparecen al soltar el botón para representar une efecto realista.

*Se ha incluido la propiedad "Pointer" para facilitar al usuario que reconozca los elementos "clickables" de la pagina.*

<!-- 


![image](https://user-images.githubusercontent.com/122631261/213938710-b0904325-911b-4f54-a3cd-6fad655169cb.png) -->


### Fuentes y referencias

El modelo y todos los detalles que incluye están basados en la videoconsola portátil **Nintendo Game Boy Color**, lanzada al mercado en Japón el 22 de octubre de 1998.

![image](https://user-images.githubusercontent.com/122631261/213939056-f70d2a4b-f98e-4662-a48b-44528f392db0.png)

El cartucho que acompaña a la videoconsola corresponde a **Pokémon Edición Amarilla: Edición Especial Pikachu**, una revisión de los Pokémon Azul y Rojo, siendo uno de los juegos más importantes de lanzamiento de la videoconsola.

![image](https://user-images.githubusercontent.com/122631261/213939202-73e4867a-875a-43bf-9843-8e13800e98cf.png)

### Desarrollo

En el desarrollo de la videoconsola y del cartucho del videojuego se ha empleado HTML y CSS, con algunos elementos Javascrip.
- El cuerpo de la consola está construido con un **display:grid**, dividiendo así los elementos principales, herramienta que también se ha empleado para la cruceta y el altavoz frontal.
- Todos los elementos están creados de cero con HTML y CSS, a excepción de los logotipos de Nintendo, Game Boy Color, la imagen de la pegatina del cartucho y el logotipo de Nintendo GameBoy integrado en el frontal superior del cartucho. Sin embargo, tanto el logotipo de Nintendo del frontal de la máquina como el del cartucho, están tratados con filtros de opacidad y brillo desde CSS.
- Los únicos elementos de javascript se encuentran en el botón START y en el cartucho. Con elementos oneclick y función de cambio de clases para lograr los efectos deseados.
![image](https://user-images.githubusercontent.com/122631261/213939728-91b64e91-5dc0-4ead-9623-39a0b0a86bc8.png)

### Errores conocidos

Aunque no se trata de un error que impida el buen funcionamiento de la web, el piloto led de encendido funciona junto al activado y desactivado del botón START y haciendo click sobre el CARTUCHO. Si en lugar de activar y desactivar cada una de las animaciones, se pulsan seguidas, las animaciones y el piloto led se desincronizarán.

### Licencia y Copyright

El logotipo de Nintendo y Game Boy Color, son propiedad de Nintendo Co., Ltd. Las imágenes representadas en el cartucho del juego pertenecen a Nintendo y The Pokémon Company.