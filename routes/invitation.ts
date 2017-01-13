import * as express from 'express';
import * as moment from 'moment';
const router = express.Router();


moment.locale('zh-cn');

/* GET home page. */
router.get('/', (req, res) => {
    let name: string = req.query.n;
    let gender: 'f'|'m' = req.query.g;
    if(!name || (gender != 'f' && gender != 'm')) {
        throw new Error('参数错误');
    }
    const bridegroom = '聂耀龙';
    const bride = '高颖慧';
    const date = moment('2017-1-18 12:00 ');
    const feast_date = moment('2017-1-19 12:00 ');
    const address = '山东省禹城市明珠大酒店';
    const location = '山东禹城';
    res.render('invitation', {
        title: '邀请函',
        bridegroom: bridegroom,
        bride: bride,
        date: date.format('GGGG年MM月DD日 dddd'),
        feast_date: feast_date.format('GGGG年MM月DD日 dddd'),
        lunar_date: '腊月二十二',
        time: feast_date.format('HH时mm分'),
        location: location,
        address: address,
        name : name,
        salutation : gender == 'm' ? '先生': '女士',
        relation: gender == 'm' ? '兄台': '惠姐',
    });
});

module.exports = router;