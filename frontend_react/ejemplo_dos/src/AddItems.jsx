import { useState } from "react";
import { func, string } from 'prop-types';

const AddItems = ({ onAddItem, inputPlaceholder }) => {
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
        placeholder={ inputPlaceholder }
      />

      <button
        onClick={ handleAdd }
      >
        Agregar
      </button>
    </>
	);
};

AddItems.propTypes = {
  onAddItem: func.isRequired,
  inputPlaceholder: string
};

AddItems.defaultProps = {
  inputPlaceholder: 'Agregar un valor'
};

export default AddItems;
