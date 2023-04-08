# ANTEPROYECTO FINAL 2º CURSO DE DAW

### Josep Maria Castell Colom y Rafael Ivorra Llodrá.

## Introducción

En este proyecto se pretende la creación de un portal web dirigido a músicos, en el que se propone dar solución a un problema detectado. Es evidente que, en el contexto de nuestra sociedad, el ritmo de tareas siempre es acelerado. Así, algo aparentemente tan sencillo como organizar ensayos entre músicos puede llegar a ser bastante complicado. La aplicación que se propone para este proyecto tratará de ofrecer una herramienta para coordinar los horarios en los que los diferentes componentes de un grupo puedan ensayar juntos.

Los usuarios de la aplicación podrán, en primer lugar, crear una cuenta personal de usuario, que les concederá unas credenciales a través de las que podrán acceder a las funcionalidades previstas. Una vez registrados, podrán crear grupos con los demás miembros de su banda, conjunto, etc. Un calendario interactivo les permitirá entonces coordinar fechas y horarios para sus ensayos. Adicionalmente, la aplicación tendrá ciertas funcionalidades propias de una red social, donde los usuarios podrán interactuar entre sí de diferentes modos.

Se tratará de que la aplicación tenga unas funcionalidades útiles y, sobre todo, que dé solución al problema planteado inicialmente. Se priorizará que la aplicación funcione de forma segura, correcta y sin fallos, frente al exceso de funcionalidades. Por ello resultará de vital importancia la fase de testeo de la aplicación.

## Descripción de la aplicación

La aplicación contará, como mínimo, con las siguientes funcionalidades implementadas.

- Registro en la aplicación, mediante credenciales de usuario (nombre/ contraseña).

- *Login* en la aplicación, utilizando las claves obtenidas tras el registro.

- Crear y modificar un perfil personal, con información que se compartirá públicamente con los demás usuarios y relevante para el funcionamiento de la aplicación. Los parámetros serán, entre otros, instrumento/s, estilo/s, localidad, nivel de competencia, rol (solista, acompañante, de sesión, cantautor...).

- Posibilidad de crear uno o varios grupos, comunidades, conjuntos... de músicos.

- Dentro del grupo, habrá diferentes secciones con distintas visibilidades (pública o privada). En estas secciones se podrán enviar y responder mensajes, tanto dentro del grupo como a la comunidad más amplia de usuarios, dependiendo de la visibilidad que se haya establecido.

- Se podrá añadir y modificar la información del grupo (estilo musical, centro u área de operaciones, etc.)

- Se podrán definir horarios con la disponibilidad de cada músico. A partir de la información que aporte cada miembro, se podrán concretar citas para ensayos en común.


## Fases del desarrollo de software

Las fases a recorrer en el proceso de desarrollo de la aplicación seguirán un estándar habitual, constando de:

    1 Análisis de sistemas y requisitos.

En esta fase serán analizados y definidos los requisitos funcionales y no funcionales que procedan respecto a la aplicación a desarrollar.

    2 Diseño.

Una vez completada la fase anterior, y teniendo bien presentes los requisitos necesarios, se pasará a realizar el diseño de la aplicación. En esta fase se completarán los diferentes diagramas que servirán de guía para el desarrollo de la aplicación en sí.

    3 Implementación.

En esta fase se procederá a implementar la aplicación utilizando las tecnologías definidas en las fases anteriores.

    4 Pruebas.

La fase de pruebas será crucial para comprobar la correcta implementación de todo el stack de la aplicación.

    5 Despliegue en producción y mantenimiento.

Una vez que la aplicación haya sido completada y convenientemente testeada, se pasará a desplegarla en un entorno de producción y a realizar todas las comprobaciones que garanticen el correcto funcionamiento de la misma.

### Análisis

El primer punto del ciclo de vida del desarrollo del software es el análisis.

En este punto se procede a la identificación de las partes interesadas del proyecto y los requisitos que debe cumplir la aplicación; ya sean funcionales, no funcionales o de sistema.

También es conveniente realizar diferentes diagramas como el de casos de uso con sus respectivos documentos detallados de requisitos para cada caso de uso.

Otra parte importante de la fase de análisis es la selección de las tecnologías que van a ser usadas para cumplir con los requisitos: lenguajes a utilizar, servidores, Sistema Gestor de Bases de Datos(SGBD), IDEs y otras herramientas necesarias para la implementación de la aplicación.

Otro punto de la fase de análisis es el primer modelado de lo que será la base de datos, creando un modelo entidad-relación que resultará crucial a la hora de definir y crear dicha base de datos.

#### Identificación de las partes interesadas del proyecto

- Invitado
- Usuario autenticado
	- Administrador de grupo
	- Miembro de grupo

#### Requisitos funcionales

- **Invitado**
	- Visitar 'landing page'
	- Visitar 'login'
	- Visitar 'register'
	- Visitar secciones públicas

- **Usuario autenticado**
	- Visitar 'landing page'
	- Visitar secciones públicas
	- Cerrar sesión
	- Añadir/modificar/eliminar información del perfil personal
	- Eliminar cuenta propia de usuario
	- Crear grupo
	- Añadir/modificar/eliminar comentarios propios de secciones públicas

	- **Administrador de grupo**
		- Añadir/modificar/eliminar información de grupo/s propio/s
		- Añadir/eliminar secciones de grupo/s propio/s
		- Definir privacidad de las secciones
		- Añadir/eliminar miembros de grupo/s propio/s
		- Añadir/modificar/eliminar publicaciones de grupo/s propio/s
		- Añadir/modificar/eliminar comentarios propios de publicaciones
		- Eliminar comentarios/publicaciones ajenos
		- Definir administradores de grupos propios
		- Solicitar y confirmar cita/ensayo

	- **Miembro de grupo**
		- Visitar secciones públicas y privadas de sus grupos
		- Añadir/modificar/eliminar publicaciones propias
		- Añadir/modificar/eliminar comentarios propios de publicaciones
		- Definir horarios disponibles

#### Tecnologías

Las tecnologías a emplear en el proyecto son consideradas estándard, de uso ampliamente difundido, en el contexto del desarrollo web. En concreto, se utilizarán las siguientes.

- Lenguajes de programación.

	- *Front end*. JavaScript, utilizando el *framework* Vue en su última versión (en estos momentos, 3). La generación de contenidos dinámicos del lado del cliente, así como una primera capa de validación de *inputs*, vendrá dada en esta parte.

	- *Back end*. PHP, con el *framework* Laravel, también en su última versión (actualmente, se ha alcanzado la versión 10). Laravel posibilita, por lo demás, la interacción con el SGBD a través del ORM Eloquent. En el lado del servidor se creará principalmente una API para servir datos de forma eficiente y segura a las peticiones del lado del cliente.

- Lenguajes de marcado.

	- HTML5 y CSS, este último a través del *framework* específico Tailwind en su versión más actual (3). La estructura básica y estilos de la página vendrán definidos en esta parte.

	- Markdown, lenguaje de referencia para la escritura de documentación asociada al proyecto.

- Sistema gestor de bases de datos

	- El SGBD principal será PostgreSQL, en la versión de referencia de Ubuntu 22.04 (14).

- Servidor de despliegue y control de versiones.

	- El servidor web utilizado para el despliegue será Apache, nuevamente en la versión disponible en los repositorios de Ubuntu 22.04 (actualmente, la 2.4).

	- El sistema para llevar un control de versiones será a través de la herramienta `git`, con los repositorios en la nube de GitHub.

- Otros

	- El trabajo en local será realizado en sistemas operativos Ubuntu, versión 22.04. El editor de texto principal será Visual Studio Code/ VS Codium.

#### Diseño de la base de datos

- users
	- id(PRIMARY_KEY): int
	- name: string
	- lastname: string
	- email: string
	- password: string
	- phone?: string
	- address?: string
	- image?: string

- instruments
	- id(PRIMARY_KEY): int
	- name: string

- instrument_user
	- id(PRIMARY_KEY): int
	- user_id(FOREIGN_KEY): int
	- instrument_id(FOREIGN_KEY): int

- musicianrole
	- id(PRIMARY_KEY): int
	- name: string

- musicianrole_user
	- id(PRIMARY_KEY): int
	- musicianrole_id(FOREIGN_KEY): int
	- user_id(FOREIGN_KEY): int

- groups
	- id(PRIMARY_KEY): int
	- name: string
	- city?: string
	- description?: longtext
	- image?: string

- section
	- id(PRIMARY_KEY): int
	- name: string
	- description?: longtext
	- image?: string
	- isPublic: boolean
	- group_id(FOREIGN_KEY): int

- group_user
	- id(PRIMARY_KEY): int
	- isAdmin: boolean
	- group_id(FOREIGN_KEY): int
	- user_id(FOREIGN_KEY): int

- style
	- id(PRIMARY_KEY): int
	- name: string

- group_style
	- id(PRIMARY_KEY): int
	- group_id(FOREIGN_KEY): int
	- style_id(FOREIGN_KEY): int

- style_user
	- id(PRIMARY_KEY): int
	- style_id(FOREIGN_KEY): int
	- user_id(FOREIGN_KEY): int

- post
	- id(PRIMARY_KEY): int
	- title: string
	- body: longtext
	- image?: string
	- section_id(FOREIGN_KEY): int
	- user_id(FOREIGN_KEY): int

- comment
	- id(PRIMARY_KEY): int
	- body: longtext
	- post_id(FOREIGN_KEY): int
	- user_id(FOREIGN_KEY): int

- timeframe
	- id(PRIMARY_KEY): int
	- dayofweek: int
	- start: int
	- end: int

- timeframe_user
	- id(PRIMARY_KEY): int
	- group_id(FOREING_KEY): int
	- timeframe_id(FOREIGN_KEY): int
	- user_id(FOREIGN_KEY): int

- timeframe_group
	- id(PRIMARY_KEY): int
	- confirmed: boolean
	- timeframe_id(FOREIGN_KEY): int
	- group_id(FOREING_KEY): int

### Diseño del frontend

#### Wireframes

De cara a identificar los elementos y la estructura de la página se ha procedido a realizar los correspondientes *wireframes* utilizando la aplicación web [WireframePro](https://wireframepro.mockflow.com/).

- News seed:

![wireframe-news-seed](https://user-images.githubusercontent.com/91564460/230741468-d9623b36-cafb-46b1-a0c7-a9343184e7e7.PNG)

- News seed con comentario:

![wireframe-news-seed-comment](https://user-images.githubusercontent.com/91564460/230741489-99858145-635c-4c27-bb23-40be6fa2f583.PNG)

- Sección de grupo:

![wireframe-group-section](https://user-images.githubusercontent.com/91564460/230741495-140f90eb-62fe-4610-92c6-f3024406393e.PNG)

- Sección de grupo con nueva publicación:

![wireframe-group-section-post](https://user-images.githubusercontent.com/91564460/230741500-f420dbb2-ee20-401c-b218-15de1aac5b32.PNG)

- Calendario:

![wireframe-calendar](https://user-images.githubusercontent.com/91564460/230741527-5459551a-810e-4af3-8d13-f0aaf19bade3.PNG)

#### Paleta de colores

Para la paleta de colores hemos seleccionado dos colores principales, a partir de los cuales se inspirará el resto del diseño. Se incluyen tres tonalidades intermedias como colores secundarios.

A parte de estos colores principales, la interfaz contará con un un color claro, muy cercano al blanco y un color oscuro muy cercano al negro.

Además se dispondrá de un color extra (color de acento) el cual servirá para señalar y dar importancia a los errores que puedan surgir.

Se añade a continuación una tabla con el esquema de colores:

Colores principales:

#5EE7FD

#5EFD60

Colores secundarios:

#54E3D0

#69FABE

#54E37F

Color de error:

#EB3B26

Color oscuro:

#EEEEEE

Color claro:

#333333

