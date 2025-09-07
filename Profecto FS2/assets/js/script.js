function checkChar(text, maxChar, minChar, elementId, errorMin, errorMax) {
  if (text.length < minChar) {
    document.getElementById(elementId).innerHTML = errorMin;
  } else if (text.length > maxChar) {
    document.getElementById(elementId).innerHTML = errorMax;
  } else {
    document.getElementById(elementId).innerHTML = "";
  }
}

const Domains = ["gmail.com", "duoc.cl", "profesor.duoc.cl"];
function checkEmail(email) {
  // Check if email contains @
  const atIndex = email.indexOf("@");
  if (atIndex === -1) {
    //Si no hay simbolo '@', ejecutar
    document.getElementById("domainError").innerHTML =
      "Ingrese un email válido: <br>(@duoc.cl, @profesor.duoc.cl, @gmail.com)";
    return false;
  }

  const domain = email.slice(atIndex + 1).toLowerCase();

  if (Domains.includes(domain)) {
    //Si pasa todas las validaciones, ejecutar
    document.getElementById("domainError").innerHTML = "";

    return true;
  } else {
    //Si no tiene un dominio valido, ejecutar
    document.getElementById("domainError").innerHTML =
      "Ingrese un email válido: <br>(@duoc.cl, @profesor.duoc.cl, @gmail.com)";
    return false;
  }
}

function emailConfirm(email, confEmail, elementId) {
  if (email == confEmail) {
    document.getElementById(elementId).innerHTML = "";
  } else {
    document.getElementById(elementId).innerHTML =
      "Los correos especificados no coinciden.";
  }
}

function passwConfirm(pass, confPass, elementId) {
  if (pass == confPass) {
    document.getElementById(elementId).innerHTML = "";
  } else {
    document.getElementById(elementId).innerHTML =
      "Las contraseñas especificadas no coinciden.";
  }
}

function enviarForm(text, elementId, errorMsg) {
  if (text.length < 1) {
    document.getElementById(elementId).innerHTML = errorMsg;
  }
}

const products = [];

function addProduct(name, price, qty) {
  const foundItem = products.find((item) => item.name == name);
  if (foundItem) {
    //si ya esxiste, subir cantidad
    foundItem.qty++;
    localStorage.setItem("cart", JSON.stringify(products)); //guardar productos en local storage
    console.log("añadido objeto existente:", foundItem);
  } else {
    //añadir producto
    const newItem = { name, price, qty };
    products.push(newItem);
    localStorage.setItem("cart", JSON.stringify(products)); //guardar productos en local storage
    console.log("añadido un objeto nuevo:", newItem);
  }
  const msg = document.getElementById("cart-message");
  msg.textContent = `${name} agregado al carrito 🛒`;
  msg.classList.remove("d-none");

  setTimeout(() => {
    msg.classList.add("d-none");
  }, 5000);
  updateCartCount();
}
function updateCartCount() {
  const saved = localStorage.getItem("cart");
  let totalQty = 0;
  if (saved) {
    const items = JSON.parse(saved);
    totalQty = items.reduce((sum, item) => sum + item.qty, 0);
  }
  const countElement = document.getElementById("cart-count");
  if (countElement) {
    countElement.textContent = totalQty;
  }
}

function getCart(elementId) {
  const saved = localStorage.getItem("cart"); // get productos guardados
  if (saved) products.push(...JSON.parse(saved));

  document.getElementById(elementId).innerHTML = "";
  products.forEach((item) => {
    const li = document.createElement("li");
    const total = (item.price * item.qty).toFixed(2);
    li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.qty}`;
    document.getElementById(elementId).appendChild(li);
  });
  console.log(products);
}

function loadItems() {
  const saved = localStorage.getItem("cart"); // get productos guardados
  if (saved) products.push(...JSON.parse(saved));
}
window.onload = () => {
  loadItems();
  updateCartCount();
};
