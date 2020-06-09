import {http} from './http';
import {userinterface} from './interface'

document.addEventListener('DOMContentLoaded', getjsonData);
document.querySelector('.post-submit').addEventListener('click', submitData)
document.querySelector('#posts').addEventListener('click', deleteData)

function getjsonData(){
    http.get('http://localhost:3000/posts')
    .then(data => userinterface.displayData(data))
    .catch(err => console.log(err))
}

function submitData(){
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#body').value;

    const data={
        title,
        content
    }
    http.post('http://localhost:3000/posts', data)
    .then(data =>{
        userinterface.showAlert('Post Added', 'alert alert-success')
        userinterface.clearFields()
        getjsonData()
    })
    .catch(err => console.log(err))
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