import {http} from './http';
import {interface} from './ui'

document.addEventListener('DOMContentLoaded', getjsonData);

function getjsonData(){
    http.get('http://localhost:3000/posts')
    .then(data => interface.displayData(data))
    .catch(err => console.log(err))
}