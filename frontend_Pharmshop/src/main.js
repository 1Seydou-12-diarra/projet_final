// $(document).ready(function(){
//     $("#sidebarCollapse").on('click', function(){
//         $("#sidebar").toggleClass('active');
//     });
// });
// // carousel navigation
// let items = document.querySelectorAll('.carousel .carousel-item')

// items.forEach((el) => {
//     const minPerSlide = 4
//     let next = el.nextElementSibling
//     for (var i=1; i<minPerSlide; i++) {
//         if (!next) {
//             // wrap carousel by using first child
//         	next = items[0]
//       	}
//         let cloneChild = next.cloneNode(true)
//         el.appendChild(cloneChild.children[0])
//         next = next.nextElementSibling
//     }
// })
// const container = document.getElementById('cercle');

// document.addEventListener('mousemove', (event) => {
//   const bubble = document.createElement('div');
//   bubble.classList.add('bubble');
//   bubble.style.top = `${event.pageY}px`;
//   bubble.style.left = `${event.pageX}px`;
//   container.appendChild(bubble);

//   setTimeout(() => {
//     bubble.remove();
//   }, 1000);
// });
