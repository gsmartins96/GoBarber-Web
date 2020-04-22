import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { signUpRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  nome: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('E-mail invalido').required('E-mail obrigatório'),
  password: Yup.string()
    .min(6, 'Minimo de 6 caracteres')
    .required('Senha obrigatória!'),
});

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ nome, email, password }) {
    console.tron.log('handleSubmit', nome, email, password);
    dispatch(signUpRequest(nome, email, password));
  }

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="nome" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">Criar Conta</button>
        <Link to="/">Já tenho conta</Link>
      </Form>
    </>
  );
}
