import {Modal} from './Modal';
export class Button {
  constructor() {

  }
  text() {
    return new Modal({
      confirmButton: 'Yes i agree',
      cancelButton: 'NO never !'
    });
  }
  info() {
    return new Modal({
      title: 'Confirm!',
      content: 'Simple confirm!',
      confirm: function () {
        alert('Confirmed!');
      },
      cancel: function () {
        alert('Canceled!')
      },
      confirmButton: 'Ok',
      cancelButton: 'Cancel',
      confirmButtonClass: 'btn-info',
      cancelButtonClass: 'btn-danger'
    });
  }
  warning() {
    return new Modal({
      title: 'Confirm!',
      content: 'Simple confirm!',
      confirm: function () {
        alert('Confirmed!');
      },
      cancel: function () {
        alert('Canceled!')
      },
      confirmButton: 'Ok',
      cancelButton: 'Cancel',
      confirmButtonClass: 'btn-warning',
      cancelButtonClass: 'btn-success'
    });
  }
}     
     