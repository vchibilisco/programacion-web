const TodoList = ({ todoList = [] }) => {
  return (
    <ul>
      {
        todoList.map(item => <li key={ item }> { item } </li>)
      }
    </ul>
  );
};

export default TodoList;
