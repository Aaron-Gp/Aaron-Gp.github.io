// https://nuxt.com/docs/api/configuration/nuxt-config

export default {
	ssr: false,
	devtools: { enabled: true },
	app: {
		head: {
			title: "My Nuxt Project",
			htmlAttrs: {
				lang: "en",
			},
		},
	},
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
	// modules: ["@bg-dev/nuxt-naiveui"],
	// naiveui: {
	// 	colorModePreference: "light",
	// 	iconSize: 18,
	// 	themeConfig: {},
	// },
	tailwindcss: {
		exposeConfig: true,
	},
};
