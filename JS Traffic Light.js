let lightOne = document.getElementById("light-one");
let lightTwo = document.getElementById("light-two");
let lightThree = document.getElementById("light-three");
let yellow =window.getComputedStyle(lightOne).getPropertyValue('background-Color');
let green = window.getComputedStyle(lightTwo).getPropertyValue('background-Color');
let red = window.getComputedStyle(lightThree).getPropertyValue('background-Color');

lightOne.style.backgroundColor = red;
lightTwo.style.backgroundColor = yellow;
lightThree.style.backgroundColor = green;
