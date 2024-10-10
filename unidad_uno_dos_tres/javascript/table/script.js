let students = [];

const addStudent = (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;

    students.push({ name, lastName });

    renderTable();

    document.getElementById('name').value = null;
    document.getElementById('lastName').value = null;
};

const renderTable = () => {
    const tbody = document.getElementById('student_table');
    tbody.innerHTML = '';

    students.forEach((student) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${student.name}</td><td>${student.lastName}</td>`;

        tbody.appendChild(row);
    });
};
