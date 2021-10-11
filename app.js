import { info } from "./env.js";
const body = document.querySelector('body');
const button = document.querySelector('.button');
const def = document.createElement('p');
const randomword = () => {
    fetch('https://random-word-api.herokuapp.com/word?number=1')
        .then(response => {
            return response.json();
        })
        .then(response => {
            word.textContent = response;
            body.appendChild(word);
            randomDefinition(word);
        })
        .catch(err => {
            console.log(err);
        })
}

const randomDefinition = () => {
    console.log(word);
    fetch('https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word.textContext}?key=${info.key}')
        .then(response => {
            return response.json();
        })
        .then(response => {
            console.log(response[0].shortdef[0]);
            def.textContent = "Defination:" + response[0].shortdef[0];
            body.appendChild(def);
        })
        .catch(err => {
            console.log(err);
        })
}


button.addEventListener("click", fuction(), {
    randomword();
})