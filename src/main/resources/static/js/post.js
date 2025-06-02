function post(){
  const submit = document.getElementById("submit_btn");
  const form = document.getElementById("new_article");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(form);
  })
}

window.addEventListener("load", post)