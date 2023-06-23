// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		// "@": resolve(__dirname, "/"),
		assets: "/<rootDir>/assets",
	},
	css: ["~/assets/main.scss"],
	// https://nuxt.com/docs/api/configuration/nuxt-config
	postcss: {
	  plugins: {
		tailwindcss: {},
		autoprefixer: {},
	  },
	},
});
