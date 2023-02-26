import * as emoji from "./emoji.js";

const container = document.getElementById("app");
container.innerText = emoji.format(container.innerText);
