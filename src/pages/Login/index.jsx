import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { coreApi } from "../../services/api";
import { StyledButton } from "../../styles/button";
import { StyledForm } from "../../styles/form";
import { StyledContainer } from "../../styles/global";
import { StyledParagraph } from "../../styles/typography";
import { loginSchema } from "./loginSchema";

const Login = ({ setUser, setFavoriteList }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const navigate = useNavigate();

  const submit = async (data) => {   
    try {
        setLoading(true);
        const response = await coreApi.post('user/login', data);
        setUser(response.data.user);
        setFavoriteList(response.data.user.favoriteGames);
        localStorage.setItem('@TOKEN', response.data.token);
        navigate('/dashboard');
    } catch (error) {
        console.log(error)
    } finally {
        setLoading(false);
    }
  }

  return (
    <StyledContainer>
      <StyledForm onSubmit={handleSubmit(submit)}>
        <input type="email" placeholder="Seu e-mail" {...register("email")} />
        {errors.email && (
          <StyledParagraph>{errors.email.message}</StyledParagraph>
        )}
        <input
          type="password"
          placeholder="Sua senha"
          {...register("password")}
        />
        {errors.password && (
          <StyledParagraph>{errors.password.message}</StyledParagraph>
        )}
        <StyledButton buttonStyle="solid1" type="submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </StyledButton>
      </StyledForm>
    </StyledContainer>
  );
};

export default Login;
