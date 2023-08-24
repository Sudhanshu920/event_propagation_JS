document.getElementById('grandParent').addEventListener('click', () => {
  console.log('grandParent Clicked!');
},true);

document.getElementById('parent').addEventListener('click', (e) => {
  console.log('Parent Clicked!');
//   e.stopPropagation();
},false);

document.getElementById('child').addEventListener('click', (e) => {
  console.log('child Clicked!');
  e.stopPropagation();
},false);



// by default third argument is false only.
// first capturing happens then bubbling.
// event propagates till target element in capturing.
// event starts bubbling up from target element in bubbling.