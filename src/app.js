import {http} from './http';

document.addEventListener('DOMContentLoaded', getjsonData);

function getjsonData(){
    http.get('http://localhost:3000/posts')
    .then(console.log(data))
    .catch(console.log(err))
}