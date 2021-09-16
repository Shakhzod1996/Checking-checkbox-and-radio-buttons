// Input Checkbox 1
function checkBox() {
    let check = document.querySelector('#check');

if (check.checked) {
    alert('You did it')
} else {
    alert('Sorry you are faile')
}
}

// Input radio1
function func1() {

    let radi = document.getElementsByName('r1')
    for(let i = 0; i < radi.length; i++) {

        if (radi[i].checked) {
            alert('Vibran ' + i + ' Element');
        } 
    } 
    console.log(radi.length);

}


