import { FC, useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useRegisterViewModel } from "./useRegister.viewModel";
import { AppInput } from "../../shared/components/AppInput";
import { AppInputController } from "../../shared/components/AppInputController";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { router } from "expo-router";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "../../shared/components/AppButton";

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
            paddingBottom: 40,
            paddingHorizontal: 40,
            flex: 1,
          }}
        >
          <View className="flex-1">
            <AuthFormHeader
              title="Crie sua conta"
              subtitle="Informe os seus dados para acesso"
            />
            <AppInputController
              control={control}
              name="name"
              label="NOME"
              placeholder="Nome completo"
              leftIcon="person-outline"
            />
            <AppInputController
              control={control}
              name="phone"
              label="TELEFONE"
              placeholder="(00) 00000-0000"
              leftIcon="call-outline"
            />

            <Text className="text-base mt-6 font-bold text-gray-500">
              Acesso
            </Text>

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
              label="SENHA"
              placeholder="Sua senha"
              leftIcon="lock-closed-outline"
              secureTextEntry
            />

            <AppInputController
              control={control}
              name="confirmPassword"
              label="CONFIRMAR SENHA"
              placeholder="Confirme a senha"
              leftIcon="lock-closed-outline"
              secureTextEntry
            />

            <AppButton className="mt-6" onPress={onSubmit}>
              Registrar
            </AppButton>
          </View>

          <View className="flex-2 pb-16 mt-16">
            <Text className="text-base mb-6 text-gray-300">
              Já tem uma conta?
            </Text>
            <AppButton
              rightIcon="arrow-forward"
              variant="outlined"
              onPress={() => router.push("/login")}
            >
              Login
            </AppButton>
          </View>
        </ScrollView>
      </KeyboardContainer>
    </SafeAreaView>
  );
};
