

/**
 * 
 * User routes...
 */

const express           = require('express');
const userController    = require('../controllers/userController');
const router            = express.Router();

router.get('/', userController.showCreateForm);
router.get('/create/form', userController.showCreateForm);
router.post('/user/create', userController.createUser);
router.get('/user/list', userController.userList);
router.delete('/user/:id', userController.userDelete);
router.get('/user/edit/:id', userController.userEdit);
router.post('/user/update', userController.userUpdate);
module.exports = router;