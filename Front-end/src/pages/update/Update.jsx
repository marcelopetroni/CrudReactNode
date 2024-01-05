import React from 'react';
import '../update/Update.sass';
import { useState } from 'react';

const Update = () => {
  const [values, setValues] = useState({});// as chaves para representar um objeto

  const handleValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
  };
  const handleSubmit = (e) => {
    // aqui enviar pro backend para apagar
    e.preventDefault()
    console.log(values);
    setValues({
      code: ''
    });
  };
return (
  <div className="update-container">
    <h3 className='update-title'>Products Menu</h3>
    <form onSubmit={handleSubmit}>
      <div className='update-field'>
        <label className="field-description">Insira o código do produto:</label>
          <input className = "field" type="text"
            required
            name='code'
            onChange={handleValues}
            value={values.code}
            />
      </div>

      <button type="submit" // ao utilizar type ="submit" no botão, o formulário é enviado com enter
            className="button" 
            onClick={handleSubmit}> 
          <span className="lable">Enviar</span>
      </button>
    </form>
  </div>
)
}

export default Update