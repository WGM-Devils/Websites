function submitLogin() {
  fetch(
    "https://b0fc8dd9-5d36-49bb-a59b-82f1a484f310-00-1dnjn7p68t02k.global.replit.dev/auth/login",
    {
      method: "POST",
      body: JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "KlingtGut",
      },
    }
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return console.log(response.json());
      }
    })
    .then((data) => {
      if (data.ok) {
        window.location.href = "/home";
        window.localStorage.setItem("token", data.ok);
      }
    });
}
