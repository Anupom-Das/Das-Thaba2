function handleContact (event) {

    event.preventDefault();

    
    const email = event.target.email.value;
    
    console.log(email);
    
const successContainer = document.getElementById("success_container");
console.log(successContainer);

const emailParagraph = document.createElement("p");
emailParagraph.innerText = `Your Email : ${email}`;

console.log(emailParagraph);

successContainer.appendChild(emailParagraph);


}






const imageArray=[
    {
        url:"rui.jpeg",
    },

    {
        url:"payesh.webp",
    },

    {
        url:"fuska.jpeg",
    },

    

];


function show() {
    const p_container = document.getElementById("projects");


    for(const item of imageArray) {

        const p_div_img = document.createElement("div");

        p_div_img.classList.add("project");
        p_div_img.innerHTML = `<img src ="${item.url}">`;

        p_container.appendChild(p_div_img);

       console.log(p_div_img);
      
    }
    console.log("click",p_container);

}

