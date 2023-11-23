'use strict';
const linksList_AllPosts = document.querySelectorAll('.titles a');


function titleClickHandler(event){
  console.log("ki");
  event.preventDefault(); //blokowanie domyślnej akcji (nie przeładowuje strony)
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
  /* [DONE]find the correct article using the selector (value of 'href' attribute) */
const clickedArticle = document.getElementById(linkHrefAtribute);
  /* [DONE]add class 'active' to the correct article */
clickedArticle.classList.add('active');

}


const AllArticles = document.querySelectorAll('.post');
const titleElements = document.querySelectorAll('.post-title');


function generateTitleLinks(){
// [DONE] delate content from links list
for(let link of linksList_AllPosts){
  link.innerHTML="";

  
  // [DONE]get "id" attribute from each article 
  for(let post of AllArticles){
    let ArticleId = post.getAttribute('id');
    console.log(ArticleId);
    
  }
  
  // [DONE]find element with title & get innerHTML
  for(let title of titleElements){
    let titleFromElement = title.innerHTML;
    console.log(titleFromElement);
    
    //[IN PROGRES] create "postTitle" const with htlm for titles
    let HtmlPostTitle = titleFromElement;
    console.log("tytuł" + HtmlPostTitle);
  }
// inject postTitle too list elements

  }

}

for(let link of linksList_AllPosts){
  link.addEventListener('click', titleClickHandler);
};
