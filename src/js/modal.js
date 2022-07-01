
//Нажимаю на кнопку меню/обратной связи/звонка
//Открывается соотв. модальное окно, в котором открывается нужная секция

//Сохраняю все кнопки с модалками в один nodelist


function modalHandler () {

  const burgerButtons = document.querySelectorAll('.button--burger');
  const feedbackButtons = document.querySelectorAll('.button--chat');
  const callButtons = document.querySelectorAll('.button--call');
  const leftModal = document.querySelector('.left-modal');
  const rightModal = document.querySelector('.right-modal');
  const closeButtons = document.querySelectorAll('.button--close')
  const overlay = document.querySelector('.overlay');
  const feedbackSection = document.querySelector('.feedback');
  const callSection = document.querySelector('.call');
  const page = document.querySelector('.page');
  const feedbackNameInput = feedbackSection.querySelector('.feedback__name-input');
  const callTelInput = callSection.querySelector('.call__tel-input');

  const disabled = 'disabled';
  const noscroll = 'noscroll';

  overlay.addEventListener('click', function() {
    if (!rightModal.classList.contains(disabled)) {
      rightModal.classList.add(disabled)
      overlay.classList.add(disabled)
      page.classList.remove(noscroll)
    } else if (!leftModal.classList.contains(disabled)) {
      leftModal.classList.add(disabled)
      overlay.classList.add(disabled)
      page.classList.remove(noscroll)
    }
  });

  function buttonsHandler(buttons) {
    for (let i = 0; i < buttons.length; i++) {
      if (buttons === burgerButtons) {
        buttons[i].addEventListener('click', function() {
          leftModal.classList.remove(disabled)
          overlay.classList.remove(disabled)
          page.classList.add(noscroll)
        });
      } else if (buttons === feedbackButtons) {
        buttons[i].addEventListener('click', function() {
          if (!leftModal.classList.contains(disabled)) {
            leftModal.classList.add(disabled)
          }
          rightModal.classList.remove(disabled)
          feedbackSection.classList.remove(disabled)
          feedbackNameInput.focus()
          callSection.classList.add(disabled)
          overlay.classList.remove(disabled)
          page.classList.add(noscroll)
        });
      } else if (buttons === callButtons) {
        buttons[i].addEventListener('click', function() {
          if (!leftModal.classList.contains(disabled)) {
            leftModal.classList.add(disabled)
          }
          rightModal.classList.remove(disabled)
          callSection.classList.remove(disabled)
          callTelInput.focus()
          feedbackSection.classList.add(disabled)
          overlay.classList.remove(disabled)
          page.classList.add(noscroll)
        });
      } else if (buttons === closeButtons) {
        buttons[i].addEventListener('click', function() {
          if (!rightModal.classList.contains(disabled)) {
            rightModal.classList.add(disabled)
            overlay.classList.add(disabled)
            page.classList.remove(noscroll)
          } else if (!leftModal.classList.contains(disabled)) {
            if (!leftModal.classList.contains(disabled)) {
              leftModal.classList.add(disabled)
              page.classList.remove(noscroll)
            }
            leftModal.classList.add(disabled)
            overlay.classList.add(disabled)
            page.classList.remove(noscroll)
          }
        });
      };
    };
  };

  buttonsHandler(burgerButtons);
  buttonsHandler(feedbackButtons);
  buttonsHandler(callButtons);
  buttonsHandler(closeButtons);
}
modalHandler();
