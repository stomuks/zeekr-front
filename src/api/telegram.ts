const baseUrl =
	'https://api.telegram.org/bot' +
	process.env.APP_TELEGRAM_BOT_ID +
	'/sendMessage?chat_id=' +
	process.env.APP_TELEGRAM_BOT_TOKEN

export const sendMessage = async (message: string): Promise<void> => {
	const url = `${baseUrl}&text=${message}`

	const res = await fetch(url)

	if (!res.ok) {
		const error = await res.json()
		await Promise.reject(error.description || 'Something went wrong')
	}
}
