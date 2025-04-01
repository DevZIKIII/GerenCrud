class MemberController {
    constructor(memberModel) {
        this.memberModel = memberModel;
    }

    async createMember(req, res) {
        try {
            const member = await this.memberModel.create(req.body);
            res.status(201).json(member);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getMembers(req, res) {
        try {
            const members = await this.memberModel.find();
            res.status(200).json(members);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateMember(req, res) {
        try {
            const { id } = req.params;
            const updatedMember = await this.memberModel.findByIdAndUpdate(id, req.body, { new: true });
            if (!updatedMember) {
                return res.status(404).json({ message: 'Member not found' });
            }
            res.status(200).json(updatedMember);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteMember(req, res) {
        try {
            const { id } = req.params;
            const deletedMember = await this.memberModel.findByIdAndDelete(id);
            if (!deletedMember) {
                return res.status(404).json({ message: 'Member not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

export default MemberController;