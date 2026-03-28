import { api } from "../../../shared/lib/api";
import type {
	Category,
	CategorySearchParams,
	CategorySearchResponse,
	CreateCategoryPayload,
	UpdateCategoryPayload,
} from "../types/category";

export const categoryService = {
	/**
	 * Busca uma lista paginada de categorias com filtros opcionais.
	 *
	 * @param {CategorySearchParams} params - Filtros de busca, limite e página.
	 * @returns {Promise<CategorySearchResponse>} Resposta contendo a lista de categorias e metadados de paginação.
	 */
	getCategories: async (params: CategorySearchParams = {}) => {
		const response = await api.get<CategorySearchResponse>(
			"/v1/category/search",
			{
				params: {
					limit: params.limit ?? 12,
					page: params.page ?? 1,
					fields: params.fields,
					use_in_menu: params.use_in_menu,
				},
			},
		);

		return response.data;
	},

	/**
	 * Busca os detalhes de uma categoria específica pelo seu ID.
	 *
	 * @param {string} id - O identificador único da categoria.
	 * @returns {Promise<Category>} Os dados da categoria encontrada.
	 */
	getCategoryById: async (id: string) => {
		const response = await api.get<Category>(`/v1/category/${id}`);
		return response.data;
	},

	/**
	 * Cria uma nova categoria no sistema.
	 *
	 * @param {CreateCategoryPayload} payload - Os dados da nova categoria.
	 * @returns {Promise<Category>} A categoria recém-criada.
	 */
	createCategory: async (payload: CreateCategoryPayload) => {
		const response = await api.post<Category>("/v1/category", payload);
		return response.data;
	},

	/**
	 * Atualiza os dados de uma categoria existente.
	 *
	 * @param {string} id - O identificador da categoria a ser atualizada.
	 * @param {UpdateCategoryPayload} payload - Os novos dados da categoria.
	 * @returns {Promise<Category>} A categoria atualizada.
	 */
	updateCategory: async (id: string, payload: UpdateCategoryPayload) => {
		const response = await api.patch<Category>(`/v1/category/${id}`, payload);
		return response.data;
	},

	/**
	 * Exclui uma categoria do sistema pelo seu ID.
	 *
	 * @param {string} id - O identificador da categoria a ser excluída.
	 * @returns {Promise<Category>} A categoria excluída.
	 */
	deleteCategory: async (id: string) => {
		const response = await api.delete<Category>(`/v1/category/${id}`);
		return response.data;
	},
};
