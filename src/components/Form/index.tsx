import React from "react";
import { Button } from "../Button";
import { ControlledInput } from "../ControlledInput";
import { Container } from "./styles";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
};

export function Form() {
  const { control, handleSubmit } = useForm<FormData>();

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
      />
      <ControlledInput
        name="email"
        control={control}
        icon="mail"
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <ControlledInput
        control={control}
        name="password"
        icon="lock"
        placeholder="Senha"
        secureTextEntry
      />
      <ControlledInput
        control={control}
        name="passwor_confirm"
        icon="lock"
        placeholder="Confirme a senha"
        secureTextEntry
      />

      <Button title="Cadastrar" onPress={handleSubmit(handleUserRegister)} />
    </Container>
  );
}
