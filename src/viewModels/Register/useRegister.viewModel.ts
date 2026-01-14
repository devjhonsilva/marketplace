import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RegisterFormData, registerScheme } from "./register.scheme";
import { useRegisterMutation } from "../../shared/queries/auth/use-register.mutation";
import { useUserStore } from "../../shared/store/user-store";

export const useRegisterViewModel = () => {
  const userRegisterMutation = useRegisterMutation();
  const { setSession } = useUserStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerScheme),
    defaultValues: {
      name: "jonatan",
      email: "teste@email.com",
      password: "123123",
      confirmPassword: "123123",
      phone: "12345678912",
    },
  });

  const onSubmit = handleSubmit(async (userData) => {
    const { confirmPassword, ...registerData } = userData;
    const mutationResponse = await userRegisterMutation.mutateAsync(
      registerData
    );
    setSession({
      refreshToken: mutationResponse.refreshToken,
      token: mutationResponse.token,
      userData: mutationResponse.user,
    });
  });

  return { control, onSubmit, errors };
};
