import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

type ApiResponse = {
  success: boolean;
  message: string;
};

type User = {
  id: number;
  email: string;
  favs: [string];
};

const addUserFavorite = async (
  email: string,
  productName: string
): Promise<ApiResponse> => {
  try {
    const response = await axios.get(`http://localhost:3004/users`);
    const users = response.data as User[];
    const user = users.filter((user) => {
      if (user.email == email) return user;
    });

    if (user[0] == null) {
      await axios.post(`http://localhost:3004/users`, {
        email: email,
        favs: [productName],
      });
      return {
        success: true,
        message: "E-mail cadastrado e produto enviado a sua lista de favoritos",
      };
    }

    if (user[0]?.favs.includes(productName)) {
      return {
        success: false,
        message: "O produto já está na lista de favoritos.",
      };
    }

    await axios.patch(`http://localhost:3004/users/${user[0].id}`, {
      favs: [...user[0].favs, productName],
    });

    return { success: true, message: "Produto adicionado aos favoritos." };
  } catch (error) {
    return {
      success: false,
      message: "Erro ao adicionar o produto aos favoritos.",
    };
  }
};

const addFavorite = async (
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
): Promise<void> => {
  if (req.method === "POST") {
    const { email, productName } = req.body;

    try {
      const response = await addUserFavorite(email, productName);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ success: false, message: "Erro no servidor." });
    }
  } else {
    res.status(405).json({ success: false, message: "Método não permitido." });
  }
};

export default addFavorite;
