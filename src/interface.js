class UserInterface{
    constructor(){
        this.post = document.querySelector('#posts')
        this.titleInput = document.querySelector('#title')
        this.contentInput = document.querySelector('#body')
    }
    displayData(datas){
        let posts = '';
        datas.forEach(data =>{
            posts +=`
            <div class="card mb-3">
              <div class="card-body">
                <h4 class="card-title">${data.title}</h4>
                <p class="card-text">${data.content}</p>
                <a href="#" class="edit card-link" data-id="${data.id}">
                  <i class="fa fa-pencil"></i>
                </a>
    
                <a href="#" class="delete card-link" data-id="${data.id}">
                <i class="fa fa-remove"></i>
              </a>
              </div>
            </div>
          `;
            this.post.innerHTML = posts
        })
    }
    showAlert(message, className){
        this.clearAlert()
        const container = document.querySelector('.postsContainer')
        const card = document.querySelector('#posts')
        const alert = document.createElement('div')
        alert.className = className
        alert.appendChild(document.createTextNode(message))
        container.insertBefore(alert, card)
        setTimeout(()=>{this.clearAlert()}, 3000)
        console.log(alert)

    }
    clearAlert(){
        const alertMsg = document.querySelector('.alert')
        if(alertMsg){
            alertMsg.remove()
        }
    }
    clearFields(){
        this.titleInput.value = ''
        this.contentInput.value = ''
    }
}

export const userinterface = new UserInterface;