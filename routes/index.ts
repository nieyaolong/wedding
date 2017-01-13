import * as express from 'express';
import * as moment from 'moment';

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
        title: `#${bridegroom}和${bride}的婚礼`,
        bridegroom: bridegroom,
        bride: bride,
        date: date.toLocaleDateString(),
        feast_date: feast_date.toLocaleDateString(),
        feast_address: feast_address,
        location: location,
        address: address
    });
});

moment.locale('zh-cn');
const guestInfo = require("../guest.json").guests;

/* GET home page. */
router.get('/:id', (req, res) => {
    let id:string = req.params.id;
    if(!id) {
        throw new Error('参数格式错误');
    }
    let name:string|null = null;
    let gender:"f"|"m"|null = null;
    if(guestInfo.hasOwnProperty(id)){
        name = guestInfo[id].name;
        gender = guestInfo[id].male ? 'm': 'f';
    }
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