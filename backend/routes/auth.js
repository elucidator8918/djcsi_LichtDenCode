const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController')
const upload = require('../middleware/upload')
const EmployeeController = require('../controllers/EmployeeController')


router.get('/index',EmployeeController.index)
router.post('/show',EmployeeController.show)
router.post('/storeemp',EmployeeController.storeemp)
router.post('/update',EmployeeController.update)
router.post('/destroy',EmployeeController.destroy)

router.post('/register',upload.single('file'),AuthController.register)
router.post('/login',AuthController.login)
router.post('/logout',AuthController.logout)

router.post('/instagram',AuthController.instagram)
router.post('/Linkedin',AuthController.Linkedin)
router.post('/Truecaller',AuthController.Truecaller)
router.post('/emailRisk',AuthController.emailRisk)
router.post('/phoneRisk',AuthController.phoneRisk)

module.exports = router