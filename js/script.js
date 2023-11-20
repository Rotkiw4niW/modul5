'use strict';
const linksList_AllPosts = document.querySelectorAll('.titles a');



function titleClickHandler(event){
  event.preventDefault();
  const activeLinks = document.querySelectorAll('.titles a.active');
const activeArticles = document.querySelectorAll('.posts .active');

  const clickedElement = this;
     /*[DONE] remove class 'active' from all article links  */
     for(let link of activeLinks){
      console.log(link);
      link.classList.remove('active');
  }
     console.log(event);
  /* [DONE]add class 'active' to the clicked link */
console.log('clickedElement', clickedElement);
clickedElement.classList.add('active')
  /* [DONE]remove class 'active' from all articles */
  for(let post of activeArticles){
    console.log(post);
    post.classList.remove('active');
}
  /*[DONE] get 'href' attribute from the clicked link */
const linkHrefAtribute = this.getAttribute("href").replace(/[#]/g, '');
console.log(linkHrefAtribute);
  /* [IN PROGRES]find the correct article using the selector (value of 'href' attribute) */
const clickedArticle = document.getElementById(linkHrefAtribute);
  /* add class 'active' to the correct article */
clickedArticle.classList.add('active');

}


for(let link of linksList_AllPosts){
  link.addEventListener('click', titleClickHandler);
};
