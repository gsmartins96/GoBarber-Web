import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string().email('E-mail invalido').required('E-mail obrigatório'),
  password: Yup.string()
    .min(6, 'Minimo de 6 caracteres')
    .required('Senha obrigatória!'),
});

export default function SignUp() {
  function handleSubmit(data) {}

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Nome completo" />
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
