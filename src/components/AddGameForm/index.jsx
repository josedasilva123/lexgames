import React, { useState } from "react";
import { StyledButton } from "../../styles/button";
import { StyledForm } from "../../styles/form";
import { StyledFormBox } from "./style";

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
    <StyledFormBox>
      <StyledForm onSubmit={onSubmit}>
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

        <StyledButton type="submit" buttonStyle="solid1" buttonSize="big">
          Enviar
        </StyledButton>
      </StyledForm>
    </StyledFormBox>
  );
};

export default AddGameForm;
