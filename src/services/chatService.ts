import api from "./api";
import * as SecureStore from "expo-secure-store";

interface startChat {
  product: string;
  seller: string;
  initialMessage: string;
}

interface sendMessage {
  _id: string;
  content: string;
  reciver: string;
  sender: string;
}

const chatService = {
  getChats: async () => {
    const token = await SecureStore.getItemAsync("onebitshop-token");

    const res = await api.get("/conversations", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  },

  startChat: async (params: startChat) => {
    const token = await SecureStore.getItemAsync("onebitshop-token");

    const res = await api.post("/conversations", params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  },

  sendMessage: async (params: sendMessage) => {
    const token = await SecureStore.getItemAsync("onebitshop-token");

    const res = await api.post(`/conversations/${params._id}/send`, params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res;
  },
};

export default chatService;
