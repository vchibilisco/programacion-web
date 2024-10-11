import { useState } from 'react';
import './App.css';
import AddItems from './AddItems';
import TodoList from './TodoList';

const defaultList = [
  'Leche',
  'Pan'
];

const App = () => {
  const [superList, setSuperList] = useState(defaultList);

  const handleAdd = (newInputValue) => {
    const newSuperList = [ ...superList ];
    newSuperList.push(newInputValue);
    setSuperList(newSuperList);
  };

  return (
    <>
      <AddItems
        onAddItem={ handleAdd }
      />
      
      <TodoList
        todoList={ superList }
      />
    </>
  );
};

export default App;
