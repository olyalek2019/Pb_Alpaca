let what = document.getElementById("el");
function SHOW(){
	event.preventDefault();
    alert("The right answers: \n"+
    	" 1. Jane Eyre & Pride and Prejudice \n"+
    	"2. The Other Boleyn Girl - Jane Austin \n"+
    	"3. Harpet Li \n"+
    	"4. 7 books");
}

what.addEventListener("click", SHOW);

let content=document.getElementById("cont1");
let content_info=document.getElementById("con1");
function copy_content(){
	content_info.className='to_show';
	setTimeout(function(){
	$('#con1').fadeOut('fast');
	},1000);
}
content.addEventListener("copy", copy_content, true);


let facebook_id=document.getElementById("fa-face");
let face_info=document.getElementById("facebook_info");

let insta_id=document.getElementById("fa-insta");
let insta_info=document.getElementById("insta_info");

let mail_id=document.getElementById("fa-poshta");
let mail_info=document.getElementById("mail_info");

let whatsapp_id=document.getElementById("fa-whatsapp");
let whatsapp_info=document.getElementById("whatsapp_info");

let twitter_id=document.getElementById("fa-twitter");
let twitter_info=document.getElementById("twitter_info");

let amazon_id=document.getElementById("fa-amazon");
let amazon_info=document.getElementById("amazon_info");

let youtube_id=document.getElementById("fa-youtube");
let youtube_info=document.getElementById("youtube_info");

function face_show(e){
	face_info.className='to_show';
}
function face_hide(e){
	face_info.className='to_hide';
}
function insta_show(e){
	insta_info.className='to_show';
}
function insta_hide(e){
	insta_info.className='to_hide';
}
function mail_show(e){
	mail_info.className='to_show';
}
function mail_hide(e){
	mail_info.className='to_hide';
}
function whatsapp_show(e){
	whatsapp_info.className='to_show';
}
function whatsapp_hide(e){
	whatsapp_info.className='to_hide';
}
function twitter_show(e){
	twitter_info.className='to_show';
}
function twitter_hide(e){
	twitter_info.className='to_hide';
}
function amazon_show(e){
	amazon_info.className='to_show';
}
function amazon_hide(e){
	amazon_info.className='to_hide';
}
function youtube_show(e){
	youtube_info.className='to_show';
}
function youtube_hide(e){
	youtube_info.className='to_hide';
}
facebook_id.addEventListener("mouseover", face_show, true);
facebook_id.addEventListener("mouseout", face_hide, true);

insta_id.addEventListener("mouseover", insta_show, true);
insta_id.addEventListener("mouseout", insta_hide, true);

mail_id.addEventListener("mouseover", mail_show, true);
mail_id.addEventListener("mouseout", mail_hide, true);

whatsapp_id.addEventListener("mouseover", whatsapp_show, true);
whatsapp_id.addEventListener("mouseout", whatsapp_hide, true);

twitter_id.addEventListener("mouseover", twitter_show, true);
twitter_id.addEventListener("mouseout", twitter_hide, true);

amazon_id.addEventListener("mouseover", amazon_show, true);
amazon_id.addEventListener("mouseout", amazon_hide, true);

youtube_id.addEventListener("mouseover", youtube_show, true);
youtube_id.addEventListener("mouseout", youtube_hide, true);