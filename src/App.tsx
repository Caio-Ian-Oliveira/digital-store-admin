import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider, LoginPage, RequireAuth } from "./features/auth";
import { CategoryListingPage } from "./features/categories";
import { AdminLayout } from "./features/layout";
import { OrderListingPage } from "./features/orders";
import { ProductEditPage, ProductListingPage } from "./features/products";
import { UserListingPage } from "./features/users";

/** Instância global do TanStack Query Client para gerenciamento de cache e estado do servidor. */
const queryClient = new QueryClient();

/**
 * Componente raiz da aplicação.
 * Configura os provedores globais: TanStack Query, React Router, Autenticação e Notificações.
 *
 * @returns {JSX.Element} A árvore de componentes com todos os provedores configurados.
 */
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route path="/login" element={<LoginPage />} />

						<Route
							path="/"
							element={
								<RequireAuth>
									<AdminLayout />
								</RequireAuth>
							}
						>
							<Route index element={<Navigate to="/products" replace />} />
							<Route path="products" element={<ProductListingPage />} />
							<Route path="products/:id/edit" element={<ProductEditPage />} />
							<Route path="categories" element={<CategoryListingPage />} />
							<Route path="orders" element={<OrderListingPage />} />
							<Route path="users" element={<UserListingPage />} />
						</Route>

						<Route path="*" element={<Navigate to="/products" replace />} />
					</Routes>
				</AuthProvider>
			</BrowserRouter>
			<Toaster richColors position="top-right" />
		</QueryClientProvider>
	);
}

export default App;
