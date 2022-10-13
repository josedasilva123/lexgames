import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { StyledButton, StyledIcon } from "../../styles/button";
import { StyledForm } from "../../styles/form";
import { StyledContainer } from "../../styles/global";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import { StyledRegisterGrid } from "./style";
import { UserContext } from "../../contexts/UserContext";

const Register = () => {
  /* import */
  const { userRegister } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const submit = async (data) => {
    userRegister(data, setLoading);
  };

  return (
    <StyledContainer>
      <StyledRegisterGrid>
        <div className="formBox">
          <Link to="/">
            <StyledIcon>
              <MdArrowBack size={21} /> Retornar
            </StyledIcon>
          </Link>

          <StyledForm onSubmit={handleSubmit(submit)}>
            <StyledTitle tag="h2" fontSize="two">
              Cadastre-se
            </StyledTitle>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            {errors.name && (
              <StyledParagraph error={true}>{errors.name.message}</StyledParagraph>
            )}

            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email")}
            />
            {errors.email && (
              <StyledParagraph error={true}>{errors.email.message}</StyledParagraph>
            )}

            <input
              type="password"
              placeholder="Crie uma senha"
              {...register("password")}
            />
            {errors.password && (
              <StyledParagraph error={true}>{errors.password.message}</StyledParagraph>
            )}

            <StyledButton buttonStyle="solid1" type="submit" disabled={loading}>
              {loading ? "Cadastrando..." : "Cadastre-se"}
            </StyledButton>
          </StyledForm>
        </div>
      </StyledRegisterGrid>
    </StyledContainer>
  );
};

export default Register;
