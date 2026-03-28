import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

/**
 * Hook customizado para acessar o contexto de autenticação de forma segura.
 *
 * @returns {AuthContextType} O objeto contendo o estado do usuário e métodos de auth.
 * @throws {Error} Se o hook for utilizado fora de um AuthProvider.
 */
export function useAuth() {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error("useAuth deve ser usado dentro de um AuthProvider");
	}
	return context;
}
