var express = require('express');
var router = express.Router();
var Controller = require('../controller');
var notificationCtrl = new Controller();

router.post('/', async (req, res) => {
    console.log('processing req => ', JSON.stringify(req.body));
    try {
        var msg = await notificationCtrl.sendNotification(req.body);
        if (msg === 'success') {
            res.status(200).send('success');
        }
    } catch(e) {
        res.status(400).send(e);
    }
})

module.exports = router;