let wOne;
let output = document.getElementById("after").innerHtml;


function myFunction(){
	let needsTranslation = document.getElementById("before").value;

	if(needsTranslation.includes(8)){wOne = 1}else{wOne = 0}

	if(wOne === 1){
		needsTranslation = needsTranslation.replace(/15777/g, "r");
		needsTranslation = needsTranslation.replace(/5777/g, "h");
		needsTranslation = needsTranslation.replace(/1577/g, "q");
		needsTranslation = needsTranslation.replace(/577/g, "g");
		needsTranslation = needsTranslation.replace(/157/g, "p");
		needsTranslation = needsTranslation.replace(/357/g, "z");
		needsTranslation = needsTranslation.replace(/57/g, "f");
		needsTranslation = needsTranslation.replace(/3777/g, "w");
		needsTranslation = needsTranslation.replace(/377/g, "v");
		needsTranslation = needsTranslation.replace(/37/g, "u");
		needsTranslation = needsTranslation.replace(/375/g, "x");
		needsTranslation = needsTranslation.replace(/35/g, "y");
		needsTranslation = needsTranslation.replace(/73/g, "s");
		needsTranslation = needsTranslation.replace(/3/g, "t");
		needsTranslation = needsTranslation.replace(/15/g, "o");
		needsTranslation = needsTranslation.replace(/175/g, "n");
		needsTranslation = needsTranslation.replace(/1777/g, "m");
		needsTranslation = needsTranslation.replace(/177/g, "l");
		needsTranslation = needsTranslation.replace(/17/g, "k");
		needsTranslation = needsTranslation.replace(/71/g, "i");
		needsTranslation = needsTranslation.replace(/1/g, "j");
		needsTranslation = needsTranslation.replace(/75/g, "d");
		needsTranslation = needsTranslation.replace(/5/g, "e");
		needsTranslation = needsTranslation.replace(/777/g, "c");
		needsTranslation = needsTranslation.replace(/77/g, "b");
		needsTranslation = needsTranslation.replace(/7/g, "a");
		needsTranslation = needsTranslation.replace(/88/g, " ");
		needsTranslation = needsTranslation.replace(/8/g, "");
	}
	else{
		needsTranslation = needsTranslation.toLowerCase();
		needsTranslation = needsTranslation.replace(/a/g, "78");
		needsTranslation = needsTranslation.replace(/b/g, "778");
		needsTranslation = needsTranslation.replace(/c/g, "7778");
		needsTranslation = needsTranslation.replace(/d/g, "758");
		needsTranslation = needsTranslation.replace(/e/g, "58");
		needsTranslation = needsTranslation.replace(/f/g, "578");
		needsTranslation = needsTranslation.replace(/g/g, "5778");
		needsTranslation = needsTranslation.replace(/h/g, "57778");
		needsTranslation = needsTranslation.replace(/i/g, "718");
		needsTranslation = needsTranslation.replace(/j/g, "18");
		needsTranslation = needsTranslation.replace(/k/g, "178");
		needsTranslation = needsTranslation.replace(/l/g, "1778");
		needsTranslation = needsTranslation.replace(/m/g, "17778");
		needsTranslation = needsTranslation.replace(/n/g, "1758");
		needsTranslation = needsTranslation.replace(/o/g, "158");
		needsTranslation = needsTranslation.replace(/p/g, "1578");
		needsTranslation = needsTranslation.replace(/q/g, "15778");
		needsTranslation = needsTranslation.replace(/r/g, "157778");
		needsTranslation = needsTranslation.replace(/s/g, "738");
		needsTranslation = needsTranslation.replace(/t/g, "38");
		needsTranslation = needsTranslation.replace(/u/g, "378");
		needsTranslation = needsTranslation.replace(/v/g, "3778");
		needsTranslation = needsTranslation.replace(/w/g, "37778");
		needsTranslation = needsTranslation.replace(/x/g, "3758");
		needsTranslation = needsTranslation.replace(/y/g, "358");
		needsTranslation = needsTranslation.replace(/z/g, "3578");
		needsTranslation = needsTranslation.replace(/\s/g, "88");
	}
	alert(needsTranslation)
}


