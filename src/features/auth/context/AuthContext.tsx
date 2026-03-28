import type { ReactNode } from "react";
import { createContext, useEffect, useState } from "react";
import { authService } from "../services/authService";
import type { LoginPayload, UserProfile } from "../types/auth";

interface AuthContextType {
	user: UserProfile | null;
	isLoading: boolean;
	login: (credentials: LoginPayload) => Promise<void>;
	logout: () => Promise<void>;
	isAuthenticated: boolean;
}

/**
 * Contexto de autenticação que armazena os dados do usuário e métodos de controle de sessão.
 */
export const AuthContext = createContext<AuthContextType | undefined>(
	undefined,
);

/**
 * Componente Provedor que gerencia o estado de autenticação global da aplicação.
 *
 * @param {Object} props - Propriedades do componente.
 * @param {ReactNode} props.children - Elementos que serão envolvidos pelo provedor.
 * @returns {JSX.Element} O provedor de contexto com o estado de autenticação.
 */
export function AuthProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<UserProfile | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	// Tenta recuperar a sessão do usuário na inicialização
	useEffect(() => {
		/**
		 * Busca o perfil do usuário logado através do serviço de autenticação.
		 */
		const initAuth = async () => {
			try {
				const profile = await authService.getProfile();
				setUser(profile);
			} catch (error) {
				// Ignora ou loga silenciosamente. 401 significa que não há cookie válido.
				console.debug("Sem sessão ativa.", error);
			} finally {
				setIsLoading(false);
			}
		};

		initAuth();
	}, []);

	/**
	 * Realiza o login do usuário e armazena os dados no estado global.
	 *
	 * @param {LoginPayload} credentials - Objeto com e-mail e senha do usuário.
	 * @returns {Promise<void>}
	 */
	const login = async (credentials: LoginPayload) => {
		// Esse passo chama a rota e força o recebimento dos cookies na store local
		const data = await authService.login(credentials);
		setUser(data.user);
	};

	/**
	 * Encerra a sessão do usuário no servidor e limpa os dados locais.
	 *
	 * @returns {Promise<void>}
	 */
	const logout = async () => {
		try {
			await authService.logout();
		} finally {
			// Independe de erro na API limpa na UI
			setUser(null);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				isLoading,
				login,
				logout,
				isAuthenticated: !!user,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
