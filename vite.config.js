import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	optimizeDeps: {
		include: [
			"react",
			"react-dom",
			"bootstrap",
			"@fortawesome/fontawesome-free",
			"@popperjs/core",
		],
	},
	css: {
		preprocessorOptions: {
			scss: {
				// If you are using SCSS, you can include global variables or mixins here
				additionalData: `@import "@/styles/sass/_variables.scss";`,
			},
		},
	},
});
