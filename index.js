//Challenge 1: Age in Days
//Create a prompt
//Create a function ageDays and reset
//Create an element to show the results


function ageDays(){
    let year = prompt("Enter current year")
    let birthYear = prompt("Enter your age");
    let ageDay = (year - birthYear) * 365;
    let p = document.createElement('p');
    let results = document.createTextNode('You are ' + ageDay + ' days old');
    p.setAttribute('id' , 'ageDays');
    p.appendChild(results);
    document.getElementById('flex-box-result').appendChild(p);

}

function reset(){
    document.getElementById('ageDays').remove();
}

function generateCat() {
    let img = document.createElement('img');
    img.src = 'https://c.tenor.com/Bp5EG6dpxf8AAAAC/cat-shaking.gif';
    document.getElementById('generateCats').appendChild(img);
}