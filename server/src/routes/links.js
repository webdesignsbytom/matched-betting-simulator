const express = require("express");
const { authorization } = require('../middleware/auth')

const router = express.Router();
const {
    getAllLinks,
    createNewLink

} = require('../controllers/links');

router.get('/', getAllLinks);
router.post('/', createNewLink);


module.exports = router;

