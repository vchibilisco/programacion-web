// Variables
let currentPage = 1;
let itemPerPage = 3;

// Methods
const getListStudentsFromStorage = () => {
    let listStudents = localStorage.getItem('listStudents');
    if (listStudents === null) {
        return [];
    };

    return JSON.parse(listStudents);
};

const addStudent = (event) => {
    event.preventDefault();

    const nameElement = document.getElementById('name');
    const lastNameElement = document.getElementById('lastName');

    let listStudents = localStorage.getItem('listStudents');
    if (listStudents === null) {
        listStudents = [];
    } else {
        listStudents = JSON.parse(listStudents);
    };

    listStudents.push({
        id: Math.floor(Math.random() * 90000) + 10000,
        name: nameElement.value,
        lastName: lastNameElement.value
    });

    localStorage.setItem('listStudents', JSON.stringify(listStudents));

    window.location.href = 'student.html'
};

const renderFullTable = () => {
    const listStudents = getListStudentsFromStorage();

    renderTbody(listStudents);
};

const renderTbody = (items) => {
    let tbodyElement = document.getElementsByTagName('tbody')[0];
    
    if (!tbodyElement) {
        return;
    }

    tbodyElement.innerHTML = '';

    const itemsToRender = getItemsPaginated(items);

    itemsToRender.forEach(student => {
        let trElement = document.createElement('tr');
        trElement.innerHTML = `<td>${student.id}</td><td>${student.name}</td><td>${student.lastName}</td>`;

        tbodyElement.appendChild(trElement);
    });

    renderPaginationControl();
}

const getItemsPaginated = (items) => {
    const startPosition = (currentPage - 1) * itemPerPage;
    const endPosition = startPosition + itemPerPage;

    return items.slice(startPosition, endPosition);
};

const renderPaginationControl = () => {
    const listStudents = getListStudentsFromStorage();
    const totalPages = Math.ceil(listStudents.length / itemPerPage);
    const paginationControlElement = document.getElementById('paginationControl');

    paginationControlElement.innerHTML = '';

    for (let index = 1; index <= totalPages; index++) {
        const buttonElement = document.createElement('button');
        buttonElement.textContent = index;
        buttonElement.className = (index === currentPage) ? 'active' : '';
        buttonElement.addEventListener('click', () => {
            currentPage = index;
            if (document.getElementById('searchByLastName')?.value) {
                searchByLastName();
            } else {
                renderFullTable();
            }
        });
        paginationControlElement.appendChild(buttonElement);
    }
};

const onChangeItemPerPage = (event) => {
    currentPage = 1;
    itemPerPage = Number(event.target.value);
    if (document.getElementById('searchByLastName')?.value) {
        searchByLastName();
    } else {
        renderFullTable();
    }
};

const searchByLastName = () => {
    const searchCriteria = document.getElementById('searchByLastName').value;

    const listStudents = getListStudentsFromStorage();

    const itemsFiltered = listStudents.filter(student => {
        return student.lastName.toLowerCase().includes(searchCriteria.toLowerCase());
    });

    renderTbody(itemsFiltered);
};

renderFullTable();