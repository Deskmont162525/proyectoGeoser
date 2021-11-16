# proyectoGeoser
pruebas para empresa
La prueba consiste realizar una app web que emule el envío de emails. Además, la app debe
realizar el proceso de autenticación. El desarrollo puede ser realizado ya sea con Angular > 6,
ReactJS o HTLM/CSS/JS Plano, quedará a elección del candidato.

Procesos.
Una vez se haga login, se debe realizar la petición para obtener todos los mensajes. Si el login es
incorrecto, debe notificar al usuario y quedarse en la pantalla de login.
La app debe contar con un menú con las siguientes opciones:
- Bandeja de entrada.
- Mensajes enviados.
- Eliminados.
- Nuevo
Cuando se desee enviar un email los datos (obligatorios) son:
- Asunto.
- Destinatario.
- Contenido.
Se debe realizar validación del formulario de envío.
- Validar y notificar en caso de campos faltantes.
- Validar formato de correo de destinatario.
- Validar el asunto con máximo 50 caracteres.
En la lista de los emails debe haber en la parte superior una búsqueda que filtrará -solo por el
asunto de los emails-.
La lista se podrá ordenar solo a través de la fecha de enviado.
Puede seleccionar simultáneamente varios mensajes y luego presionar un botón de borrado,
después de esto, podrán verse en la pestaña de “eliminados”.
Opcionales:
- Implementar un select (al lado de la opción de búsqueda) para cambiar el criterio de la
búsqueda: por asunto, contenido del mensaje, destinatario (en enviados).
- Puede marcar mensajes de la bandeja de entrada como favoritos, los mensajes marcados
como favoritos se muestran primero.

tiene los requeridos, los requeridos adicionales y le agregue paginador, página de precarga, conexión
con base de datos postgres (facilidad de migrar),  envío de correos en tiempo real y sacar de favoritos
