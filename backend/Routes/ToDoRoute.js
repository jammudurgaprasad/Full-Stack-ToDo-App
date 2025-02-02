const { Router } = require("express");
const { getToDo, SaveToDo , UpdateToDo , DeleteToDo } = require("../Controllers/ToDoController");
const router = Router();

router.get('/',getToDo);
router.post('/save',SaveToDo);
router.post('/update',UpdateToDo);
router.post('/delete',DeleteToDo);

module.exports = router;