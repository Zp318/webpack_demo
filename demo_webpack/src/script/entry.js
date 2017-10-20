require('../style/index.css');
import nextPage from './component.js';
import $ from 'jquery';
import tpl from '../components/component.html';

var getTest = function(){

	setTimeout(function(){
		document.getElementById("test").innerHTML = "这是重置后的文本";
	},2000);

	document.write(nextPage("这是调用ES6引入函数的结果"));

	$("#context").html(tpl);

	$(".layer").css("color","red");

}

getTest();