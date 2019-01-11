/*-------------For Teacher Routes ie. routes which start with /api/teacher---------*/
const express = require('express');
const router = express.Router();

//indirectly the url is portNumber:/api/teacher/login
router.get('/login', (req, res) => {
    res.send("Teacher logged in")

});

//indirectly the url is portNumber:/api/teacher/
router.get('/', (req, res) => {
    res.send("teacher view");
})


//exporting the router object so that we can import it in app.js
module.exports = router;