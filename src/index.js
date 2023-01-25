//src/index.js
import styles from './style.css';
import buttonStyles from './button.css';
import Icon from './flowers.jpg';
import {createImage} from './createImage.js';
const myImage=createImage(Icon);
console.log(Icon);
/*const test=()=>{
    console.log('test it');
};test();*/

const addButton=()=>{
    const button=document.createElement('button');
    button.textContent='Click me';
    document.body.appendChild(button);
    document.body.appendChild(myImage);
};
addButton();