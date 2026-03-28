import { api } from "../../../shared/lib/api";
import type { UserListResponse } from "../types/user";

export const userService = {
	/**
	 * Busca uma lista paginada de usuários cadastrados na plataforma.
	 *
	 * @param {number} [page=1] - Número da página a ser buscada.
	 * @param {number} [limit=15] - Quantidade de itens por página.
	 * @returns {Promise<UserListResponse>} Resposta contendo a lista de usuários e metadados de paginação.
	 */
	getUsers: async (page = 1, limit = 15) => {
		const params = new URLSearchParams({
			page: page.toString(),
			limit: limit.toString(),
		});

		const response = await api.get<UserListResponse>(
			`/v1/admin/users?${params.toString()}`,
		);
		return response.data;
	},
};
