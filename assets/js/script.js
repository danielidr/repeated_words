getLetters();
getWords();
function getLetters() {
    let lorem = document.getElementById("texto-entrada").textContent.toLowerCase();
    // Recorre desde el 97 al 122 que son los codigos ascii desde a hasta z
    for (i = 97; i <= 122; i++) {
        let letter = String.fromCharCode(i);
        let occurrences = lorem.replace(new RegExp(`[^${letter}]`,'g'),'').length;

        getToDom(letter,occurrences,1);
    }
}

function getWords() {
    let lorem = document.getElementById("texto-entrada").textContent.replace(/[^\w\s]/gi, ' ').replace(/\\n/g,"").toLowerCase();
    let words =  Array.from(new Set(lorem.split(" ")));

    for(i = 0; i < words.length; i++) {
        let word = words[i];
        let occurrences = lorem.split(word).length - 1;
        getToDom(word, occurrences,2);
    }
}

function getToDom(item,occurrences,p) {
    let add_p = document.createElement("p");
    document.getElementsByTagName('div')[0].appendChild(add_p);

    let add_strong = document.createElement("strong");
    let add_text = document.createTextNode(`${item}:`);
    add_strong.appendChild(add_text);
    document.getElementsByTagName('p')[p].appendChild(add_strong);

    let add_span = document.createElement("span");
    let text_cant = document.createTextNode(`${occurrences} `);
    add_span.appendChild(text_cant);
    document.getElementsByTagName('p')[p].appendChild(add_span);
}