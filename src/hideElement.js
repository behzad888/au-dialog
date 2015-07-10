import {Modal} from './Modal';
export class HideElement {
  constructor() {

  }
  noTitle() {
    return new Modal({
      title: false,
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel'
    });
  }
  noContent() {
    return new Modal({
      title: 'Confirm!',
      content: false,
      confirmButton: 'Ok',
      cancelButton: 'Cancel'
    });
  }
  noTitleCancel() {
    return new Modal({
      title: false,
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: false
    });
  }
  noTitleCancelConfirm() {
    return new Modal({
      title: false,
      content: 'Simple alert!',
      confirmButton: false,
      cancelButton: false
    });
  }
}     
     