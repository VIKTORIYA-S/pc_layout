const modal = () => {
  const modalBtn = document.querySelector(".modal__button");
  const modal = document.querySelector(".modal");
  // const modalClose = document.querySelector('.modal__close');
  const courseBtn = document.querySelector(".course__button");

  modalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  courseBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  modal.addEventListener("click", (e) => {
    const modalContent = e.target.closest(".modal__inner");

    if (!modalContent) {
      modal.style.display = "";
    }
  });

  const closeIcon = document.createElement("img");
  closeIcon.src = "./img/vektor.png";
  closeIcon.alt = "Close";
  const modalContent = document.querySelector(".modal__inner");
  modalContent.style.position = "relative";
  closeIcon.style.position = "absolute";
  closeIcon.style.top = "10px";
  closeIcon.style.right = "10px";
  closeIcon.style.width = "30px";
  closeIcon.style.height = "30px";
  closeIcon.style.cursor = "pointer";

  modalContent.appendChild(closeIcon);
  closeIcon.addEventListener("click", () => {
    modal.style.display = "";
  });
};

modal();
