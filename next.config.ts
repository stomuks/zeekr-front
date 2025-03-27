import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: false,
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_TELEGRAM_BOT_ID: process.env.REACT_APP_TELEGRAM_BOT_ID,
		APP_TELEGRAM_BOT_TOKEN: process.env.REACT_APP_TELEGRAM_CHAT_ID
	}
}

export default nextConfig
