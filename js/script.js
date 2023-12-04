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

let optTitlesListSelector= ".titles";

function generateTitleLinks(){
  // [DONE] delate content from links list
  let lista =document.querySelector(optTitlesListSelector);
  lista.innerHTML="";
  // for(let link of linksList_AllPosts){
  //   link.innerHTML="";
    
    
  // }
  
  // [DONE]get "id" attribute from each article 
  
  const titleElements = ".post-title";
  const AllArticles = document.querySelectorAll('.post');
  for(let post of AllArticles){
    let ArticleId = post.getAttribute('id');
    console.log(ArticleId + "ID Article");
    
    // [DONE]find element with title & get innerHTML
    const titleE = post.querySelector( titleElements).innerHTML;
    console.log(titleE);
    
    
    //[IN PROGRES] create "HtmlpostTitle" const with htlm for titles
    let HtmlPostTitle = ArticleId + titleE;
   
    // inject postTitle too list elements
    
    document.querySelector(optTitlesListSelector).innerHTML += "<a href="+"#"+ ArticleId +"><span>"+HtmlPostTitle+"</span></a> ";
    
    } 
    
  }


  generateTitleLinks();




for(let link of linksList_AllPosts){
  link.addEventListener('click', titleClickHandler);
};
