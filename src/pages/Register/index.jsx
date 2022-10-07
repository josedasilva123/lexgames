import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { StyledButton } from "../../styles/button";
import { StyledForm } from "../../styles/form";
import { StyledContainer } from "../../styles/global";
import { yupResolver } from '@hookform/resolvers/yup';
import { registerSchema } from "./registerSchema";
import { StyledParagraph } from "../../styles/typography";
import { coreApi } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const { register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(registerSchema)
  }) 

  const navigate = useNavigate();
  
  const submit = async (data) => {
    try {
        setLoading(true);
        const response = await coreApi.post('user', data);
        setAlert({
            type: "sucess",
            message: response.data.message
        });
        setTimeout(() => {
            setAlert(null);
            navigate('/');
        }, 3000);
    } catch (error) {
        console.log(error);
        setAlert({
            type: "error",
            message: error.response.data.error,
        });
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    } finally {
        setLoading(false);
    }
  }

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <input type="text" placeholder="Digite seu nome" {...register("name")} />
        {errors.name && <StyledParagraph>{errors.name.message}</StyledParagraph>}

        <input type="email" placeholder="Digite seu e-mail" {...register("email")}  />
        {errors.email && <StyledParagraph>{errors.email.message}</StyledParagraph>}

        <input type="password" placeholder="Crie uma senha" {...register("password")}  />
        {errors.password && <StyledParagraph>{errors.password.message}</StyledParagraph>}

        <StyledButton buttonStyle="solid1" type="submit" disabled={loading}>
          {loading ? 'Cadastrando...' : 'Cadastre-se'}
        </StyledButton>
        {alert && <StyledParagraph>{alert.message}</StyledParagraph>}
      </StyledForm>
    </StyledContainer>
  );
};

export default Register;
