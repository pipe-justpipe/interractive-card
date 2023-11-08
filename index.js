document.addEventListener('DOMContentLoaded', function() {
    const holderName = document.querySelector('#holder-name');
    const cardNumber = document.querySelector('#card-number');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    const cvc = document.querySelector('#cvc');
    const button = document.querySelector('input[type=button]');
    const changeNumber = document.querySelector('#change-number');
    const changeName = document.querySelector('.change-name');
    const changeDate = document.querySelector('.change-date');
    const changeCvc = document.querySelector('.change-cvc');

    function testName(valid) {
        const str = holderName.value; 
        const pattern = /^[A-Za-z]+(\s)[A-Za-z]$/
        const testResult = pattern.test(str)

        console.log(testResult);

    }

    function testNumber() {
        const str = cardNumber.value;
        const pattern = /^[0-9]{16}$/
        const testRES = pattern.test(str)

        console.log(testRES);
    }

    function testExpDate() {
        const str = cardNumber.value;
        const pattern = /^[0-9]{16}$/
        const testRES = pattern.test(str)

        console.log(testRES);
    }

    button.addEventListener('click', function testName() {
        const str = cardNumber.value;
        const pattern = /^[0-9]{16}$/
        const testRES = pattern.test(str)

        console.log(testRES);

    })

});