const name = document.getElementById('name');

var form = document.getElementById('form');

form.addEventListener('submit', function(event) {

    event.preventDefault();

    var number = document.getElementById('mark').value;

    var num = number;

    if (num <= 100 && num >= 90) {
        rst.innerHTML = 'A+';
    } else if (num <= 89 && num >= 80) {
        rst.innerHTML = 'A';
    } else if (num <= 79 && num >= 70) {
        rst.innerHTML = 'B+';
    } else if (num <= 69 && num >= 50) {
        rst.innerHTML = 'B';
    } else if (num <= 49 && num >= 40) {
        rst.innerHTML = 'C';
    } else if (num <= 39 && num >= 30) {
        rst.innerHTML = 'D';
    } else if (num <= 0 && num >= 29) {
        rst.innerHTML = 'D';
    }
    else {
        rst.innerHTML = 'invalid';
    }


});