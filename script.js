
    var posts=[ 
              { "title":"Kukeri is Awesome", "content":"The dance of the masked people is a mystic unity of rhythm, sound, and color. They move in special rhythmic steps. ", "imageurl":"pic1.png" },
              { "title":"Kukeri is a Dance", "content":" They fill the air with the sounds of their bells and of whispered blessings for prosperity. The costumes cover most of the body and include decorated wooden masks of animals (sometimes double-faced) and large bells attached to the belt. ", "imageurl":"pic2.png" },
              { "title":"Kukeri is a Culture", "content":"The custom is spread all over the South and Central Europe - in Romania, Moldova, Serbia, Greece, Northern Macedonia, Slovenia, Croatia, Bulgaria ", "imageurl":"pic3.png" } ]


var postTitle=document.getElementById('postTitle');
var postDescription=document.getElementById('postDescription');
var postImg=document.getElementById('postImg');
var currentIndex;
init();

function init(){
 currentIndex=0;
 postTitle.innerHTML=posts[currentIndex].title;
 postDescription.innerHTML=posts[currentIndex].content;
 postImg.src=posts[currentIndex].imageurl;
}
function next(){
 if(currentIndex >=0){
    currentIndex+=1
    postTitle.innerHTML=posts[currentIndex].title;
    postDescription.innerHTML=posts[currentIndex].content;
    postImg.src=posts[currentIndex].imageurl;
 }
 
}
function prev(){
    if(currentIndex >0){
    currentIndex-=1
 postTitle.innerHTML=posts[currentIndex].title;
 postDescription.innerHTML=posts[currentIndex].content;
 postImg.src=posts[currentIndex].imageurl;
    }
}

