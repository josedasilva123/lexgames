import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { coreApi } from "../../services/api";
import { StyledButton } from "../../styles/button";
import { StyledForm } from "../../styles/form";
import { StyledContainer } from "../../styles/global";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { loginSchema } from "./loginSchema";
import { StyledLoginGrid } from "./style";
import { toast } from "react-toastify";

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
      const response = await coreApi.post("user/login", data);
      setUser(response.data.user);
      setFavoriteList(response.data.user.favoriteGames);
      localStorage.setItem("@TOKEN", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledContainer>
      <StyledLoginGrid>
        <div className="formBox">
          <StyledTitle tag="h1" fontSize="one">
            Lex<span>games</span>
          </StyledTitle>
          <StyledForm onSubmit={handleSubmit(submit)}>
            <input
              type="email"
              placeholder="Seu e-mail"
              {...register("email")}
            />
            {errors.email && (
              <StyledParagraph error={true}>{errors.email.message}</StyledParagraph>
            )}
            <input
              type="password"
              placeholder="Sua senha"
              {...register("password")}
            />
            {errors.password && (
              <StyledParagraph error={true}>{errors.password.message}</StyledParagraph>
            )}
            <StyledButton buttonStyle="solid1" type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </StyledButton>
          </StyledForm>
          <Link to="/register">
            <StyledButton buttonStyle="outline">Cadastrar-se</StyledButton>
          </Link>
          
        </div>
      </StyledLoginGrid>
    </StyledContainer>
  );
};

export default Login;
