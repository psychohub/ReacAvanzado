Nodepop Frontend
================

Este proyecto es una aplicación frontend desarrollada con React para interactuar con la API de Nodepop, una plataforma de venta de artículos de segunda mano. Permite a los usuarios ver los anuncios disponibles, filtrarlos por diversos criterios y publicar nuevos anuncios.

Características principales
---------------------------

*   Visualización de anuncios: Los usuarios pueden explorar los anuncios disponibles en Nodepop.
    
*   Filtrado de anuncios: Los usuarios pueden filtrar los anuncios por nombre, rango de precio, tags y tipo de anuncio (venta o búsqueda).
    
*   Publicación de anuncios: Los usuarios autenticados pueden crear nuevos anuncios proporcionando detalles como nombre, descripción, precio, tags y tipo de anuncio.
    
*   Autenticación de usuarios: Los usuarios pueden registrarse e iniciar sesión en la aplicación para acceder a funcionalidades adicionales, como la creación de anuncios.
    

Tecnologías utilizadas
----------------------

*   React: Biblioteca de JavaScript para construir interfaces de usuario interactivas.
    
*   React Router: Biblioteca para el enrutamiento en aplicaciones React.
    
*   Axios: Cliente HTTP para realizar solicitudes a la API de Nodepop.
    
*   Bootstrap: Framework CSS para un diseño responsive y componentes predefinidos.
    
*   React Bootstrap: Integración de Bootstrap con componentes de React.
    

Configuración del entorno
-------------------------

1.  git clone github.com:psychohub/ReacAvanzado.git
    
2.  cd react-practica-main
    
3.  npm install
    
4.  Configura las variables de entorno:
    
    *   Crea un archivo .env en la raíz del proyecto.
        
    *   REACT\_APP\_API\_BASE\_URL=http://localhost:3001
      
    *   segúrate de que la URL coincida con la ubicación donde se encuentra la API de Nodepop.
        

Ejecución de la aplicación
--------------------------

1.  npm start Esto iniciará la aplicación y estará disponible en http://localhost:3000.
    
2.  Abre un navegador web y visita http://localhost:3000 para ver la aplicación en funcionamiento.
    

API de Nodepop
--------------

Este proyecto utiliza la API de Nodepop para obtener y manipular los datos de los anuncios. Puedes encontrar más información sobre la API y cómo configurarla en el repositorio oficial: [nodepop-api](https://github.com/davidjj76/nodepop-api)

Asegúrate de tener la API de Nodepop en ejecución antes de utilizar esta aplicación frontend.
