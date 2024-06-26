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

- **React**: Biblioteca de JavaScript para construir interfaces de usuario interactivas.
  
- **Redux Toolkit**: Herramienta para manejar el estado global de la aplicación.
  
- **React Redux**: Enlaces de React para usar Redux.
  
- **React Router**: Biblioteca para el enrutamiento en aplicaciones React.
  
- **Axios**: Cliente HTTP para realizar solicitudes a la API de Nodepop.
  
- **Bootstrap**: Framework CSS para un diseño responsive y componentes predefinidos.
  
- **MDBReact**: Integración de Bootstrap con componentes de React.
    

Configuración del entorno
-------------------------


1. Clona el repositorio:

    ```bash
    git clone github.com:psychohub/ReacAvanzado.git
    cd react-practica-main
    ```

2. Instala las dependencias:

    ```bash
    npm install
    ```

3. Configura las variables de entorno:

    - Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

        ```plaintext
        REACT_APP_API_BASE_URL=http://localhost:3001
        ```

    - Asegúrate de que la URL coincida con la ubicación donde se encuentra la API de Nodepop.

        

Ejecución de la aplicación
--------------------------

1.  Para iniciar la aplicación, ejecuta:

    ```bash
    npm start
    ```

2.  Abre un navegador web y visita http://localhost:3000 para ver la aplicación en funcionamiento.
    

API de Nodepop
--------------

Este proyecto utiliza la API de Nodepop para obtener y manipular los datos de los anuncios. Puedes encontrar más información sobre la API y cómo configurarla en el repositorio oficial: [nodepop-api](https://github.com/davidjj76/nodepop-api)

Asegúrate de tener la API de Nodepop en ejecución antes de utilizar esta aplicación frontend.


Configuración de Redux Dev Tools
--------------------------------

Se ha configurado Redux Dev Tools para simplificar las tareas de debugging de la aplicación. Puedes instalar la extensión de Redux DevTools en tu navegador:

*   [Redux DevTools Extension para Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
*   [Redux DevTools Extension para Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)
*   Esto te permitirá inspeccionar y depurar el estado de tu aplicación Redux de manera efectiva.


Tests
-----

Para garantizar la calidad y el correcto funcionamiento de la aplicación, se han implementado tests utilizando `Jest` y `React Testing Library`. Además, se ha configurado un middleware personalizado para capturar y verificar las acciones de Redux durante las pruebas.

### Ejecución de Tests

1.  Para ejecutar los tests, utiliza el siguiente comando:

    ```bash
    npm test
    ```

2.  Los tests están configurados para ejecutarse automáticamente y proporcionar un informe de los resultados.

### Descripción de Tests

- **advertsActions.test.js**: Verifica que las acciones de Redux relacionadas con los anuncios se despachan correctamente y que las acciones asincrónicas funcionan según lo esperado.
- **Middleware de captura de acciones**: Un middleware personalizado (`actionCaptureMiddleware`) se utiliza para capturar las acciones despachadas durante las pruebas y verificar su correcta ejecución.

### Ejemplo de Test

A continuación se muestra un ejemplo de cómo se configuran y ejecutan los tests para las acciones de anuncios:

```javascript
import { configureStore } from '@reduxjs/toolkit';
import advertsReducer, { fetchAdverts } from '../../redux/advertsSlice';
import { getAdverts } from '../../api/adverts';
import actionCaptureMiddleware, { getCapturedActions, clearCapturedActions } from '../../middlewares/actionCaptureMiddleware';

jest.mock('../../api/adverts');

describe('Adverts Actions', () => {
  afterEach(() => {
    clearCapturedActions();
    jest.clearAllMocks();
  });

  it('should create an action to fetch adverts', async () => {
    const adverts = [{ id: 1, name: 'Advert 1', price: 100 }];
    getAdverts.mockResolvedValue(adverts);

    const store = configureStore({
      reducer: {
        adverts: advertsReducer,
      },
      middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(actionCaptureMiddleware),
    });

    const expectedActions = [
      { type: 'adverts/fetchAdverts/pending' },
      { type: 'adverts/fetchAdverts/fulfilled', payload: adverts },
    ];

    await store.dispatch(fetchAdverts());
    const capturedActions = getCapturedActions();
    expect(capturedActions).toEqual(expectedActions);
  });
});

   
