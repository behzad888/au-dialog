import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {


	configureRouter(config, router) {
		config.title = 'Contacts';
		config.map([
			{ route: '', moduleId: 'dialog', title: 'Quick Satrt' },
			{ route: 'buttons', moduleId: 'buttons', title: 'BUTTONS' },
			{ route: 'hideelem', moduleId: 'hideElement', title: 'Hide Elements' },
			{ route: 'theme', moduleId: 'theme', title: 'Theme' },
			{ route: 'customwidth', moduleId: 'customWidth', title: 'CustomWidth' },
			{ route: 'animations', moduleId: 'animation', title: 'Animations' },
			{ route: 'autoclose', moduleId: 'autoClose', title: 'AutoClose' },
			{ route: 'icons', moduleId: 'icons', title: 'Icons' },
			{ route: 'keyboard', moduleId: 'keyboard', title: 'Keyboard Actions' }
		]);

		this.router = router;
	}
}