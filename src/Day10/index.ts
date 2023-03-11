type Task = {
	id: number;
	name: string;
	priority: number | string;
	completed?: boolean;
	tags: Array<string>;
	notes?: string;
	place?: string;
};

export function createTaskPlanner() {
	let tasks: Array<Task> = [];

	function addTask(task: Task) {
		const newTask = {
			...task,
			completed: false,
		};
		tasks.push(newTask);
	}

	function removeTask(identifier: number | string) {
		const filteredTaks = tasks.filter((task: Task) => {
			return task.id !== identifier && task.name !== identifier;
		});

		tasks = [...filteredTaks];
	}

	function getTasks() {
		return tasks;
	}

	function markTaskAsCompleted(identifier: number | string) {
		const modifiedTask = tasks.map((task: Task) => {
			if (task.id === identifier || task.name === identifier) {
				return {
					...task,
					completed: true,
				};
			}

			return task;
		});

		tasks = [...modifiedTask];
	}

	function filterTasksByTag(tag: string) {
		const filteredTasks = tasks.filter((task: Task) => {
			if (task.tags.includes(tag)) return task;
		});

		return filteredTasks;
	}

	function getSortedTasksByPriority() {
		const sortedTasks = [...tasks];

		sortedTasks.sort((task: Task, taskB: Task) => Number(task.priority) - Number(taskB.priority));

		return sortedTasks;
	}

	function getCompletedTasks() {
		const completedTasks = tasks.filter((task: Task) => task.completed);

		return completedTasks;
	}

	function updateTask(id: number, newTask: Partial<Task>) {
		const modifiedTasks = tasks.map((task: Task) => {
			if (task.id === id) {
				return {
					...task,
					...newTask,
				};
			}

			return task;
		});

		tasks = [...modifiedTasks];
	}

	return {
		addTask,
		removeTask,
		getTasks,
		markTaskAsCompleted,
		filterTasksByTag,
		getSortedTasksByPriority,
		getCompletedTasks,
		updateTask,
	};
}
