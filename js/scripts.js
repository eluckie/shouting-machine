window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();
    const textInput = document.getElementById("textInput").value.toUpperCase();
    document.querySelector("span#input").innerText = textInput;
    document.querySelector("div#shout").removeAttribute("class");
  };
};
