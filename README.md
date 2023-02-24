# ANTEPROYECTO FINAL 2º CURSO DE DAW

### Josep Maria Castell Colom y Rafael Ivorra Llodrá.

## Introducción 

En este proyecto se pretende la creación de un portal web dirigido a músicos, en el que se propone dar solución a un problema detectado. Es evidente que, en el contexto de nuestra sociedad, el ritmo de tareas siempre es acelerado. Así, algo aparentemente tan sencillo como organizar ensayos entre músicos puede llegar a ser bastante complicado. La aplicación que se propone para este proyecto tratará de ofrecer una herramienta para coordinar los horarios en los que los diferentes componentes de un grupo puedan ensayar juntos.

## Fases del desarrollo de software

Las fases a recorrer en el proceso de desarrollo de la aplicación seguirán un estándar habitual, constando de:

    1 Análisis de sistemas y requisitos.

En esta fase serán analizados y definidos los requisitos funcionales y no funcionales que procedan respecto a la aplicación a desarrollar.

    2 Diseño.

Una vez completada la fase anterior, y teniendo bien presentes los requisitos necesarios, se pasará a realizar el diseño de la aplicación. En esta fase se completarán los diferentes diagramas que servirán de guía para el desarrollo de la aplicación en sí.

    3 Implementación.

En esta fase pasaremos a implementar la aplicación utilizando las tecnologías definidas en las fases anteriores.

    4 Pruebas.

La fase de pruebas será crucial para comprobar la correcta implementación de todo el stack de la aplicación.

    5 Despliegue en producción y mantenimiento.

Una vez que la aplicación haya sido completada y convenientemente testeada, se pasará a desplegarla en un entorno de producción y a realizar el mantenimiento de la misma.

### Análisis

El primer punto del ciclo de vida del desarrollo del software es el análisis.

En este punto se procede a la identificación de las partes interesadas del proyecto y los requisitos que debe cumplir la aplicación; ya sean funcionales, no funcionales o de sistema.

También es conveniente realizar diferentes diagramas como el de casos de uso con sus respectivos documentos detallados de requisitos para cada caso de uso.
También se realizan una serie de pruebas de aceptación con el cliente para asegurarse de focalizar el objetivo requerido.

Otra parte importante de la fase de análisis es la selección de las tecnologías que van a ser usadas para cumplir con los requisitos: lenguajes a utilizar, servidores, Sistema Gestor de Bases de Datos(SGBD), IDEs y otras herramientas necesarias para la implementación de la aplicación.

Con el objetivo de cumplir con todos los requisitos, es conveniente realizar una tabla/matriz de tecnologías usadas por requisito funcional.

Otro punto de la fase de análisis es el primer modelado de lo que será la base de datos, creando un modelo entidad-relación que será de utilidad a la hora de elegir el SGBD.

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

	- El sistema para llevar un control de versiones será a través de la herramienta `git`, con los repositorios en la nube de GitHub.

- Otros

	- El trabajo en local será realizado en sistemas operativos Ubuntu, versión 22.04. El editor de texto principal será Visual Studio Code/ VS Codium.



***
Funcionalidad básica
Creación de cuentas de músicos->parámetros tipo->intrumento, estilo/s, localidad, nivel, rol
Creación de un grupo/comunidad->gente que ensaya junta->estilo musical, centro de operaciones/área
	->definir horarios, encontrar huecos/disponibilidad
