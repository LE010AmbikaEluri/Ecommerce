fetch("https://le010ambikaeluri.github.io/Ecommerce/data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	console.log(data) 
	displayData(data)
})

	var bodyElement=document.querySelector("body");
function displayData(info) {
	var row=document.createElement("section")
	row.classList.add("row","justify-content-center")
	bodyElement.append(row)
	info.Laptops.map(value=>{
		var column=document.createElement("article");
		column.classList.add("col-sm-10", "col-md-6","col-lg-3")
		row.append(column)
		//card
		var card=document.createElement("div")
		card.classList.add("card")

		//card-body
		var cardBody=document.createElement("div");
		cardBody.classList.add("card-body") 
		
		//image
		var imageElement=document.createElement("img");
		imageElement.src=value.image;
		imageElement.classList.add("img-responsive")
		imageElement.setAttribute("alt","Laptops")
		imageElement.alt=value.name;
		//name
		var name=document.createElement("h2");
		name.textContent=value.name;
		name.classList.add("text-center","text-primary")
		//price
		var price=document.createElement("p");
		price.classList.add("text-info","text-center","text-block")
		price.innerHTML="<s>₹"+value.price+"/-</s>";

		var op=document.createElement("p");
		op.textContent="₹"+value.op+"/-"
		op.classList.add("text-danger","text-center","text-block")
		//button
		var buttonParent=document.createElement("div");
		buttonParent.classList.add("d-grid","gap-2");
		var button=document.createElement("button");
		button.classList.add("btn", "btn-primary");
		button.textContent="Add to cart"
		buttonParent.append(button)


     	cardBody.append(imageElement);
		cardBody.append(name);
		cardBody.append(price);
		cardBody.append(op);
		cardBody.append(buttonParent);
		card.append(cardBody);
		column.append(card);


	})
		//var sampleElement=document.createElement("img");
		//sampleElement.src="images/Hp.jpg";
		//sampleElement.classList.add("class1","class2","class3")
		//sampleElement.classList.remove("class3")
		//var bodyElement=document.querySelector("body");
		//bodyElement.append(sampleElement)
		// var bodyElement=document.querySelector("body");
		// var newElement=document.createElement("h2")
		// newElement.textContent="Ganga"
		// console.log(newElement)
		// bodyElement.append(newElement)
		// var e=document.querySelectorAll(".div")
		// console.log(e[1])
		// var e=document.getElementsByClassName('div');
		// console.log(e[0])
		// console.log(e[1].innerHTML)
		// var div=document.getElementById("div");
		// console.log(div)
	// console.log(info.Laptops[info.Laptops.length-1])
}
