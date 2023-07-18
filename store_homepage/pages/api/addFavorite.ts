import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { Product } from "@/components/ProductCard";

type ApiResponse = {
  success: boolean;
  message: string;
};

export type User = {
  id: number;
  email: string;
  favs: [Product];
};

const addUserFavorite = async (
  email: string,
  product: Product
): Promise<ApiResponse> => {
  try {
    const response = await axios.get(`http://localhost:3004/users`);
    const users = response.data as User[];
    const user = users.find((user) => user.email == email);

    if (user === undefined) {
      if (product === null) {
        await axios.post(`http://localhost:3004/users`, {
          email: email,
          favs: [],
        });
        return {
          success: false,
          message: "E-mail foi cadastrado",
        };
      } else {
        await axios.post(`http://localhost:3004/users`, {
          email: email,
          favs: [product],
        });
      }

      return {
        success: true,
        message: "E-mail cadastrado e produto enviado a sua lista de favoritos",
      };
    }

    for (var i = 0; i < user?.favs.length; i++) {
      if (user?.favs[i].name === product?.name) {
        return {
          success: false,
          message: "O produto já estava na lista de favoritos.",
        };
      }
    }
    if (product !== null) {
      await axios.patch(`http://localhost:3004/users/${user.id}`, {
        favs: [...user.favs, product],
      });
      return {
        success: false,
        message: "O produto foi adicionado a sua lista de favoritos",
      };
    }

    return {
      success: false,
      message: "Erro desconhecido",
    };
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
    const { email, product } = req.body;

    try {
      const response = await addUserFavorite(email, product);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ success: false, message: "Erro no servidor." });
    }
  } else {
    res.status(405).json({ success: false, message: "Método não permitido." });
  }
};

export default addFavorite;
