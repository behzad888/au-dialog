import {Modal} from './Modal';
export class AutoClose {
  constructor() {

  }
  autocancel() {
    return new Modal({
      title: 'Sample Title!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel', 
	  autoClose : "cancel|10000"
    });
  } 
  autook() {
    return new Modal({
      title: 'Sample Title!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel', 
	  autoClose : "confirm|10000"
    });
  } 
}     
     