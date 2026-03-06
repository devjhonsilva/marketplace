import { FC, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { SafeAreaView } from "react-native-safe-area-context";

export const RegisterView: FC<ReturnType<typeof useRegisterViewModel>> = ({
  onSubmit,
  control,
}) => {
  const [email, setEmail] = useState("");
  return (
    <SafeAreaView className="flex-1">
      <KeyboardContainer>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 40,
            flexGrow: 1,
          }}
        >
          <AuthFormHeader
            title="Crie sua conta"
            subtitle="Informe os seus dados para acesso"
          />
          <AppInputController
            control={control}
            label="NOME"
            leftIcon="person-outline"
            name="name"
          />
          <AppInputController
            control={control}
            label="E-MAIL"
            leftIcon="mail-outline"
            name="email"
          />
          <AppInputController
            control={control}
            label="TELEFONE"
            leftIcon="call-outline"
            name="phone"
          />
          <AppInputController
            control={control}
            label="SENHA"
            leftIcon="lock-closed-outline"
            name="password"
            secureTextEntry
          />

          <AppInputController
            control={control}
            label="CONFIRMAR SENHA"
            leftIcon="lock-closed-outline"
            name="confirmPassword"
            secureTextEntry
          />
          <TouchableOpacity onPress={onSubmit}>
            <Text>Registrar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/login")}>
            <Text>Login</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardContainer>
    </SafeAreaView>
  );
};
