import { Redirect } from "expo-router";

export default function App() {
  const userData = {
    token: "alksdfasdfhiakbjfd",
    name: "User Test",
  };

  if (!userData) {
    return <Redirect href={"/(private)/home"} />;
  }

  return <Redirect href={"/login"} />;
}
