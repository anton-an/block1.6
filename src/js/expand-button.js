
function expand () {
  const expandButtons = document.querySelectorAll('.expand-button')
  const collapsible = '.collapsible'
  const expanded = 'expanded'
  const reversedExpandButton = 'expand-button--reversed'


  for (let i = 0; i < expandButtons.length; i++) {
    const collapsibleElem = expandButtons[i].parentElement.querySelector(collapsible)
    const buttonText = 'Показать всё'
    const buttonTextExpanded = 'Скрыть'
    expandButtons[i].addEventListener('click', function() {
      if (!collapsibleElem.classList.contains(expanded)) {
        collapsibleElem.classList.add(expanded)
        expandButtons[i].classList.add(reversedExpandButton)
        expandButtons[i].textContent = buttonTextExpanded
      } else {
        collapsibleElem.classList.remove(expanded)
        expandButtons[i].classList.remove(reversedExpandButton)
        expandButtons[i].textContent = buttonText
      }
    });
  };
};

expand();
