import { FC, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";
import { AppInputController } from "../../shared/components/AppInputController";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
}) => {
  const [email, setEmail] = useState("");
  return (
    <View className="flex-1 items-center justify-center">
      <AppInputController
        control={control}
        label="E-MAIL"
        leftIcon="mail-outline"
        name="email"
      />
      <TouchableOpacity onPress={onSubmit}>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};
