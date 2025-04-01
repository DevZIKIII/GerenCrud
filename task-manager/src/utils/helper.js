module.exports = {
    validateTask: function(task) {
        if (!task.title || typeof task.title !== 'string') {
            throw new Error('Invalid task title');
        }
        if (task.description && typeof task.description !== 'string') {
            throw new Error('Invalid task description');
        }
        return true;
    },
    
    formatTask: function(task) {
        return {
            id: task.id,
            title: task.title,
            description: task.description || '',
            createdAt: new Date(task.createdAt).toISOString(),
            updatedAt: new Date(task.updatedAt).toISOString()
        };
    }
};