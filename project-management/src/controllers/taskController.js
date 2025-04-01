class TaskController {
    constructor(taskModel) {
        this.taskModel = taskModel;
    }

    async createTask(req, res) {
        try {
            const { title, description, status } = req.body;
            const newTask = await this.taskModel.create({ title, description, status });
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: 'Error creating task', error });
        }
    }

    async getTasks(req, res) {
        try {
            const tasks = await this.taskModel.find();
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving tasks', error });
        }
    }

    async updateTask(req, res) {
        try {
            const { id } = req.params;
            const { title, description, status } = req.body;
            const updatedTask = await this.taskModel.findByIdAndUpdate(id, { title, description, status }, { new: true });
            if (!updatedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(200).json(updatedTask);
        } catch (error) {
            res.status(500).json({ message: 'Error updating task', error });
        }
    }

    async deleteTask(req, res) {
        try {
            const { id } = req.params;
            const deletedTask = await this.taskModel.findByIdAndDelete(id);
            if (!deletedTask) {
                return res.status(404).json({ message: 'Task not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting task', error });
        }
    }
}

export default TaskController;