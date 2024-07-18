function addTask() {
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    if (!title || !description) {
        alert("Please fill out this field.");
        return;
    }

    const taskList = document.getElementById('task-list');

    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = title;
    row.appendChild(titleCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = description;
    row.appendChild(descriptionCell);

    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.onclick = () => taskList.removeChild(row);
    deleteCell.appendChild(deleteButton);
    row.appendChild(deleteCell);

    taskList.appendChild(row);

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
}
