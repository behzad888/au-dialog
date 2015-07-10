import {Modal} from './Modal';
export class Dialog {
  constructor() {

  }
  ok() {
    return new Modal({
      title: 'Alert',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      confirm: function () {
        alert('Confirmed!');
      }
    });
  }
  okCancell() {
    return new Modal({
      title: 'Confirm!',
      content: 'Simple confirm!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel',
      confirm: function () {
        alert('Confirmed!');
      },
      cancel: function () {
        alert('Canceled!')
      }
    });
  }
  noButton() {
    return new Modal({
      title: 'Text content!',
      content: 'Simple modal!',
    });
  }
}     
     