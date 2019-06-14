let obj = {
	setRem(){
		var uiW = 640,
		winW = document.documentElement.clientWidth,
		rate = winW / uiW ;
		var oWrap = document.getElementById("app");
		 if(winW > uiW) {
            oWrap.style.width = uiW + "px";
            oWrap.style.margin = "0 auto";
            document.documentElement.style.fontSize = 1 * 100 + "px"; 
            return;
        }
        document.documentElement.style.fontSize = rate * 100 + "px";
	}
}
export {obj}
