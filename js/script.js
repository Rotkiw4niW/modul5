'use strict';
const linksList_AllPosts = document.querySelectorAll('.titles a');




function titleClickHandler(event){
     /* remove class 'active' from all article links  */

     console.log(event);
  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */


}



for(let link of linksList_AllPosts){
    console.log(link);
    link.addEventListener('click', titleClickHandler);
};
