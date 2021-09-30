class User{
    constructor(){
    }
    static fetchBlog(){
        fetch("https://www.googleapis.com/blogger/v3/blogs/608358030383856053/posts?key=AIzaSyCIAbwTcozME1tzsLjQRHbzL90L_yG9Qfk")
            .then(response => response.json())
            .then(responseAsJson => {
                console.log(responseAsJson.items);
                let blogs = document.querySelector("#blogs")
                for(let i = 0; i < responseAsJson.items.length; i++){
                    let article = document.createElement("article");
                    article.innerHTML = `<h4>${responseAsJson.items[i].title}</h4>
                                        <p>${responseAsJson.items[i].content}</p>`;
                    blogs.append(article);
                }

                
                

            })
            .catch(error => {
            
                console.log("An Error Occurred:", error);
            });
    }
} 