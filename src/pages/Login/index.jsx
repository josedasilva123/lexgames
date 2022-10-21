import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { StyledButton } from "../../styles/button";
import { StyledForm } from "../../styles/form";
import { StyledContainer } from "../../styles/global";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { loginSchema } from "./loginSchema";
import { StyledLoginGrid } from "./style";
import { UserContext } from "../../contexts/UserContext";

const Login = () => {
  const { userLogin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const submit = (data) => {
    userLogin(data, setLoading, () => {
      reset();
    })
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
