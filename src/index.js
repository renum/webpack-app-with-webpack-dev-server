//src/index.js
import styles from './style.css';
/*const test=()=>{
    console.log('test it');
};test();*/

const addButton=()=>{
    const button=document.createElement('button');
    button.textContent='Click me';
    document.body.appendChild(button);
};
addButton();