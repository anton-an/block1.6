
function modalHandler (buttonClass, modalClass, sectionClass) {

  const modalsList = document.querySelectorAll('.modal');
  const buttonsList = document.querySelectorAll('.toggle-modal');
  const sectionsList = document.querySelectorAll('.modal-section');

  const disabled = 'disabled';
  const noscroll = 'noscroll';

  for (let i = 0; i < buttonsList.length; i++) {
    if (buttonsList[i].classList.contains(buttonClass)) {
      buttonsList[i].addEventListener('click', function() {
          toggleModal(modalsList);
          toggleSection(sectionsList);
      });
    };
  };

  function toggleModal (modals) {

    const overlay = document.querySelector('.overlay');
    const page = document.querySelector('.page');

    for (let i = 0; i < modals.length; i++) {

      let currentModal = modals[i];

      function openModal () {
        currentModal.classList.remove(disabled);
        overlay.classList.remove(disabled);
        page.classList.add(noscroll);
      };

      function closeModal () {
        currentModal.classList.add(disabled);
        overlay.classList.add(disabled);
        page.classList.remove(noscroll);
      };

      if (modalClass !== undefined
          && currentModal.classList.contains(modalClass)
          && currentModal.classList.contains(disabled)) {
        openModal();
        page.addEventListener('keydown', function(event){
          if (event.key === "Escape") {
            closeModal();
          };
        });
        overlay.addEventListener('click', function(event){
          closeModal();
        })
      } else if (!currentModal.classList.contains(disabled)) {
        closeModal();
      };

    };
  };

  function toggleSection (sections) {
    for (let i = 0; i < sections.length; i++) {

      let currentSection = sections[i];
      const autoFocused = currentSection.querySelector('.auto-focused');

      if (sectionClass !== undefined
          && currentSection.classList.contains(sectionClass)
          && currentSection.classList.contains(disabled) !== false) {
        currentSection.classList.remove(disabled);
        if (autoFocused !== undefined) {
          autoFocused.focus();
        };
      } else {
        currentSection.classList.add(disabled);
      };
    };
  };

};

modalHandler('button--burger', 'left-sidebar')
modalHandler('button--call', 'right-sidebar', 'call')
modalHandler('button--chat', 'right-sidebar', 'feedback')
modalHandler('button--close')
