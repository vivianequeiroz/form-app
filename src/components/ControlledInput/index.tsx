import React from "react";

import { Control, Controller, FieldError } from "react-hook-form";
import { Input, InputProps } from "../Input";
import { Error } from "./styles";

type Props = InputProps & {
  control: Control<any>;
  name: string;
  error?: FieldError;
};
//control content of each input without the usage of state
//it should:
// 1. has a unique name
// 2. has a control
// 3. has a component to render
export function ControlledInput({ control, name, error, ...rest }: Props) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value} {...rest} />
        )}
      />
      {error && <Error>{error.message}</Error>}
    </>
  );
}
