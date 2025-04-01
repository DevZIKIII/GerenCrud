class TaskController {
    constructor() {
        this.tasks = [];
        this.currentId = 1;
    }

    createTask(task) {
        const newTask = {
            id: this.currentId++,
            ...task
        };
        this.tasks.push(newTask);
        return newTask;
    }

    getTasks() {
        return this.tasks;
    }

    updateTask(id, updatedTask) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks[index] = { ...this.tasks[index], ...updatedTask };
            return this.tasks[index];
        }
        return null;
    }

    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            return this.tasks.splice(index, 1)[0];
        }
        return null;
    }
}

module.exports = TaskController;