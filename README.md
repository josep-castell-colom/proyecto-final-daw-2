# ANTEPROYECTO FINAL 2º CURSO DE DAW

### Josep Maria Castell Colom y Rafael Ivorra Llodrá.

1. Introducción 

En este proyecto se pretende la creación de un portal web dirigido a músicos, en el que se propone dar solución a un problema detectado. Es evidente que, en el contexto de nuestra sociedad, el ritmo de tareas siempre es acelerado. Así, algo aparentemente tan sencillo como organizar ensayos entre músicos puede llegar a ser bastante complicado. La aplicación que se propone para este proyecto tratará de ofrecer una herramienta para coordinar los horarios en los que los diferentes componentes de un grupo puedan ensayar juntos.

### Tecnologías

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



***
Funcionalidad básica
Creación de cuentas de músicos->parámetros tipo->intrumento, estilo/s, localidad, nivel, rol
Creación de un grupo/comunidad->gente que ensaya junta->estilo musical, centro de operaciones/área
	->definir horarios, encontrar huecos/disponibilidad
