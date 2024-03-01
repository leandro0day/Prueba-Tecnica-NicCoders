# Rick and Morty Favorites

Este proyecto es una prueba técnica que utiliza React para el frontend y Node.js con Express para el backend. La aplicación consume la API de Rick and Morty para mostrar una lista de personajes y permite a los usuarios guardar sus personajes favoritos en una base de datos.

## Características

- **Listado de Personajes:** Muestra una lista de personajes obtenidos de la API de Rick and Morty.

- **Favoritos:** Permite a los usuarios guardar hasta 10 personajes como favoritos.

- **Eliminación de Favoritos:** Permite a los usuarios eliminar personajes de su lista de favoritos.

## Tecnologías Utilizadas

- **React:** Biblioteca de JavaScript para construir interfaces de usuario.

- **Node.js y Express:** Para el desarrollo del servidor backend.

- **MySQL:** Base de datos para almacenar los personajes favoritos de los usuarios.

- **React Router:** Para la navegación en el frontend.

- **Tailwind CSS:** Framework de CSS para el diseño y estilización.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/rick-and-morty-favorites.git
   ```
   
2. Entra al directorio del proyecto:

   ```bash
    cd rick-and-morty-favorites
   ```
   
3. Instala las dependencias del frontend y del backend:
  
   ```bash
   cd client
    npm install
    cd ../server
    npm install

   ```

4. Crea un archivo .env en el directorio server siguiendo el formato de .env.example y configura las variables de entorno, incluyendo las relacionadas con la base de datos MySQL.

5. Ejecuta las migraciones para configurar la base de datos:
   ```bash
   # En el directorio 'server'
    npx sequelize-cli db:migrate
   ```

6.Ejecuta el servidor y el cliente por separado:
```bash
  # En el directorio 'server'
  npm start

  # En el directorio 'client'
  npm start

```

Uso
---

1.  Navega por la lista de personajes en la sección "All Characters".

2.  Agrega tus personajes favoritos haciendo clic en "Guardar Personaje".

3.  Visualiza tus personajes favoritos en la sección "Your Favorites".

4.  Elimina personajes de tus favoritos haciendo clic en "Eliminar Favorito".

Contribuciones
--------------

¡Contribuciones son bienvenidas! Si encuentras errores o mejoras posibles, por favor crea un issue o envía un pull request.

Licencia
--------

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

