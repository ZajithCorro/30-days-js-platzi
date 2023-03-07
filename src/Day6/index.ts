type Student = {
	name: String;
	grades: Array<number>;
};

export function getStudentAverage(students: Array<Student>) {
	const studentsResult = students.reduce(
		(_prev: any, _current) => {
			const average = (
				_current.grades.reduce((prev, curr) => prev + curr, 0) / _current.grades.length
			).toFixed(2);

			return {
				classGrade: Number(_prev.classGrade) + Number(average),
				students: [
					..._prev.students,
					{
						name: _current.name,
						average: Number(average),
					},
				],
			};
		},
		{
			classGrade: 0,
			students: [],
		}
	);

	const averageClass = (studentsResult.classGrade / students.length).toFixed(2);

	return {
		classAverage: Number(averageClass),
		students: studentsResult.students,
	};
}
