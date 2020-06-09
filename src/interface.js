class UserInterface{
    constructor(){
        this.post = document.querySelector('#posts')
        this.titleInput = document.querySelector('#title')
        this.contentInput = document.querySelector('#body')
        this.id = document.querySelector('#id')
        this.postBtn = document.querySelector('.post-submit')
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
    addToForm(data){
        this.titleInput.value = data.title
        this.contentInput.value = data.content
        this.id.value = data.id
        this.changeBtn('edit')
    }
    changeBtn(type){
        if(type === 'edit'){
            this.postBtn.textContent = 'Update Post'
            this.postBtn.className = 'post-submit btn btn-warning btn-block'

            const btn = document.createElement('button')
            btn.className = 'post-cancel btn btn-light btn-block'
            btn.textContent = 'Cancel Edit'
            const  card = document.querySelector('.card-form')
            const form = document.querySelector('.form-end')
            card.insertBefore(btn, form)
        }else{
            this.postBtn.textContent = 'Post It'
            this.postBtn.className = 'post-submit btn btn-primary btn-block'
            if(document.querySelector('.post-cancel')){
                document.querySelector('.post-cancel').remove()
            }
            this.clearId()
            this.clearFields()
        }
    }
    clearId(){
        this.id.value = ''
    }
}

export const userinterface = new UserInterface;