class ActivityController {
    constructor(activityModel, projectModel, memberModel, taskModel) {
        this.activityModel = activityModel;
        this.projectModel = projectModel;
        this.memberModel = memberModel;
        this.taskModel = taskModel;
    }

    async createActivity(req, res) {
        const { projectId, memberId, taskId, startDate, endDate } = req.body;
        try {
            const activity = await this.activityModel.create({
                projectId,
                memberId,
                taskId,
                startDate,
                endDate
            });
            res.status(201).json(activity);
        } catch (error) {
            res.status(500).json({ message: 'Error creating activity', error });
        }
    }

    async getActivities(req, res) {
        try {
            const activities = await this.activityModel.find().populate('projectId memberId taskId');
            res.status(200).json(activities);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching activities', error });
        }
    }

    async updateActivity(req, res) {
        const { id } = req.params;
        const updates = req.body;
        try {
            const activity = await this.activityModel.findByIdAndUpdate(id, updates, { new: true });
            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }
            res.status(200).json(activity);
        } catch (error) {
            res.status(500).json({ message: 'Error updating activity', error });
        }
    }

    async deleteActivity(req, res) {
        const { id } = req.params;
        try {
            const activity = await this.activityModel.findByIdAndDelete(id);
            if (!activity) {
                return res.status(404).json({ message: 'Activity not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting activity', error });
        }
    }
}

export default ActivityController;