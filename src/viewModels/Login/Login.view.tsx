import { TouchableOpacity, View, Text } from "react-native";
import { AuthFormHeader } from "../../shared/components/AuthFormHeader";
import { AppInput } from "../../shared/components/AppInput";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardContainer } from "../../shared/components/KeyboardContainer";

export const LoginView = () => {
  return (
    <SafeAreaView className="flex-1">
      <KeyboardContainer>
        <View className="items-center justify-center flex-1">
          <AuthFormHeader
            title="Acesse sua conta"
            subtitle="Informe seu e-mail e senha para entrar"
          />

          <AppInput />

          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text>Registro</Text>
          </TouchableOpacity>
        </View>
      </KeyboardContainer>
    </SafeAreaView>
  );
};
