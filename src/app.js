import {http} from './http';
import {userinterface} from './interface'

document.addEventListener('DOMContentLoaded', getjsonData);
document.querySelector('.post-submit').addEventListener('click', submitData)
document.querySelector('#posts').addEventListener('click', deleteData)
document.querySelector('#posts').addEventListener('click', editData)
document.querySelector('.card-form').addEventListener('click', cancelEdit)


function getjsonData(){
    http.get('http://localhost:3000/posts')
    .then(data => userinterface.displayData(data))
    .catch(err => console.log(err))
}

function submitData(){
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#body').value;
    const id = document.querySelector('#id').value

    const data={
        title,
        content
    }
    if(title === '' || content ===''){
        userinterface.showAlert('Fill in the Forms', 'alert alert-danger')
    }else{
        if(id === ''){
            http.post('http://localhost:3000/posts', data)
            .then(data =>{
                userinterface.showAlert('Post Added', 'alert alert-success')
                userinterface.clearFields()
                getjsonData()
            })
            .catch(err => console.log(err))
        }else{
            http.put(`http://localhost:3000/posts/${id}`, data)
            .then(data =>{
                userinterface.showAlert('Post Added', 'alert alert-success')
                userinterface.changeBtn('add')
                getjsonData()
            })
            .catch(err => console.log(err))
        }
    }
}

function deleteData(e){
    e.preventDefault()  
    if(e.target.parentElement.classList.contains('delete')){
        const id = e.target.parentElement.dataset.id
        if(confirm('Are you sure')){
            http.delete(`http://localhost:3000/posts/${id}`)
            .then(data => {
                userinterface.showAlert('Post Removed', 'alert alert-success');
                getjsonData()
            })
            .catch(err => console.log(err))
        }
    }
}

function editData(e){
    if(e.target.parentElement.classList.contains('edit')){
        const id = e.target.parentElement.dataset.id
        const title = e.target.parentElement.previousElementSibling.previousElementSibling.textContent
        const content = e.target.parentElement.previousElementSibling.textContent

        const data = {
            id,
            title,
            content
        }
        userinterface.addToForm(data)
    }
    e.preventDefault()
}

function cancelEdit(e){
    if(e.target.classList.contains('post-cancel')){
        userinterface.changeBtn('add')
    }
    e.preventDefault()
}