	function isInside(node, target) {
	    for (; node != null; node = node.parentNode)
	      if (node == target) return true;
	  }
	function createButton(ref){
		var button = document.createElement('button');
		button.innerHTML = "Copy";
		button.addEventListener('click',()=>{
			var text=(ref.innerText).slice(0,ref.innerText.length-4);
			copy(text);
		});
		return button;
	}
	 function copy(txt){
	  var cb = document.createElement("textarea");
	  document.body.appendChild(cb);
	  cb.value = txt;
	  cb.select();
	  document.execCommand('copy');
	  document.body.removeChild(cb);
	 }
	function highlight(){
	          var codes = document.getElementsByTagName('pre');
	          var arrs=[];	
	          for(var i=0;i<codes.length;i++){
	          	const ele = codes[i]; 
	          	const old = ele;
	          	var btn = createButton(old);
	          	ele.appendChild(btn);
	          	var original = codes[i].style.backgroundColor;
	          	arrs.push(ele);
	          } 

	  }
	  highlight();