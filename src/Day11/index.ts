export function sendEmail(email: String, subject: String, body: String) {
	return new Promise((resolve, reject) => {
		if (!email || !subject || !body) reject(new Error('Hacen falta campos para enviar el email'));

		setTimeout(() => {
			resolve({
				email,
				subject,
				body,
			});
		}, 2000);
	});
}
