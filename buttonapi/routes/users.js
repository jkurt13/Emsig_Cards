var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    let dataArray = [
      { name: "13111316", url: 'https://github.com/jkurt13/Emsig_Cards/blob/master/src/pictures/13111316%20A2758%20A2759%20A3600%20A3611%20A3781%20GROMMET%20FISHEYE%20DISTRESSED%20ENAMEL.jpg' },
      { name: "19010803", url: 'https://github.com/jkurt13/Emsig_Cards/blob/master/src/pictures/19010803%20PALERMO%20DISTRESSED%20POLYESTER%20METAL%20RIM.jpg' },
      { name: "19031401", url: 'https://github.com/jkurt13/Emsig_Cards/blob/master/src/pictures/19031401%20A4391%20DISTRESSED%20ANCHOR-page-001.jpg' }
    ]

    res.json({
      data: dataArray
    })
});

module.exports = router;
