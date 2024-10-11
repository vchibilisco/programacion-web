import { useState } from "react";

const AddItems = ({ onAddItem }) => {
	const [inputValue, setInputValue] = useState('');

	const handleAdd = () => {
    onAddItem(inputValue);

    setInputValue('');
	};

	return (
    <>
      <input
        value={ inputValue }
        onChange={ (evt) => setInputValue(evt.target.value) }
        placeholder='Agregar producto'
      />

      <button
        onClick={ handleAdd }
      >
        Agregar
      </button>
    </>
	);
};

export default AddItems;
