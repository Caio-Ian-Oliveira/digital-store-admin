import { api } from "../../../shared/lib/api";
import type { OrderListResponse, OrderStatus } from "../types/order";

export const orderService = {
	/**
	 * Busca uma lista paginada de pedidos com filtro opcional por usuário.
	 *
	 * @param {number} [page=1] - Número da página a ser buscada.
	 * @param {number} [limit=10] - Quantidade de itens por página.
	 * @param {string} [userId] - Filtra os pedidos de um usuário específico.
	 * @returns {Promise<OrderListResponse>} Resposta contendo a lista de pedidos e metadados de paginação.
	 */
	getOrders: async (page = 1, limit = 10, userId?: string) => {
		const params = new URLSearchParams({
			page: page.toString(),
			limit: limit.toString(),
		});

		if (userId) {
			params.append("userId", userId);
		}

		const response = await api.get<OrderListResponse>(
			`/v1/admin/orders?${params.toString()}`,
		);
		return response.data;
	},

	/**
	 * Atualiza o status de um pedido específico.
	 *
	 * @param {string} orderId - O identificador do pedido a ser atualizado.
	 * @param {OrderStatus} status - O novo status do pedido.
	 * @returns {Promise<unknown>} Os dados atualizados do pedido.
	 */
	updateOrderStatus: async (orderId: string, status: OrderStatus) => {
		const response = await api.patch(`/v1/admin/orders/${orderId}/status`, {
			status,
		});
		return response.data;
	},
};
