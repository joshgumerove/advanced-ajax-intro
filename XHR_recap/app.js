let textButton = document.getElementById("text");
let textCard = document.getElementById("textCard");

textButton.addEventListener("click", () => {
  let xhr = new XMLHttpRequest();
  let method = "GET";
  let url = "../data/text.txt";

  xhr.open(method, url);
  xhr.send();

  xhr.onload = () => {
    if (xhr.status == 200) {
      let data = xhr.responseText;
      showTextData(data);
    }
  };

  let showTextData = (data) => {
    let messageTemplate = `<p>${data}</p>`;
    textCard.innerHTML = messageTemplate;
  };
});
