AOS.init();
const projectContainer = document.querySelectorAll('.card');
// console.log('projectContainer', projectContainer)

// const hoverFunc = () => {
//   project.classList.toggle('large');
// }
// projectContainer.addEventListener('mouseout', hoverFunc);

projectContainer.forEach(project=> {
  project.addEventListener('mouseover', ()=> {
    console.log('mouseover')
    project.classList.toggle('large')
  });
  project.addEventListener('mouseout', ()=> {
    console.log('mouseout')
    project.classList.toggle('large')
  });

})



