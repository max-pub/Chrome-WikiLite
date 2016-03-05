function removeElement(e) {
	e.parentNode.removeChild(e);
}

function removeID(id) {
	removeElement(document.getElementById(id));
}

function removeClass(name) {
	var tmp = document.getElementsByClassName(name);
	for (var i = 0; i < tmp.length; i++)
		removeElement(tmp[i]);
}

removeClass('after-portlet-lang');
removeClass('uls-p-lang-dummy');


var languages = document.getElementsByClassName('interlanguage-link');
try {
	document.body.innerHTML += "<div id='languages'><h2>Languages</h2>" + languages[0].parentNode.parentNode.innerHTML + "</div>";
} catch (e) {}

// var flags = "";
// for(var i=0;i<languages.length; i++){
//     var lang = languages[i].children[0];
//     var tmp = {lang:lang.getAttribute('lang'), url:lang.getAttribute('href')};
//     flags += "<a href='"+tmp.url+"'><img src='chrome-extension://ifpekmonbbfepmjginglhifdjkfimlod/flags/"+tmp.lang.toUpperCase()+".png'/></a>";
// }
// document.body.innerHTML += "<div id='languages'><h3>Languages</h3>"+flags+"</div>";

// var langs = '';

REFlist = document.getElementsByClassName('references')[0];
// if(REFlist) REFlist.setAttribute('hidden',true);


var tmp = document.getElementById('content');
tmp.removeAttribute('class');


removeID('mw-panel');
removeID('mw-navigation');
removeID('mw-page-base');
removeID('mw-head-base');
removeID('footer');
removeID('siteSub');



// var langList = [];
// langList.push(tmp);
// console.log('lang',langList);



// var tmp = document.getElementsByClassName('Vorlage_Belege_fehlen')[0];
// tmp.parentNode.removeChild(tmp);


// var DIV = document.createElement('div');
// DIV.setAttribute('id','languages');
// DIV.innerHTML = flags;
// document.body.appendChild(DIV);
//   .prepend("<div id='abc'>fuck it</div>");