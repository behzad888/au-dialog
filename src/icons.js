import {Modal} from './Modal';
export class Icons {
  constructor() {

  }
  glyphicon() {
    return new Modal({
      icon: 'glyphicon glyphicon-heart',
      title: 'Sample Title!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel'

    });
  }
  fontAwesome() {
    return new Modal({
      icon: 'fa fa-warning',
      title: 'Sample Title!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel'
    });
  }
  animfontAwesome() {
    return new Modal({
      icon: 'fa fa-spinner fa-spin',
      title: 'Sample Title!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      cancelButton: 'Cancel'
    });
  }
}     
     