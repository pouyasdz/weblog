const elementBlog=(title, caption)=>{return `

<div class="bg-light rounded p-2" id="blog-cart">
            <h3 class="text-center">${title}</h3>
            <p class="text-muted">
               ${caption}
            </p>
            <button class="btn btn-outline-info text-dark" id="blog-cart-btn">موارد بیشتر ...</button>
        </div>

`};

let container = document.querySelector(".blog-section");

const api = "https://jsonplaceholder.ir/posts";

const searchList = []
const blogList = []
const searchValue = document.querySelector("#input");

async function loadSearch(){
    
       
}

function clearContainer (){
    document.querySelector(".blog-section").innerHTML = ""
}

async function onChangeSearchBox(){
    clearContainer()
    const key = searchValue.value;
    const searchResult = await blogList.filter((item) => {if(item.title.includes(key)) return item})
    document.querySelector(".result").innerHTML = `
    نتیجه <span class="badge badge-primary">${searchResult.length}</span>
    `
    searchResult.map((item) => {
        
            container.innerHTML += elementBlog(item.title,item.body);
        })
}



async function loadWeblog(){
    fetch(api)
    .then(response => response.json())
    .then(async (json)=> {
        await blogList.push(...json)
        blogList.map((item) =>{
        container.innerHTML += elementBlog(item.title,item.body);
    })
    })
      .catch(res=> console.log(res.error.message));
  
}

window.loadWeblog()