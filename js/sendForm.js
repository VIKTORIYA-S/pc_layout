const sendForm = () => {
  const form = document.querySelector(".modal");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("ok");

    const text = form.querySelector("input[type=text]");
    const tel = form.querySelector("input[type=tel]");
    const email = form.querySelector("input[type=email]");

    console.log(text.value);
    console.log(tel.value);
    console.log(email.value);

    const sendObj = {
      name: text.value,
      phone: tel.value,
      email: email.value,
    };

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(sendObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        alert("Форма успешно отправлена!");
      })
      .catch((error) => {
        console.error("Ошибка при отправке:", error);
        alert("Произошла ошибка при отправке формы. Попробуйте позже.");
      })

      .finally(() => {
        text.value = "";
        tel.value = "";
        email.value = "";
      });
  });
};

sendForm();
