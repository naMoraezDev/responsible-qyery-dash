import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

type InputProps = {
  name: string;
  label?: string;
  type: string;
} & ChakraInputProps;

export function Input({ name, label, type, ...props }: InputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor="password">Senha</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        type={type}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: "gray.900",
        }}
        size="lg"
        {...props}
      />
    </FormControl>
  );
}
