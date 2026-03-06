import type { ReactNode } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type DismissKeyboardViewProps = {
  children: ReactNode;
};

export const KeyboardContainer = ({ children }: DismissKeyboardViewProps) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid
      enableAutomaticScroll
      extraScrollHeight={120}
    >
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);
