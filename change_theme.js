let buttom=document.getElementById("theme_butm");
let light=true;

let dark={
	body:"rgb(219,236,231)",
	picture:"rgba(0, 0, 0, 0) url('head33.png')scroll  0% 0%",
	back_rep:"round",
	text__h2:"rgb(219, 40, 99)",
	content_back:"rgb(177,215,205)",
	sel:"0 2px 1px 2px rgb(150,199,184,0.5)",
	nav:"rgb(65, 124,108)",
	sidebar:"rgb(248,209,222)",
	title:"rgb(219, 40, 99)",
	title_shadow:"rgb(0,0,0) 4px 4px 3px",
	change:"rgb(25,83,66,0.6)",
	change_shadow:"0 0 0 0",
	margin:"15vw", 
	buttoms: "rgb(219,236,231)",
	pos:"center"
}
let lights={
	body:"rgb(254,238,237)",
	picture:"rgba(0, 0, 0, 0) url('heads.png')scroll  0% 0%",
	back_rep:"round",
	text__h2:"rgb(255,111,147)",
	content_back:"rgb(191, 225, 238)",
	sel:"0 2px 1px 2px rgba(121,192,223,0.5)",
	nav:"rgb(50,153,192)",
	sidebar:"rgb(255,223,221)",
	title:"rgb(139, 191, 211)",
	title_shadow:"rgb(0,0,0) 2px 2px 3px",
	change:"rgba(121,192,223, 0.6)",
	change_shadow:"2px 2px 2px 4px rgba(121,192,223,0.5)",
	margin:"0",
	buttoms:"rgb(221, 239, 247)",
	pos:"right"
}
 function clicking(dark){
	let this_body=document.getElementsByTagName('BODY')[0];
	this_body.style.backgroundColor=dark.body;

	let alpaca_back=document.getElementsByClassName("inner-header")[0];
	alpaca_back.style.background=dark.picture;
	alpaca_back.style.backgroundRepeat=dark.back_rep;

	let wrapper=document.getElementById("cont1");
	let text_h2=wrapper.getElementsByClassName("text_h2");
	let select=wrapper.getElementsByClassName("selection");
	let i;
	let inner_content=wrapper.getElementsByClassName("inner-content");
	let subm=wrapper.getElementsByClassName("subm_buttom");
	for(i=0; i<text_h2.length; i++){
		text_h2[i].style.background=dark.text__h2;
	}
	for(i=0;i<inner_content.length;i++){
		inner_content[i].style.background=dark.content_back;
	}
	for(i=0;i<select.length;i++){
		select[i].style.backgroundColor=dark.buttoms;
		select[i].style.boxShadow=dark.sel;
	}
	for(i=0;i<subm.length;i++){
		subm[i].style.backgroundColor=dark.buttoms;
		subm[i].style.boxShadow=dark.sel;
	}

	let navigation=document.getElementsByClassName("navigation")[0];
	navigation.style.background=dark.nav;

	let inner_right_sidebar=document.getElementsByClassName("inner-sidebar_right")[0];
	inner_right_sidebar.style.background=dark.sidebar;

	let inner_left_sidebar=document.getElementsByClassName("inner-sidebar_left")[0];
	inner_left_sidebar.style.background=dark.sidebar;

	let inner_footer=document.getElementsByClassName("inner-footer")[0];
	inner_footer.style.backgroundColor=dark.nav;

	let title_red=document.getElementById("the_title");
	title_red.style.color=dark.title;
	title_red.style.textAlign=dark.pos;
	title_red.style.textShadow=dark.title_shadow;

	let change_b1=document.getElementById("theme_butm");
	change_b1.style.display="block";
	change_b1.style.backgroundColor=dark.buttoms;
	change_b1.style.borderColor=dark.change;
	change_b1.style.boxShadow=dark.change_shadow;
	change_b1.style.marginRight=dark.margin;

	let genres=document.getElementById("books_genres").children;
	for(i=0;i<genres.length;i++){
		genres[i].style.background=dark.nav;
	}
};

buttom.addEventListener("click", function(){
	if(light){
		clicking(dark);
		light=false;
	}
	else{
		clicking(lights);
		light=true;
	}
});


