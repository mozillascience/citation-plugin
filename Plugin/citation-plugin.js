const CitationCore = require("citation-core");

const resultNode = document.getElementById("result");
const textNode = document.getElementById("text");
const amountNode = document.getElementById("amount");
const withNode = document.getElementById("with");

/**
 * Get the current tabs url, then send it via a promise to citation generation.
 * @param  {string} On click of the cite
 * button return the correct citation.
 * @return {string} The citation
 */
document.getElementById("leftpad-form").addEventListener("submit", (e) => {
    e.preventDefault();
    var gettingCurrent = browser.tabs.query({active: true});
    gettingCurrent.then(citationGeneration).catch(onError);
}, false);

function citationGeneration(tabInfo) {
  let formatOptions = new CitationCore.FormatOptions();
  console.log(tabInfo[0].url);
  formatOptions.url = tabInfo[0].url;
  formatOptions.style = CitationCore.styles.apa;
  CitationCore.generate(formatOptions, (citationStr, errors) => {
  // Handle completion of citation generation 
  console.log(citationStr);
  resultNode.value = citationStr;
  });
}

function onError(error) {
  // console.log("error occured");
  console.log(`Error: ${error}`);
}
