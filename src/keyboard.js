import {Modal} from './Modal';
export class Keyboard {
	constructor() {

	}
	keyboard() {
		return new Modal({
			keyboardEnabled: true,
			icon: 'glyphicon glyphicon-heart',
			title: 'Sample Title!',
			content: 'Press ESC or ENTER to see it in action.',
			confirmButton: 'Ok',
			cancelButton: 'Cancel',
			cancel: function () {
				alert('canceled');
			},
			confirm: function () {
				alert('confirmed');
			}
		});
	}
}