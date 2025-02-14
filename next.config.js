/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	serverRuntimeConfig: {
	  // 将浏览器语言设置为默认值（可选）
	  defaultLanguage: 'en',
	},
	publicRuntimeConfig: {
	  // 将浏览器语言设置为默认值（可选）
	  defaultLanguage: 'en',
	},
	i18n: {
		locales: ['en', 'zh', 'ja'],
		defaultLocale: 'en',
	},
};

module.exports = {
	env: {
	},
	output: 'standalone',
};

module.exports = nextConfig;
