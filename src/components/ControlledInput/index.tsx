import React from "react";

import { Control, Controller } from "react-hook-form";
import { Input, InputProps } from "../Input";

type Props = InputProps & {
  control: Control<any>;
  name: string;
};
//control content of each input without the usage of state
//it should:
// 1. has a unique name
// 2. has a control
// 3. has a component to render
export function ControlledInput({ control, name, ...rest }: Props) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Input onChangeText={onChange} value={value} {...rest} />
      )}
    />
  );
}
