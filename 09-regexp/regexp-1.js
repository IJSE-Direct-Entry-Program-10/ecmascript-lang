const regExp1 = new RegExp("^E\\d{3}$");
const regExp2 = /E\d{3}/;

const texts = ['E001', 'Something',
    'E002', 'Test', 'E003',
    'E004 Something', 'Test E005'
];

texts.forEach(text => {
    console.log(text, '=', regExp2.test(text))
});