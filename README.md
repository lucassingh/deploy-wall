# Monopol Pinturas: Aplicación de Visualización de Colores para paredes

## Descripción

[Monopol Pinturas](https://www.pinturasmonopol.com/) presenta una innovadora aplicación que revoluciona la manera en que los usuarios pueden visualizar y elegir colores de pinturas para sus ambientes. Nuestra aplicación permite a los usuarios cargar imágenes de los espacios de su casa y, utilizando tecnología de inteligencia artificial avanzada, mapear estas imágenes para facilitar la selección de colores de pinturas de una paleta predeterminada.

## Características Principales

- **Carga de Imágenes:** Los usuarios pueden cargar imágenes de los ambientes de su casa, ya sea de la sala de estar, dormitorios, cocina, entre otros.
  
- **Mapeo de Imágenes:** Nuestra tecnología de inteligencia artificial realiza un mapeo preciso de la imagen cargada, identificando las áreas donde se aplicarán los colores de pinturas.
  
- **Selección de Colores:** Los usuarios tienen acceso a una amplia paleta predeterminada de colores de pinturas, permitiéndoles elegir los tonos que mejor se adapten a sus preferencias y estilo.

- **Visualización en Tiempo Real:** La aplicación muestra una vista previa en tiempo real de cómo se verían los diferentes colores de pinturas aplicados en el ambiente cargado, lo que ayuda a los usuarios a tomar decisiones informadas.

- **Facilidad de Uso:** Con una interfaz intuitiva y amigable, nuestra aplicación garantiza una experiencia fluida y sin complicaciones para los usuarios, desde la carga de la imagen hasta la selección de los colores de pinturas.

Monopol Pinturas está comprometido a brindar a nuestros usuarios herramientas innovadoras que simplifiquen el proceso de selección de colores de pinturas y les permitan visualizar el resultado final de manera fácil y precisa.

## Front end de la aplicación

Este proyecto es creado desde un boilerplate de un proyecto de React con Typescript. Tiene las librerías básicas instaladas de React-Boostrap para la utilización de componentes y armar interfaces. Axios para facilitar las conexiones HTTP, Sass para la creación de un tema personalizado y manejo de los estilos y react-router-dom para la generación del ruteo de la aplicación.

## Vite:

Vite es una herramienta de construcción de proyectos web extremadamente rápida y eficiente que se centra en la velocidad del desarrollo. Utiliza la importación de módulos nativos de JavaScript para eliminar la necesidad de una fase de construcción costosa, lo que permite tiempos de desarrollo más rápidos al tiempo que proporciona una experiencia de desarrollo fluida y optimizada para proyectos web modernos.

## Iniciar proyecto:

- Tener instalado node js con una versión superior a 12
- Clonar el repositorio desde este [repositorio](http://192.168.123.38/walldecor/walldecor-web.git)
- Ir a la ruta donde se descargó el proyecto
- Correr comando npm install o npm i
- Correr comando npm run dev

## Estructura del proyecto:

Dentro de la carpeta src:

- **Carpeta api:** Puede contener archivos json para mockear respuestas de APIs
- **Carpeta assets:** Puede contener archivos de imágenes en formato png, jpg, svg, audio, etc
- **Carpeta components:** Puede contener archivos .tsx que son todos los componentes reutilizables de la aplicación. Exportar los componentes en el archivo index.ts para administrar las exportaciones en un solo lugar. Ver más sobre react-router-dom [aquí](https://reactrouter.com/en/main)
- **Carpeta interfaces:** Puede contener archivos .ts que son todas las interfaces de las entidades de la aplicación
- **Carpeta Pages:** Contiene todas las páginas de la aplicación además tiene un archivo index en donde se exportan todas las páginas en un solo lugar.
- **Carpeta Routes:** Contiene el archivo Routes.tsx donde se administran las rutas de la aplicación, puede haber más archivos de rutas para rutas hijas etc.
- **Carpeta styles:** Contiene la modularización de los archivos SASS para administrar los estilos personalizados
- **Archivo App.tsx:** Es el componente donde se renderizan todos los componentes de la aplicación
- **Archivo Main.tsx:** Es el punto de entrada de la aplicación. Se renderiza el componente App.tsx

## Manejo de estilos personalizados:

Dentro de la carpeta styles:

- **Carpeta modules:** Contiene los módulos Sass con los estilos de todos los componentes. Se nombran con _mi-componente para hacer referencia que es un módulo.
- **Archivo _variables:** Es un módulo que contiene valores de colores, medidas o estilos que se utilizan en muchos lugares de la aplicación
- **Archivo index.scss:** Es el archivo en donde se importan todos los módulos scss. Este archivo se importa en el Main.tsx. También se pueden agregar estilos generales a toda la app como por ejemplo el tamaño y color de los titulares h1, h2, etc

## Cómo crear un estilo personalizado:

- Dentro de la carpeta components crear un componente mi-componente y crear la funcionalidad esperada.
- En styles/modules crear un módulo _mi-componente y definir los estilos para ese componente
- Importar el módulo creado en el archivo index.scss. Ver más sobre Sass [aquí](https://sass-lang.com/)

