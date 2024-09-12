const showStudents = () => {
    const tbodyElement = document.getElementsByTagName('tbody')[0];

    if (!tbodyElement) {
        return;
    }

    tbodyElement.innerHTML = '';

    let listStudents = getInfoFromStorage();

    listStudents.forEach((student) => {
        const trElement = document.createElement('tr');
        trElement.innerHTML = `<td>${student.name}</td><td>${student.lastName}</td>`;

        tbodyElement.appendChild(trElement);
    });
};

showStudents(); 