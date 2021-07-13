function post (){
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const form = document.getElementById("form");
    const formData = new FormData(form);
/*     新たに生成したFormDataオブジェクトを変数formDataに格納しています。
 */  
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/post", true);
    XHR.responseType = "json";
    XHR.send(forDate);
  });
};

window.addEventListener('load', post);