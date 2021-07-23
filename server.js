const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
	res.send([
            {
                'id': 1,
                'img': 'https://placeimg.com/64/64/1',
                'name': '홍길동',
    'birthday': '1234',
                'gender': '남자',
                'job': '대학생'
            },
            {
                'id': 2,
                'img': 'https://placeimg.com/64/64/2',
                'name': '이순신',
                'birthday': '4567',
                'gender': '여자',
                'job': '엔지니어'
            },
            {
                'id': 3,
                'img': 'https://placeimg.com/64/64/any3',
                'name': '유관순',
                'birthday': '8901',
                'gender': '여자',
                'job': '의사'
            }
        ]
	);
});

app.listen(port, () => console.log(`Listening Port ${port}`)
);