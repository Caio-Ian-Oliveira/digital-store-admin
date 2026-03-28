import { useQuery } from "@tanstack/react-query";
import { categoryService } from "../services/categoryService";
import type { CategorySearchParams } from "../types/category";

/**
 * Hook customizado para carregar a lista de categorias com filtros opcionais.
 *
 * @param {CategorySearchParams} params - Parâmetros de busca e paginação.
 * @returns {QueryResult} Resultado da query do TanStack Query.
 */
export function useCategories(params: CategorySearchParams = {}) {
	return useQuery({
		queryKey: ["categories", params],
		queryFn: () => categoryService.getCategories(params),
	});
}

/**
 * Hook customizado para carregar os detalhes de uma única categoria.
 *
 * @param {string} id - O ID da categoria a ser buscada.
 * @returns {QueryResult} Resultado da query do TanStack Query.
 */
export function useCategory(id: string) {
	return useQuery({
		queryKey: ["category", id],
		queryFn: () => categoryService.getCategoryById(id),
		enabled: !!id,
	});
}
