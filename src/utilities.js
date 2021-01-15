export const utilities = {
  modalListener() {
    let modalTriggers = document.querySelectorAll('.modal-trigger');
    let modalCloseBtns = document.querySelectorAll('[close-modal]');
    console.log(modalCloseBtns);

    modalTriggers.forEach((e) => {
      e.addEventListener('click', function () {
        document.querySelectorAll('.custom-modal-wrapper.open').forEach((e) => {
          e.id !== 'modalCard' && e.classList.remove('open');
        });

        let modal = document.getElementById(
          `${e.getAttribute('target-modal')}`
        );
        modal.classList.add('open');
      });
    });

    modalCloseBtns.forEach((e) => {
      e.addEventListener('click', function () {
        let modal = document.getElementById(`${e.getAttribute('close-modal')}`);
        modal.classList.remove('open');
      });
    });
  },

  modalFeedbackSent() {
    let sendFeedbackBtn = document.querySelectorAll('.send-feedback-modal');

    if (sendFeedbackBtn) {
      sendFeedbackBtn.forEach((e) => {
        e.addEventListener('click', function () {
          let modal = this.parentElement.parentElement;
          let body = modal.querySelector('.custom-modal-body');
          let successMessage = modal.querySelector('.success-message');
          successMessage.style.maxHeight = `${
            body.clientHeight /
            parseFloat(getComputedStyle(document.documentElement).fontSize)
          }em`;
          modal.classList.add('success');
        });
      });
    }
  },
};
