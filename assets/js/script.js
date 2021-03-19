// 要素取得
const tweetButton = document.getElementById('js-tweet');
const homeButton = document.getElementById("js-homeButton");
const writeButton = document.getElementById("js-writeButton");
const home = document.getElementById("js-home");
const article = document.getElementById("js-article");
const cancel = document.getElementById("js-cancel");
const textarea = document.getElementById("js-textarea");
const textLength = document.getElementById("js-text_length");


// ツイート処理
tweetButton.addEventListener('click', () => {
  const name = document.createElement('p');
  name.setAttribute('class', 'user_name');
  name.innerHTML = 'me';

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

const countText = () => {
  const max = 140;
  const now = (max - textarea.value.length);
  textLength.innerText = now + " / " + max;
  if(now < 0 ) {
    tweetButton.style.display = "none";
  } else {
    tweetButton.style.display = "block";
  }
}

textarea.addEventListener("input", countText);


// 画面切り替え
homeButton.addEventListener("click", () => {
  article.style.display = "none";
  home.style.display = "block";
})

writeButton.addEventListener("click", () => {
  home.style.display = "none";
  article.style.display = "block";
})

cancel.addEventListener("click", () => {
  textarea.value = "";
  countText();
  home.style.display = "block";
  article.style.display = "none";
})

tweetButton.addEventListener("click", () => {
  textarea.value = "";
  countText();
  home.style.display = "block";
  article.style.display = "none";
})
