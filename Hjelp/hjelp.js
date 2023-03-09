const form = document.querySelector('form');
const urlInput = document.querySelector('#url-input');
const checkButton = document.querySelector('#check-button');
const resultDiv = document.querySelector('#result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = urlInput.value;
  if (url) {
    checkUrl(url);
  }
});

async function checkUrl(url) {
  const safeBrowsingApiUrl = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyAEp69wHfFG0QIXL_bkwajl9laVHhWQPpg`;
  const requestBody = {
    "client": {
      "clientId": "nettsjekk",
      "clientVersion": "1.0.0"
    },
    "threatInfo": {
      "threatTypes": ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"],
      "platformTypes": ["ANY_PLATFORM"],
      "threatEntryTypes": ["URL"],
      "threatEntries": [
        {"url": url}
      ]
    }
  };
  try {
    const response = await fetch(safeBrowsingApiUrl, {
      method: 'POST',
      body: JSON.stringify(requestBody)
    });
    const data = await response.json();
    if (response.ok) {
      if (data.matches && data.matches.length > 0) {
        resultDiv.innerText = `Nettsiden ${url} er ikke trygg`;
      } else {
        resultDiv.innerText = `Nettsiden ${url} er trygg`;
      }
    } else {
      resultDiv.innerText = `En feil oppsto: ${data.error.message}`;
    }
  } catch (error) {
    resultDiv.innerText = `En feil oppsto: ${error}`;
  }
}

const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      showcase.classList.toggle('active');
    })