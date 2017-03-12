var myBall = document.querySelector(".discoball");
var discoClasses = ["here", "goes", "our", "awesome", "disco", "ball"];
var i = 0;
function goDisco() {
	// console.log(i);
		myBall.setAttribute("class", "discoball " + discoClasses[i]);
		i++;
		if( i >= 6 ){
			i = 0;
		}
	};


setInterval(goDisco,300);


// .here .goes .our .awesome .disco .ball