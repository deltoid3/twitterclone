// ツイート処理
const tweetButton = document.getElementById('js-tweet');
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
