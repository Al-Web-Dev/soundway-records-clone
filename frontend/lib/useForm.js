import { useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for inputs

  const [inputs, setInputs] = useState(initial);

  function handleChange(e) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      value[0] = e.target.files;
    }
    setInputs({
      // copy existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  // return info wanted
  return {
    inputs,
    handleChange,
    resetForm,
  };
}
