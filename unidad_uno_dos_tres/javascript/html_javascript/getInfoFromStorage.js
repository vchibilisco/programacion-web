const getInfoFromStorage = () => {
    let listStudents = localStorage.getItem('listStudents');

    return listStudents
        ? JSON.parse(listStudents)
        : [];
}