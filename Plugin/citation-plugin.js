const CitationCore = require('citation-core');

const resultNode = document.getElementById('result');
const citationFormatsNode = document.getElementById('citationFormats');
const textNode = document.getElementById('citation-URL');

function citationGeneration(tabInfo) {
  const formatOptions = new CitationCore.FormatOptions();
  const selectedStyleIndex = citationFormatsNode.selectedIndex;
  const selectedStyle = citationFormatsNode.options[selectedStyleIndex].value;

  formatOptions.url = tabInfo;
  formatOptions.style = CitationCore.styles[selectedStyle];
  CitationCore.generate(formatOptions, (citationStr, errors) => {
    // Handle completion of citation generation
    resultNode.value = citationStr;
  });
}

function generationHelper(browserURL) {
  citationGeneration(browserURL[0].url);
}

function onError(error) {
  throw new Error(`Error: ${error}`);
}

/**
 * Get the current tabs url, then send it via a promise to citation generation.
 * @param  {string} On click of the cite
 * button return the correct citation.
 * @return {string} The citation
 */
document.getElementById('citation-form').addEventListener('submit', (e) => {
  e.preventDefault();
  if (textNode.value === '') {
    const gettingCurrent = browser.tabs.query({ active: true });
    gettingCurrent.then(generationHelper).catch(onError);
  }
  else {
    citationGeneration(textNode.value);
  }
}, false);

const styles = Object.keys(CitationCore.styles);
styles.forEach((style) => {
  const newElement = document.createElement('option');
  newElement.innerHTML = style;
  newElement.value = style;
  citationFormatsNode.appendChild(newElement);
});
