'use strict';
const linksList_AllPosts = document.querySelectorAll('.titles a');
const activeLinks = document.querySelectorAll('.titles a.active');
const activeArticles = document.querySelectorAll('.posts .active');



function titleClickHandler(event){
     /* remove class 'active' from all article links  */
     for(let link of activeLinks){
      console.log(link);
      link.classList.remove("active");
  }
     console.log(event);
  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */
  for(let post of activeArticles){
    console.log(post);
    post.classList.remove("active");
}
  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */


}


for(let link of linksList_AllPosts){
  link.addEventListener('click', titleClickHandler);
};
