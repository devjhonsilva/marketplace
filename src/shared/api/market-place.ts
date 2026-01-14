import axios, { AxiosInstance } from "axios";
import { Platform } from "react-native";

const getBaseUrl = () => {
  return Platform.select({
    ios: "http://localhost:3000",
    android: "http://192.168.10.12:3001",
  });

  // se for utilizar o emulador de android, utilizar ip "http://10.0.2.2:3001"
  // se utilizar dispositivo fisico, utilizar "http://192.168.10.13:3001" verificar o ip do computador
};

const baseURL = getBaseUrl();

export class MarketPlaceApiClient {
  private instance: AxiosInstance;
  private isRefreshing = false;

  constructor() {
    this.instance = axios.create({
      baseURL,
    });
  }

  getInstance() {
    return this.instance;
  }
}

export const marketPlaceApiClient = new MarketPlaceApiClient().getInstance();
