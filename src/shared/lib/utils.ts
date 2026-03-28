import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * Combina classes CSS de forma segura, resolvendo conflitos entre classes do Tailwind.
 * Utiliza `clsx` para condicionar classes e `tailwind-merge` para resolver conflitos.
 *
 * @param {...ClassValue} inputs - Uma ou mais listas de classes CSS (strings, objetos ou arrays).
 * @returns {string} A string final de classes CSS sem conflitos.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const twMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			"font-size": [
				"text-title-large",
				"text-title-medium",
				"text-title-small",
				"text-body-large",
				"text-body-medium",
				"text-body-small",
			],
		},
	},
});
