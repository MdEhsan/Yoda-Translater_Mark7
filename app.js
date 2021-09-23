const inputText = document.querySelector("#input-text")
const outputText = document.querySelector("#output-text")
const btnTranslate = document.querySelector(".btn-translate")
const errorMessage = document.querySelector("#error-message")


const serverURL = "https://api.funtranslations.com/translate/yoda.json"

function getTranslateURL(input){
    return serverURL + "?" + "text=" + input;
}


function errorHandler(error){
    console.log("error occoured" , error);
    alert("Oops! Something went wrong. Try again later.")
}


function clickHandler(){

    var inputText = inputText.value;

    fetch(getTranslateURL(inputText))
        .then(response => response.json())
        .then(json => {

            var translatedText = json.contents.translated;
            outPut.innerText = translatedText;

        }).catch(errorHandler)

}

btnTranslate.addEventListener("click", clickHandler)