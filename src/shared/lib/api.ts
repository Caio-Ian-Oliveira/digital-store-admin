import axios from "axios";

/** URL base da API, configurada pela variável de ambiente VITE_API_URL. */
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

/**
 * Instância global do Axios configurada para se comunicar com a API da Digital Store.
 * - `baseURL`: URL base da API.
 * - `timeout`: Limite de 10 segundos por requisição.
 * - `withCredentials`: Garante que cookies HttpOnly sejam enviados com cada requisição.
 */
export const api = axios.create({
	baseURL: API_URL,
	timeout: 10000,
	withCredentials: true,
});

/**
 * Interceptor de resposta da API.
 * Em caso de erro 401 (não autenticado ou sessão expirada), redireciona para /login.
 */
api.interceptors.response.use(
	(response) => response,
	(error) => {
		// Se a API retornar 401, significa que o cookie expirou ou é inválido
		if (error.response?.status === 401) {
			console.warn(
				"Sessão expirada ou não autenticada. Redirecionando para o login...",
			);

			// Força o redirecionamento para a página de login
			// Evita loop infinito se já estiver no login
			if (!window.location.pathname.includes("/login")) {
				window.location.href = "/login";
			}
		}
		return Promise.reject(error);
	},
);
