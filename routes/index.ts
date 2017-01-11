import * as express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    const bridegroom = '聂耀龙';
    const bride = '高颖慧';
    const date = new Date('2017-1-18');
    const feast_date = new Date('2017-1-19');
    const feast_address = '山东省禹城市明珠大酒店';
    const location = '山东禹城';
    const address = '山东省禹城市金穗大酒店';
    res.render('index', {
        title: '欢迎光临',
        bridegroom: bridegroom,
        bride: bride,
        date: date.toLocaleDateString(),
        feast_date: feast_date.toLocaleDateString(),
        feast_address: feast_address,
        location: location,
        address: address
    });
});

module.exports = router;