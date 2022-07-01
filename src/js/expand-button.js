
const aboutExpandButton = document.querySelector('.about__expand-button');
const brandsExpandButton = document.querySelector('.brands__expand-button');
const devicesExpandButton = document.querySelector('.devices__expand-button');
const aboutText = document.querySelector('.about__text');
const expanded = 'expanded';
const reversedExpandButton = 'expand-button--reversed';
const expandedBrands = 'brands__slider--expanded';
const expandedDevices = 'devices__slider--expanded';
const brandsSlider = document.querySelector('.brands__slider');
const devicesSlider = document.querySelector('.devices__slider');

aboutExpandButton.addEventListener('click', function () {
  if (!aboutText.classList.contains(expanded)) {
    aboutText.classList.add(expanded)
    aboutExpandButton.classList.add(reversedExpandButton)
  } else {
    aboutText.classList.remove(expanded)
    aboutExpandButton.classList.remove(reversedExpandButton)
  }
});

brandsExpandButton.addEventListener('click', function () {
  if (!brandsSlider.classList.contains(expandedBrands)) {
    brandsSlider.classList.add(expandedBrands)
    brandsExpandButton.classList.add(reversedExpandButton)
  } else {
    brandsSlider.classList.remove(expandedBrands)
    brandsExpandButton.classList.remove(reversedExpandButton)
  }
});

devicesExpandButton.addEventListener('click', function () {
  if (!devicesSlider.classList.contains(expandedDevices)) {
    devicesSlider.classList.add(expandedDevices)
    devicesExpandButton.classList.add(reversedExpandButton)
  } else {
    devicesSlider.classList.remove(expandedDevices)
    devicesExpandButton.classList.remove(reversedExpandButton)
  }
});
