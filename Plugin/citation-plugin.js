const CitationCore = require("citation-core");

const resultNode = document.getElementById("result");
const textNode = document.getElementById("text");
const amountNode = document.getElementById("amount");
const withNode = document.getElementById("with");

document.getElementById("leftpad-form").addEventListener("submit", (e) => {
    e.preventDefault();

    // console.log("padding");
    // resultNode.value = leftPad(textNode.value, amountNode.valueAsNumber, withNode.value);
    var gettingCurrent = browser.tabs.query({active: true});
    gettingCurrent.then(onGot, onError).catch(onError);
    // console.log("padding");
}, false);

function onGot(tabInfo) {
  let formatOptions = new CitationCore.FormatOptions();
  console.log(tabInfo[0].url);
  formatOptions.url = tabInfo[0].url;
  formatOptions.style = CitationCore.styles.apa;
  CitationCore.generate(formatOptions, (citationStr, errors) => {
    // Handle completion of citation generation 
    console.log(citationStr);
    if(errors === undefined) {
        console.log(citationStr);
        resultNode.value = citationStr;
    }
  });
}

function onError(error) {
  // console.log("error occured");
  console.log(`Error: ${error}`);
}
// document.getElementById("pad-bg").addEventListener("click", (e) => {
//     var sendingMessage = browser.runtime.sendMessage({
//         text: textNode.value,
//         amount: amountNode.valueAsNumber,
//         with: withNode.value
//     });
//     sendingMessage.then((result) => {
//       resultNode.value = result;
//     });
// });
