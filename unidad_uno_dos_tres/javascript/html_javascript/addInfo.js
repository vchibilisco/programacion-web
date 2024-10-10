const addInfo = (event) => {
    event.preventDefault();

    const student = {
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value
    };

    let listStudents = getInfoFromStorage();
    
    listStudents.push(student);

    localStorage.setItem('listStudents', JSON.stringify(listStudents));

    document.getElementById('name').value = null;
    document.getElementById('lastName').value = null;

    window.location.href = 'index.html';
};
