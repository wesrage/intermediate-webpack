import logoImage from './img/logo.png';
import styles from './css/main.scss';

const logo = document.createElement('img');
logo.src = logoImage;
logo.className = styles.logo;
document.body.appendChild(logo);
