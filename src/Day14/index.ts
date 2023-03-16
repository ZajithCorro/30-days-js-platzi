type FormData = {
	name: String;
	lastname: String;
	email?: String;
	password: String;
};

type User = {
	name: String;
	lastname: String;
	email?: String;
};

export function validateForm(formData: FormData, registeredUsers: Array<User>) {
	const requiredFields = ['name', 'lastname', 'email', 'password'];
	const missingFields = requiredFields.filter(
		(requiredField) => !formData.hasOwnProperty(requiredField)
	);

	if (missingFields.length) {
		const stringMissingFields = missingFields.join(',');

		throw new Error(`Faltan los siguientes campos: ${stringMissingFields}`);
	}

	const { name, lastname, email } = formData;

	const isRegistered = registeredUsers.find((user) => user.email === email);

	if (isRegistered) throw new Error(`El correo ${email} ya fue registrado`);

	registeredUsers.push({ name, lastname, email });

	return `Tu registro fue exitoso ${name} ${lastname}`;
}
