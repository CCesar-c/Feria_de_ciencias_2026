import { TextInput } from "react-native";
import estilo from "../style/global";
import { useState } from "react";
/**
 * @param {import('react-native').TextInputProps & { style?: import('react-native').StyleProp<import('react-native').TextStyle> }} props
 */

export default function Input({
  style,
  onFocus,
  onBlur,
  value,
  children,
  ...rest
}) {
  const [escrevendo, setEscrevendo] = useState(false);

  return (
    <TextInput
      multiline
      onFocus={() => {
        setEscrevendo(true);
        onFocus ? onFocus() : null;
      }}
      onBlur={() => {
        setEscrevendo(false);
        onBlur ? onBlur() : null;
      }}

      style={[
        estilo.input,
        {
          borderColor: escrevendo
            ? "rgba(0, 255, 136, 1.0)"
            : "rgba(176, 181, 184, 0.3)",
        },
        style,
      ]}
      children={children}
      {...rest}
    />
  );
}
