/* Это ваш третий проект, который направлен на отработку навыков разработки на JavaScript.

В рамках этого проекта вам нужно сделать слайдер* для сайта. Это автономная часть которую можно в дальнейшем внедрить в рабочий сайт. 

Ваша основная задача — преобразовать внешний вид сайта, так чтобы на нем менялись изображения и информация об объекте. Примерный вариант решения задачи можно посмотреть здесь.

Откройте и изучите макет.

Управляющие элементы, которые вам нужно установить и которые являются условиями проекта:

Стрелки (переключают слайды по кольцу. То есть после слайда №3 снова пойдет слайд №1);
Кружочки между стрелками (включают нужный слайд);
Ссылки сверху слайдера (включают нужный слайд). */

const arrows = document.querySelectorAll(".comproj_info_slaider_vector");
const projects = document.querySelector(".comproj_content_list");
const projectsArr = document.querySelectorAll(".comproj_content_link");
const dots = document.querySelector(".comproj_info_slaider_list");
const dotsArr = document.querySelectorAll(".comproj_info_slaider_circle");
const images = document.querySelector(".comproj_content_image_div");
const imagesArr = images.querySelectorAll(".comproj_content_image");
initArrows();
codeOptimization(dotsArr, dots, "dot-active");//initDots
codeOptimization(projectsArr, projects, "project-active");//initProj
// initDots();
// initProj();

function initArrows(){
    arrows.forEach(arrow =>{
        arrow.addEventListener("click",()=>{
            let curNumber = +images.querySelector(".active").dataset.index;
            let nextNumber; 
            if(arrow.classList.contains("left")){
                nextNumber =  curNumber === 0 ? imagesArr.length - 1 : curNumber - 1;
            } else{
                nextNumber = curNumber === imagesArr.length - 1 ? 0 : curNumber + 1;
            }
            moveSlider(nextNumber)
        })

    })
}

function codeOptimization(arr, itemNode, activeClass){
    arr.forEach(itemArr =>{
        itemArr.addEventListener("click",()=>{
            itemNode.querySelector(`.${activeClass}`).classList.remove(`${activeClass}`);
            itemArr.classList.add(`${activeClass}`);
            let nextNumber = +itemNode.querySelector(`.${activeClass}`).dataset.index;
            moveSlider(nextNumber);
        });
    })
}
// function initDots(){
//     dotsArr[0].addEventListener("click",()=>{
//         dots.querySelector(".dot-active").classList.remove("dot-active");
//         dotsArr[0].classList.add("dot-active");
//         let nextNumber = +dots.querySelector(".dot-active").dataset.index;
//         moveSlider(nextNumber);
//     });
//     dotsArr[1].addEventListener("click",()=>{
//         dots.querySelector(".dot-active").classList.remove("dot-active");
//         dotsArr[1].classList.add("dot-active");
//         let nextNumber = +dots.querySelector(".dot-active").dataset.index;
//         moveSlider(nextNumber);
//     });
            
//     dotsArr[2].addEventListener("click",()=>{
//         dots.querySelector(".dot-active").classList.remove("dot-active");
//         dotsArr[2].classList.add("dot-active");
//         let nextNumber = +dots.querySelector(".dot-active").dataset.index;
//         moveSlider(nextNumber);
//     });
// }
// function initProj(){
//     projectsArr[0].addEventListener("click",()=>{
//         projects.querySelector(".project-active").classList.remove("project-active");
//         projectsArr[0].classList.add("project-active");
//         let nextNumber = +projects.querySelector(".project-active").dataset.index;    
//         moveSlider(nextNumber);
//     });
//     projectsArr[1].addEventListener("click",()=>{
//         projects.querySelector(".project-active").classList.remove("project-active");
//         projectsArr[1].classList.add("project-active");
//         let nextNumber = +projects.querySelector(".project-active").dataset.index;
//         moveSlider(nextNumber);
//     });
        
//     projectsArr[2].addEventListener("click",()=>{
//         projects.querySelector(".project-active").classList.remove("project-active");
//         projectsArr[2].classList.add("project-active");
//         let nextNumber = +projects.querySelector(".project-active").dataset.index;
//         moveSlider(nextNumber);
//     });
// }

function moveSlider(num){
        images.querySelector(".active").classList.remove("active");
        images.querySelector(".n" + num).classList.add("active");
        dots.querySelector(".dot-active").classList.remove("dot-active");
        dots.querySelector(".n" + num).classList.add("dot-active");
        projects.querySelector(".project-active").classList.remove("project-active");
        projects.querySelector(".n" + num).classList.add("project-active");
        
}
