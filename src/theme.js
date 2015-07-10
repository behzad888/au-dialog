import {Modal} from './Modal';
export class Theme {
  constructor() {

  }
  white() {
    return new Modal({
      title: "Title Sample!",
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel',
      theme: "white"
    });
  }
  black() {
    return new Modal({
      title: "Title Sample!",
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel',
      theme: "black"
    });
  }
  hololight() {
    return new Modal({
      title: "Title Sample!",
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel',
      theme: "hololight"
    });
  }
  holodark() {
    return new Modal({
      title: "Title Sample!",
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel',
      theme: "holodark"
    });
  }
  supervan() {
    return new Modal({
      title: "Title Sample!",
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel',
      theme: "supervan",
      animation: "scalex"
    });
  }
}     
     