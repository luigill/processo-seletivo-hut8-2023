import loja from "../../images/loja.json" assert { type: "json" };

const items = loja.items;

const containerCamisetas = document.getElementById("shirt-container");

const buttonLogin = document.getElementById("login-btn");

const overlay = document.getElementById("overlay");

items.forEach((item) => {
  const div = document.createElement("div");
  div.classList.add("item");
  div.innerHTML = `
      <div class="item-image">
        <img src="../${item.imagem}" alt="../${item.nome}" />
        <div class="btn-container">
          <button
          class = "btn"
           data-action="decrement" data-target = "count${item.id}">-</button>
          <p id="count${item.id}">0</p>
          <button
          class = "btn" 
          data-action="increment" data-target = "count${item.id}">+</button>
        </div>
      </div class="item-description">
        <h3>${item.nome}</h3>
        <p> R$${item.preco.toFixed(2)}</p>
      </div>
  `;
  containerCamisetas.appendChild(div);
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const target = e.target;
    const action = target.dataset.action;
    const id = target.dataset.target;
    const count = document.getElementById(id);
    const value = Number(count.textContent);

    if (action === "increment") {
      count.textContent = value + 1;
    } else if (action === "decrement" && value > 0) {
      count.textContent = value - 1;
    }
  });
});

function showLoginModal() {
  const loginModal = document.getElementById("login-modal");
  const overlay = document.getElementById("overlay");
  loginModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hideLoginModal() {
  const loginModal = document.getElementById("login-modal");
  const overlay = document.getElementById("overlay");
  loginModal.classList.add("hidden");
  overlay.classList.add("hidden");
}

buttonLogin.addEventListener("click", (event) => {
  // retira o comportamento padrão do a
  event.preventDefault();
  showLoginModal();
});

overlay.addEventListener("click", () => {
  hideLoginModal();
});
