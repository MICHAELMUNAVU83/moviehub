import './styles/main.css';
import displayData from './modules/display.js';
import modal from './modules/modal.js';
import likesLoad from './modules/likesLoad.js';
import loadComment from './modules/comment-load.js';
import displaylikes from './modules/likes.js';
import addComment from './modules/comment.js';
import homeCounter from './modules/home-counter.js';

homeCounter();
displayData();
likesLoad();
displaylikes();
modal();
loadComment();
addComment();
