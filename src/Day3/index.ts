const pets = {
	perro: [
		'Los cachorros necesitan pequeñas y frecuentes sesiones de juego',
		'Los perros a esta edad necesitan caminatas diarias y sesiones de juego',
		'Los perros viejos necesitan caminatas más cortas',
	],
	gato: [
		'Los gatitos necesitan frecuentes sesiones de juego',
		'Los gatos a esta edad necesitan jugar diariamente',
		'Los gatos viejos necesitan sesiones de juego más cortas',
	],
	ave: [
		'Las aves jóvenes necesitan mucho espacio para volar',
		'Las aves necesitan jugar diariamente y un lugar para volar',
		'Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar',
	],
};

export function getPetExerciseInfo(type: string, age: number) {
	if (!Object.keys(pets).includes(type)) return 'Tipo de mascota inválida';

	if (age < 1) return pets[type][0];
	if (age >= 1 && age <= 7) return pets[type][1];
	if (age > 7) return pets[type][2];
}
