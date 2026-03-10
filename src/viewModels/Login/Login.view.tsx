import { TouchableOpacity, View, Text } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { AppInput } from "../../shared/components/AppInput";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { FC } from "react";
import { useLoginViewModel } from "./useLogin.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <SafeAreaView className="flex-1">
      <KeyboardContainer>
        <View className="items-center justify-center flex-1 p-8">
          <AuthFormHeader
            title="Acesse sua conta"
            subtitle="Informe seu e-mail e senha para entrar"
          />

          <AppInputController
            control={control}
            name="email"
            label="E-MAIL"
            placeholder="mail@exemple.com.br"
            leftIcon="mail-outline"
          />
          <AppInputController
            control={control}
            name="password"
            placeholder="Senha"
            leftIcon="lock-closed-outline"
            secureTextEntry
          />

          <TouchableOpacity onPress={onSubmit}>
            <Text>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text>Registro</Text>
          </TouchableOpacity>
        </View>
      </KeyboardContainer>
    </SafeAreaView>
  );
};
