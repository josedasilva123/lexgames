import * as yup from "yup";

export const loginSchema = yup.object().shape({
    email: yup.string().required('O e-mail é obrigatório'),
    password: yup.string().required('A senha é obrigatória.')
})