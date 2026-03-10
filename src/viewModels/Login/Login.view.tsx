import { TouchableOpacity, View, Text } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { AppInput } from "../../shared/components/AppInput";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { FC } from "react";
import { useLoginViewModel } from "./useLogin.viewModel";
import { AppInputController } from "../../shared/components/AppInputController";
import { AppButton } from "../../shared/components/AppButton";

export const LoginView: FC<ReturnType<typeof useLoginViewModel>> = ({
  control,
  onSubmit,
}) => {
  return (
    <SafeAreaView className="flex-1">
      <KeyboardContainer>
        <View className="items-center justify-center flex-1 p-8">
          <View className="flex-1 w-full items-center justify-center">
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
            <AppButton
              rightIcon="arrow-forward"
              onPress={onSubmit}
              className="mt-6"
            >
              Login
            </AppButton>
          </View>

          <View className="flex-2 pb-16">
            <Text className="text-base mb-6 text-gray-300">
              Ainda não tem uma conta?
            </Text>
            <AppButton
              rightIcon="arrow-forward"
              variant="outlined"
              onPress={() => router.push("/register")}
            >
              Registro
            </AppButton>
          </View>
        </View>
      </KeyboardContainer>
    </SafeAreaView>
  );
};
