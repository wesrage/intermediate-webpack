import { STEP } from './dashboard';

if (module.hot) {
    module.hot.accept('./dashboard', () => {
        console.log('New step:', STEP);
    });
}
