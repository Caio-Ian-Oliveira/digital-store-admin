import { api } from "../../../shared/lib/api";
import type {
	CreateProductPayload,
	Product,
	ProductOrderItem,
} from "../types/product";

export const productService = {
	/**
	 * Busca todos os produtos ordenados pelo campo `display_order`.
	 *
	 * @returns {Promise<Product[]>} A lista de produtos ordenada por exibição.
	 */
	getProducts: async () => {
		const response = await api.get("/v1/product/search", {
			params: { limit: 50 },
		});
		const products = response.data.data as Product[];
		return products.sort(
			(a, b) => (a.display_order ?? Infinity) - (b.display_order ?? Infinity),
		);
	},

	/**
	 * Busca os detalhes de um produto específico pelo seu ID.
	 *
	 * @param {string} id - O identificador único do produto.
	 * @returns {Promise<Product>} Os dados do produto encontrado.
	 */
	getProductById: async (id: string) => {
		const response = await api.get(`/v1/product/${id}`);
		return response.data as Product;
	},

	/**
	 * Cria um novo produto no sistema com os dados fornecidos.
	 *
	 * @param {CreateProductPayload} productData - Os dados do novo produto.
	 * @returns {Promise<unknown>} O produto recém-criado.
	 */
	createProduct: async (productData: CreateProductPayload) => {
		const response = await api.post("/v1/product", productData);
		return response.data;
	},

	/**
	 * Atualiza parcialmente um produto existente.
	 *
	 * @param {string} id - O identificador do produto a ser atualizado.
	 * @param {Partial<CreateProductPayload>} productData - Os campos a serem atualizados.
	 * @returns {Promise<unknown>} O produto atualizado.
	 */
	updateProduct: async (
		id: string,
		productData: Partial<CreateProductPayload>,
	) => {
		const response = await api.patch(`/v1/product/${id}`, productData);
		return response.data;
	},

	/**
	 * Exclui um produto do sistema pelo seu ID.
	 *
	 * @param {string} id - O identificador do produto a ser excluído.
	 * @returns {Promise<unknown>} Os dados do produto excluído.
	 */
	deleteProduct: async (id: string) => {
		const response = await api.delete(`/v1/product/${id}`);
		return response.data;
	},

	/**
	 * Envia imagens para o servidor via multipart form-data.
	 *
	 * @param {FormData} formData - O formulário contendo as imagens a serem enviadas.
	 * @returns {Promise<Array<{ url: string; public_id: string }>>} Array com as URLs e IDs públicos das imagens enviadas.
	 */
	uploadImages: async (formData: FormData) => {
		const response = await api.post("/v1/product/upload-image", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
		return response.data;
	},

	/**
	 * Atualiza a ordem de exibição de múltiplos produtos simultaneamente.
	 * Realiza patches em paralelo para cada item da lista.
	 *
	 * @param {ProductOrderItem[]} items - Lista de itens com ID e nova ordem de exibição.
	 * @returns {Promise<unknown[]>} Resultados das operações de atualização.
	 */
	updateProductOrder: async (items: ProductOrderItem[]) => {
		const promises = items.map((item) =>
			api.patch(`/v1/product/${item.id}`, {
				display_order: item.display_order,
			}),
		);
		return Promise.all(promises);
	},
};
