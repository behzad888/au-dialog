import {Modal} from './Modal';
export class CustomWidth {
  constructor() {

  }
  colmd4() {
    return new Modal({
      title: 'Sample Title!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel', 
      columnClass:"col-md-4"
    });
  }
  colmd12() {
    return new Modal({
      title: 'Sample Title!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel', 
      columnClass:"col-md-12"
    });
  }
  colmd8() {
    return new Modal({
      title: 'Sample Title!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel', 
      columnClass:"col-md-8"
    });
  }
  colmd62() {
    return new Modal({
      title: 'Sample Title!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel', 
      columnClass:"col-md-6 col-md-offset-6 col-md-2"
    });
  }
}     
     