//switch用
function switch_int() {
    var number = document.getElementById('numberSelect').value;
    var output;
    switch (number) {
        case '1':
            output = 'numberは1です';
            break;
        case '2':
            output = 'numberは2です';
            break;
        case '3':
            output = 'numberは3です';
            break;
        default:
            output = 'numberは1, 2, 3以外です';
    }
    document.getElementById('output').innerText = output;
}

//switch用 breakなしvar
function switch_notbreak() {
    var number = document.getElementById('numberSelect').value;
    var output = "";
    switch (number) {
        case '1':
            output += 'numberは1です <br>';
        case '2':
            output += 'numberは2です <br>';
        case '3':
            output += 'numberは3です <br>'; 
        default:
            output += 'numberは1, 2, 3以外です';
    }
    document.getElementById('output').innerHTML = output;
}
