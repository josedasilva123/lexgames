import React, { useState } from "react";
import styles from "./style.module.css";

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
      alert("Preencha o nome!");
    }
  }

  return (
    <div className={styles.formBox}>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          value={formData.name}
          placeholder="Digite o nome"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <select
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          defaultValue={formData.category}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <button className="btn solid1 big" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default AddGameForm;
