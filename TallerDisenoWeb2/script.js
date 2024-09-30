// script.js

document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employeeForm');
    const employeeTable = document.getElementById('employeeTable').getElementsByTagName('tbody')[0];

    employeeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Obtener datos del formulario
        const name = document.getElementById('name').value.trim();
        const position = document.getElementById('position').value.trim();
        const department = document.getElementById('department').value.trim();

        if (name && position && department) {
            // Crear una nueva fila en la tabla
            const newRow = employeeTable.insertRow();

            newRow.insertCell().textContent = name;
            newRow.insertCell().textContent = position;
            newRow.insertCell().textContent = department;

            // Crear botón de eliminar
            const deleteCell = newRow.insertCell();
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Eliminar';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', () => {
                employeeTable.deleteRow(newRow.rowIndex - 1);
            });
            deleteCell.appendChild(deleteBtn);

            // Limpiar el formulario
            employeeForm.reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
});
