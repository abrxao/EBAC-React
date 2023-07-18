import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Product } from "@/components/ProductCard";

type ApiResponse =
  | {
      success: boolean;
      message: string;
    }
  | User;

type User = {
  id: number;
  email: string;
  favs: [Product];
};

const getFavProducts = async (email: string): Promise<ApiResponse> => {
  try {
    const response = await axios.get(`http://localhost:3004/users`);
    const users = response.data as User[];
    const user = users.filter((user) => {
      if (user.email == email) return user;
    });

    if (user[0] == null) return { success: false, message: "User not found" };

    return user[0];
  } catch (error) {
    return {
      success: false,
      message: "Erro encontrar usuario",
    };
  }
};

const getFavorites = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
): Promise<void> => {
  if (req.method === "POST") {
    const { email } = req.body;

    try {
      const response = await getFavProducts(email);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ success: false, message: "Erro no servidor." });
    }
  } else {
    res.status(405).json({ success: false, message: "Método não permitido." });
  }
};

export default getFavorites;
