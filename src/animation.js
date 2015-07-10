import {Modal} from './Modal';
export class Animation {
  constructor() {

  }
  scale() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"scale"
      
    });
  }
   top() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"top"
      
    });
  }
  bottom() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"bottom"
      
    });
  }
  left() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"left"
      
    });
  }
    right() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"right"
      
    });
  }
   zoom() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"zoom"
      
    });
    }
   opacity() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"opacity"
      
    });
  }
  none() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"none"
      
    });
   }
   rotate() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"rotate"
      
    });
  }
   rotatex() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"rotatex"
      
    });
  }
  rotatey() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"rotatey"
      
    });
   }
  scalex() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"scalex"
      
    });
  }
   scaley() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"scaley"
      
    });
  }
  slow() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"zoom",
      animationSpeed: 800
   
    });
  }
     fast() {
    return new Modal({
      title: 'Title Sample!',
      content: 'Simple alert!',
      confirmButton: 'Ok',
      animation:"zoom",
      animationSpeed: 50   
    });
    }
     bounce() {
       return new Modal({
         title: 'Title Sample!',
         content: 'Simple alert!',
         confirmButton: 'Ok',
         animation: "scalex",
         animationBounce : 5
       });
     }
}     
     