import { api } from "../../../shared/lib/api";
import type { LoginPayload, UserProfile } from "../types/auth";

export const authService = {
	/**
	 * Realiza o login do administrador enviando as credenciais.
	 * A API configura o cookie HttpOnly na resposta para persistência da sessão.
	 *
	 * @param {LoginPayload} credentials - Objeto contendo email e senha.
	 * @returns {Promise<{ user: UserProfile }>} Os dados do usuário autenticado.
	 */
	login: async (credentials: LoginPayload): Promise<{ user: UserProfile }> => {
		const response = await api.post("/v1/admin/login", credentials);
		return response.data;
	},

	/**
	 * Encerra a sessão do administrador solicitando à API a limpeza do cookie HttpOnly.
	 *
	 * @returns {Promise<void>}
	 */
	logout: async (): Promise<void> => {
		await api.post("/v1/admin/logout");
	},

	/**
	 * Recupera os dados do perfil do usuário atualmente autenticado via cookie HttpOnly.
	 *
	 * @returns {Promise<UserProfile>} Os dados do perfil do usuário.
	 */
	getProfile: async (): Promise<UserProfile> => {
		const response = await api.get("/v1/admin/profile");
		return response.data;
	},
};
