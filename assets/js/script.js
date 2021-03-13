// 要素取得
const tweetButton = document.getElementById('js-tweet');
const homeButton = document.getElementById("js-homeBtn");
const writeButton = document.getElementById("js-write");
const home = document.getElementById("js-home");
const article = document.getElementById("js-article");
const cancel = document.getElementById("js-cancel");


// ツイート処理
tweetButton.addEventListener('click', () => {
  const name = document.createElement('p');
  name.setAttribute('class', 'user_name');
  name.innerHTML = 'george';

  const text = document.createElement('p');
  const textArea = document.getElementById('js-textarea');
  text.setAttribute('class', 'user_text');
  text.innerHTML = textArea.value;

  const inner = document.createElement('div');
  inner.setAttribute('class', 'user_inner');
  inner.appendChild(name);
  inner.appendChild(text);

  const img = document.createElement('img');
  img.setAttribute('class', 'user_img');
  img.setAttribute('src', './assets/images/user.png');

  const card = document.createElement('div');
  card.setAttribute('class', 'user_card');
  card.appendChild(img);
  card.appendChild(inner);

  const home = document.getElementById('js-home');
  home.insertAdjacentElement('afterbegin', card);
})


// 画面切り替え
homeButton.addEventListener("click", () =>{
  home.style.display = "block";
  article.style.display = "none";
})

writeButton.addEventListener("click", () =>{
  home.style.display = "none";
  article.style.display = "block";
})

cancel.addEventListener("click", () =>{
  home.style.display = "block";
  article.style.display = "none";
})

tweetButton.addEventListener("click", () =>{
  home.style.display = "block";
  article.style.display = "none";
})


window.onload = function(){

  var now = null,
        max = 140,
        input_area = document.getElementById("js-textarea"),
        output_area = document.getElementById("js-text_length");

  input_area.onkeyup = function(){
    now = ( max - input_area.value.length );
    output_area.innerText = now;
    output_area.className = ( now < 0 ) ? "out" : "";
  }
}
