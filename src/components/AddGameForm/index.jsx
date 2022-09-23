import React, { useState } from "react";

const AddGameForm = ({ categories, addGame }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: categories[0],
  });

  function onSubmit(e) {
    e.preventDefault();
    if (formData.name.length) {
      addGame(formData);
      setFormData({
        name: "",
        category: categories[0],
      });
    } else {
        alert('Preencha o nome!')
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />

      <select
        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
        defaultValue={formData.category}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button type="submit">Enviar</button>
    </form>
  );
};

export default AddGameForm;
