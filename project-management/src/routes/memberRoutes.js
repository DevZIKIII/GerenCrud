const express = require('express');
const MemberController = require('../controllers/memberController');

const router = express.Router();
const memberController = new MemberController();

router.post('/', memberController.createMember.bind(memberController));
router.get('/', memberController.getMembers.bind(memberController));
router.put('/:id', memberController.updateMember.bind(memberController));
router.delete('/:id', memberController.deleteMember.bind(memberController));

module.exports = router;