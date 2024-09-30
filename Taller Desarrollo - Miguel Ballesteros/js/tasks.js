//                                                  Código del profesor en clase 

/*
document.addEventListener('DOMContentLoaded', () => {
    const tasksForm = document.getElementById('tasksForm');
    const tasksTable = document.getElementById('tasksTable').getElementsByTagName('tbody')[0];

    tasksForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtener datos del formulario
        const name = document.getElementById('name').value.trim();
        const date = document.getElementById('date').value.trim();
        const description = document.getElementById('description').value.trim();

        if (name && date && description) {
            // Crear una nueva fila en la tabla
            const newRow = tasksTable.insertRow();

            newRow.insertCell().textContent = name;
            newRow.insertCell().textContent = date;
            newRow.insertCell().textContent = description;

            // Crear botón de eliminar
            const deleteCell = newRow.insertCell();
            const deleteBtn = document.createElement('button');

            deleteBtn.textContent = 'Eliminar';
            deleteBtn.className = 'delete-btn';
            
            deleteBtn.addEventListener('click', () => {
                tasksTable.deleteRow(newRow.rowIndex - 1);
            });
            deleteCell.appendChild(deleteBtn);

            // Limpiar el formulario
            tasksForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
*/

document.addEventListener('DOMContentLoaded', () => {
    const tasksForm = document.getElementById('tasksForm');
    const tasksTable = document.getElementById('tasksTable').getElementsByTagName('tbody')[0];

    // Cargar tareas desde localStorage al cargar la página desde el codigo de abajo
    const loadTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.forEach(task => {
            addTaskToTable(task.name, task.date, task.description);
        });
    };

    // Función para agregar tarea a la tabla
    const addTaskToTable = (name, date, description) => {
        //se agrega la linea de la tarea en sí
        const newRow = tasksTable.insertRow();

        // Creamos un div que encierra todos los datos de la tarea como tal
        const taskBlock = document.createElement('div');
         // definimos una clase para luego editar elementos en css
        taskBlock.className = 'task-block';
        // puesto aqui debido a errores de compatiblidiad
        taskBlock.style.position = 'relative'; 

        // Crea el SVG de la flecha como span
        const completeSvg = document.createElement('span');
        completeSvg.className = 'complete-svg'; 
        //con el inner accedo al HTML y lo modifico
        completeSvg.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 507.506 507.506" style="enable-background:new 0 0 507.506 507.506;" xml:space="preserve" width="18" height="18" fill="#6e91fc">
                <g>
                    <path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z"/>
                </g>
            </svg>
        `;

        //le doy la accion la tocar de tachar texto
        completeSvg.onclick = () => {
            taskBlock.style.textDecoration = 'line-through'; 
        };

        const titleContainer = document.createElement('div');
        titleContainer.style.display = 'flex'; 
        titleContainer.style.alignItems = 'center';

        // Agrega el SVG al contenedor de titulo para luego hacer display: block;
        titleContainer.appendChild(completeSvg); 

        // Agregamoas el título de la tarea
        const taskTitle = document.createElement('div');
        taskTitle.className = 'task-title';
        taskTitle.textContent = name;

        // Agrega el título al contenedor donde estaba el SVG
        titleContainer.appendChild(taskTitle);

        // Agregar el contenedor al bloque de la linea de la tarea
        taskBlock.appendChild(titleContainer); 

        // Creamos contenedor para la descripción y la fecha
        const descriptionContainer = document.createElement('div');
        descriptionContainer.className = 'description-container';

        // Agregar la descripción y la fecha
        const taskDescription = document.createElement('div');
        taskDescription.className = 'task-description';
        //lo agrego seguido de la ,
        taskDescription.textContent = `${description}, ${date}`;

        // Agregar descripción al contenedor de descripción
        descriptionContainer.appendChild(taskDescription);

        // Agregar todos los elementos al bloque de tarea inicial
        taskBlock.appendChild(descriptionContainer); 

        // Crear SVG para el botón de eliminar
        const deleteSvg = document.createElement('span');
        deleteSvg.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 512.021 512.021" style="enable-background:new 0 0 512.021 512.021;" xml:space="preserve" width="13" height="13" fill="white">
                <g>
                    <path class="delete-path" d="M301.258,256.01L502.645,54.645c12.501-12.501,12.501-32.769,0-45.269c-12.501-12.501-32.769-12.501-45.269,0l0,0   L256.01,210.762L54.645,9.376c-12.501-12.501-32.769-12.501-45.269,0s-12.501,32.769,0,45.269L210.762,256.01L9.376,457.376   c-12.501,12.501-12.501,32.769,0,45.269s32.769,12.501,45.269,0L256.01,301.258l201.365,201.387   c12.501,12.501,32.769,12.501,45.269,0c12.501-12.501,12.501-32.769,0-45.269L301.258,256.01z"/>
                </g>
            </svg>
        `;

        // Estilos para SVG de eliminar
        deleteSvg.style.position = 'absolute';
        deleteSvg.style.top = '10px'; 
        deleteSvg.style.right = '10px'; 
        deleteSvg.style.cursor = 'pointer';

        // Agregamos la transiciones de color y tamaño al SVG de eliminar de saltar y cambiar a rojo, ver la pagina!
        deleteSvg.style.transition = 'fill 0.3s, transform 0.5s';
        deleteSvg.onmouseover = () => {
            const path = deleteSvg.querySelector('.delete-path');
            path.style.fill = '#6e91fc'; 
            deleteSvg.style.transform = 'scale(1.1)';
        };

        deleteSvg.onmouseout = () => {
            const path = deleteSvg.querySelector('.delete-path');
            path.style.fill = 'white'; 
            deleteSvg.style.transform = 'scale(1)'; 
        };

        // Función para eliminar la tarea junto con la de la local storage
        deleteSvg.onclick = () => {
            tasksTable.deleteRow(newRow.rowIndex - 1);
            removeTaskFromStorage(name);
        };

        // Agregar el SVG de eliminar al bloque de tarea inicial
        taskBlock.appendChild(deleteSvg);

        // Crear celda para el bloque de tarea
        const taskCell = newRow.insertCell();
        taskCell.appendChild(taskBlock);
    };

    // Funcion para guardar tareas en localStorage en formato JSON o (cadena de texto)
    const saveTaskToStorage = (name, date, description) => {
        //json.parse pasa de cadena de texto de ese local storage a array
        //si no hay nada (|| []) en task de la local storage queda vacio el array 
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

        // pasa los elementos mencionados al array
        tasks.push({ name, date, description });
        // y ya este tal tasks se guarda en la local storage pero como array
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Función para eliminar tareas del localStorage
    const removeTaskFromStorage = (name) => {
        let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        // filtra los que no coinciden con el nombre de la tarea a eliminar y los guarda en tasks, asi dejando afuera el que se quiere eliminar
        tasks = tasks.filter(task => task.name !== name);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Evento de envío del formulario
    tasksForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Primero obtenemos los datos del formulario sin espacios inecesarios
        const name = document.getElementById('name').value.trim();
        const date = document.getElementById('date').value.trim();
        const description = document.getElementById('description').value.trim();

        if (name && date && description) {
            // Agregamos tarea a la tabla
            addTaskToTable(name, date, description);
            // Guardar tarea en localStorage con la funcion explicada arriba
            saveTaskToStorage(name, date, description);
            // Limpia el formulario para volver a colocar los datos
            tasksForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });

    //Asi Carga tareas al iniciar pa pagina
    loadTasks(); 
});
