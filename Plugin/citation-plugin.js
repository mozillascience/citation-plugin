const CitationCore = require("citation-core");

const resultNode = document.getElementById("result");
const textNode = document.getElementById("citation-URL");

/**
 * Get the current tabs url, then send it via a promise to citation generation.
 * @param  {string} On click of the cite
 * button return the correct citation.
 * @return {string} The citation
 */
document.getElementById("citation-form").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(textNode.value)
  if (textNode.value === "") {
    console.log("in can handle")
    var gettingCurrent = browser.tabs.query({active: true});
    gettingCurrent.then(generationHelper).catch(onError);
  }
  else {
    console.log(textNode.value);
    citationGeneration(textNode.value);
  }

}, false);

function generationHelper(browserURL) {
  citationGeneration(browserURL[0].url)
}

function citationGeneration(tabInfo) {
  let formatOptions = new CitationCore.FormatOptions();
  console.log(tabInfo);
  formatOptions.url = tabInfo;
  formatOptions.style = CitationCore.styles.apa;
  CitationCore.generate(formatOptions, (citationStr, errors) => {
    // Handle completion of citation generation 
    console.log(citationStr);
    resultNode.value = citationStr;
  });
}

function onError(error) {
  console.log(`Error: ${error}`);
}
