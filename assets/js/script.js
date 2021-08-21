getLetters();

function getLetters() {
    let lorem = document.getElementById("texto-entrada").textContent;
    // Recorre desde el 97 al 122 que son los codigos ascii desde a hasta z
    for (i = 97 ; i <= 122; i++) {
        let letter = String.fromCharCode(i);
        let regex = `(${letter}|${letter.toUpperCase()})`
        let ocurrences = lorem.replace(new RegExp(`[^${regex}]`,'g'),'').length;

        let letters_p = document.createElement("p");
        document.getElementsByTagName('div')[0].appendChild(letters_p);

        let letters_strong = document.createElement("strong");
        let text_letter = document.createTextNode(`${letter}:`);
        letters_strong.appendChild(text_letter);
        document.getElementsByTagName('p')[1].appendChild(letters_strong);

        let letters_span = document.createElement("span");
        let text_cant = document.createTextNode(`${ocurrences}  `);
        letters_span.appendChild(text_cant);
        document.getElementsByTagName('p')[1].appendChild(letters_span);
    }
}

