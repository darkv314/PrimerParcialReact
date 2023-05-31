# Bienvenid@ a Jellyfish!
A continuacón navegaremos sobre los puntos más importantes del proyecto 😊
## Objetivo
El objetivo de este proyecto es el de crear un blog, que permita el login y logout de usuarios, además de poder publicar, eliminar y editar posts. 
Los usuarios deben ser capaces de interactuar con sus propios posts, pero no con los de otros usuarios. 
Finalmente, se debe obtener una especie de router que nos permita movernos en diferentes secciones del blog. 
## Estructura del proyecto
El proyecto se divide en 4 carpetas principales:
- pages
  - En esta carpeta se encuentran todas las páginas en las que se puede navegar dentro de la aplicación, es decir, el Login, el Inicio(Posts) y el perfil.
- views
  - En esta carpeta se encuentran 2 componentes del layout, el Nav y el Nav Menu. El primero corresponde a la barra de naveghación que se encuentra en todas las páginas, exceptuando la de login. El segundo corresponde al menu que se habilita para pantallas pequeñas. reemplazando los botones del Nav incluyendolos en el menu desplegable.  
- components
  - Aquí se encuentran todos los componentes que se reutilizan a lo largo de las páginas. Ejemplos de estos pueden ser los Inputs, los Botones, el modal, etc.
- helpers
  - Esta carpeta contiene un documento con el regex para verificar los emails validos.
## Requisitos
La aplicación debe cumplir con los siguientes requisitos para ser considerada como completa:
- Conceptos de React y JS
  - Uso de los hooks useState y useEffect para controlar el contenido y el comportamiento de la página.
  - Uso de los métodos reduce y map para renderizar alguna característica propia de la página.
  - Uso del almacenamiento local para preservar los datos de algun formulario en la app.
- Estructura
  -  Encabezado de la página.
  -  Un formulario.
  -  Lista de items renderizados de manera dinamica usando map y reduce.
  -  Botón para enviar el formulario.
- Requisitos Generales
  - Los datos del formulario se deben actualizar cuando los campos cambien.
  - Los datos del formulario se deben almacenar en almacenamiento local cuando cambien.
  - La lista de items debe generarse dinamicamente a partir de un Array.
  - El envio del formulario debe mostrar una alerta en pantalla con los datos del formulario.
- Adicional
  - Validaciones en los campos del formulario.
  - Diseño repsonsive con Tailwind CSS.
## Explicación
Todos los requerimientos de la aplicación han sido completados de manera satisfactoria, y se explicará punto a punto a continuación:
- Conceptos de React y JS
  - El uso del hook useState esta presente en gran matyoria de la aplicación y sus componentes, no explicaré uno por uno por que el documento seria eterno, pero mostrare el ejemplo que más me gusta. Para realizar la emulación de un router, dentro de la raiz del proyecto en App.jsx, se usa el use state para movernos a través de la lista que contiene los diferentes estados de la apllicacion. Si el estado esta en 0, nos encontraremos en el login, que dentro tiene otro simulador de router que permite navegar entre el registro y el login. Mientras que si el estado esta en 1, nos iremos al layout principal que tiene su simulador de router para contener el Nav y las páginas interiores como ser el inicio y el pertfil.
  - Se utiliza useEffect para guardar los datos cambiados de los posts, y el dato del usuario en sesion dentro del local storage cuando estos cambian, ademas de ser utilizado para triggerear los errores en los campos de los formularios.
  - Se utiliza el reduce para hacer el contador del total de caracteres del body de cada post, mientras que se usa el map para mostrar la lista de posts en la página de inicio.
- Estructura
  - Todas las páginas cuentan con la barra de navegación para poder navegar entre las diferentes páginas, además que la página de inicio cuenta con su propia cabecera saludando al usuario.
  - Existen 3 Formularios importantes en la aplicacion, siendo los de login, registro y creacion/edicion de los posts. Todos utilizan al componente Input para sus campos y al componente Button para el boton de submit. 
  - La lista de posts se encuentra en Inicio y se renderica usando map.
- Requisitos generales
  - El estado de los formularios se actualiza en cuanto sucede un cambio debido a que los componentes de Input son controlados.
  - Una vez el formulario haya sido llenado, se usa el boton de enviar y los datos son registrados en local storage. En el caso del login y register, guardamos el usuario, mientras que los posts se guardan todos.
  - La lista de componentes se genera dinamicamente a traves del estado de array que se encuentra en la pagina de Inicio. 
  - Se muestra una alerta en cuanto se haya creado o editado un nuevo post, indicando que se creo o edito de manera exitosa incluyendo el titulo del post.
- Adicional
  - Todos los forms cuentan con verificaciones, dado a que el componente Input se hace cargo de verificar que los datos ingresados sean validos usando un useEffect. En caso de que no lo sean, se incluye un mensaje de error en la parte inferior del Input.

  - La pagina es completamente responsive, funcionando en cualquier tipo de dispositivo. 

  - La prueba más clara de esto es el menu desplegable que aparece en funcion del Nav cuando la pantalla es pequeña.
Todos los estilos se aplicaron con TailwindCSS y la aplicación se desarrollo sobre Vite.

