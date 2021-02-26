// ツイート処理
const tweetButton = document.getElementById('js-tweet');
tweetButton.addEventListener('click', () => {
  const name = document.createElement('p');
  name.setAttribute('class', 'user_name');
  name.innerHTML = 'george';

  const text = document.createElement('p');
  text.setAttribute('class', 'user_text');
  const textArea = document.getElementById('js-textarea');
  text.innerHTML = textArea.value;

  const inner = document.createElement('div');
  //TODo 子要素追加 inner.appendChild();
  // inner.appendChild();

  const img = document.createElement('img');
  img.setAttribute('class', 'user_img');
  img.setAttribute('src', './assets/images/user.png');

  const card = document.createElement('div');
  card.setAttribute('class', 'user_card');


  const home = document.getElementById('js-home');
  home.insertAdjacentElement('afterbegin', card);
})

{/* <div class="user_card">
<img class="user_img" src="./assets/images/user.png" alt="">
<div class="user_inner">
  <p class="user_name">john</p>
  <p class="user_text">hello :)</p>
</div>
</div> */}
