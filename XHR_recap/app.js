let textButton = document.getElementById("text");
let textCard = document.getElementById("textCard");

textButton.addEventListener("click", () => {
  // let xhr = new XMLHttpRequest();
  let method = "GET";
  let url = "../data/text.txt";

  fetch(url)
    .then((response) => response.text())
    .then((result) => showTextData(result))
    .catch((err) => console.log("error: ", err));

  // xhr.open(method, url);
  // xhr.send();

  // xhr.onload = () => {
  //   if (xhr.status == 200) {
  //     let data = xhr.responseText;
  //     showTextData(data);
  //   }
  // };

  let showTextData = (data) => {
    let messageTemplate = `<p>${data}</p>`;
    textCard.innerHTML = messageTemplate;
  };
});

// JSON DATA
let JSONButton = document.getElementById("json");
let JSONCard = document.getElementById("JSONCard");

JSONButton.addEventListener("click", () => {
  // let xhr = new XMLHttpRequest();
  // let method = "GET";
  let url = "../data/data.json";

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      JSONCard.innerHTML = `<p>${data.book} ${data.verse}</p>`;
    })
    .catch((err) => console.log("there is an error: ", err));

  // xhr.open(method, url);
  // xhr.onload = () => {
  //   if (xhr.status === 200) {
  //     let dataObject = JSON.parse(xhr.responseText);
  //     showJSONData(dataObject);
  //   }
  // };

  // let showJSONData = (data) => {
  //   let messageTemplate = `<p>${data.book} ${data.verse}</p>`;
  //   JSONCard.innerHTML = messageTemplate;
  // };
  // xhr.send();
});

let apiButton = document.getElementById("api");
let apiCard = document.getElementById("ApiCard");

apiButton.addEventListener("click", () => {
  // let xhr = new XMLHttpRequest();
  // let method = "GET";
  let url = "https://bible-api.com/john 3:16";

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => {
      apiCard.innerHTML = `<p>${data.reference} ${data.text}</p>`;
    })
    .catch((err) => console.log("there is an error: ", err));

  // xhr.open(method, url);

  // xhr.onload = () => {
  //   if (xhr.status === 200) {
  //     let apiData = JSON.parse(xhr.responseText);
  //     showApi(apiData);
  //   }
  // };

  // let showApi = (data) => {
  //   let messageTemplate = `<p>${data.reference} ${data.text}</p>`;
  //   apiCard.innerHTML = messageTemplate;
  // };

  // xhr.send();
});
