class ProjectController {
    constructor(Project) {
        this.Project = Project;
    }

    async createProject(req, res) {
        try {
            const project = await this.Project.create(req.body);
            res.status(201).json(project);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getProjects(req, res) {
        try {
            const projects = await this.Project.find();
            res.status(200).json(projects);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateProject(req, res) {
        try {
            const { id } = req.params;
            const project = await this.Project.findByIdAndUpdate(id, req.body, { new: true });
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
            res.status(200).json(project);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteProject(req, res) {
        try {
            const { id } = req.params;
            const project = await this.Project.findByIdAndDelete(id);
            if (!project) {
                return res.status(404).json({ message: 'Project not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default ProjectController;