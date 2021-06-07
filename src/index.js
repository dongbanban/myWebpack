/*
 * @Author: your name
 * @Date: 2021-06-07 10:55:41
 * @LastEditTime: 2021-06-07 18:48:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \coded:\myWebpack\src\index.js
 */

import './index.less'
import Logo from './assets/logo.png'

class A {

}
console.log(A);

console.log(window?.location)

function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello1222 webpack';
    const myLogo = new Image();  
    myLogo.src = Logo;  
    element.appendChild(myLogo);
    return element;
}

document.body.appendChild(component());