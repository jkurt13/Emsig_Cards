var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let dataArray = [
      { name: "1", url: 'https://github.com/jkurt13/Emsig_Cards/blob/master/src/pictures/13111316%A2758%A2759%A3600%A3611%A3781%GROMMET%FISHEYE%DISTRESSED%ENAMEL.jpg' },
      { name: "2", url: 'https://github.com/jkurt13/Emsig_Cards/blob/master/src/pictures/19010803%20PALERMO%20DISTRESSED%20POLYESTER%20METAL%20RIM.jpg' },
      { name: "3", url: 'https://github.com/jkurt13/Emsig_Cards/blob/master/src/pictures/19031401%20A4391%20DISTRESSED%20ANCHOR-page-001.jpg' }
    ]

    res.json({
      data: dataArray
    })
});

module.exports = router;
