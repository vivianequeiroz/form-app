import React from "react";
import { Button } from "../Button";
import { ControlledInput } from "../ControlledInput";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

const schema = yup.object({
  name: yup.string().required("Informe o seu nome"),
  email: yup.string().email("E-mail inválido").required("Informe o seu e-mail"),
  password: yup
    .string()
    .min(6, "Mínimo de 6 caracteres")
    .required("Informe uma senha"),
  password_confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
});

export function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema), //form will be validaded according to this schema
  });

  function handleUserRegister(data: FormData) {
    console.log(data);
    //it can be send at an api call
  }

  return (
    <Container>
      <ControlledInput
        control={control}
        icon="user"
        name="name"
        placeholder="Nome"
        error={errors.name}
      />
      <ControlledInput
        name="email"
        control={control}
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        error={errors.email}
      />
      <ControlledInput
        control={control}
        name="password"
        icon="lock"
        placeholder="Senha"
        secureTextEntry
        error={errors.password}
      />
      <ControlledInput
        control={control}
        name="passwor_confirm"
        icon="lock"
        placeholder="Confirme a senha"
        secureTextEntry
        error={errors.password_confirm}
      />

      <Button title="Cadastrar" onPress={handleSubmit(handleUserRegister)} />
    </Container>
  );
}
