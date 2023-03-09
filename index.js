// let hed=document.getElementById('header');
// console.log(hed);
// let var1=document.getElementsByClassName('header');
// console.log(var1);
// let var2=document.getElementsByClassName('images-section');
// console.log(var2);
// let var3=document.getElementsByTagName('img');
// console.log(var3);
// let var4=document.getElementsByTagName('div');
// console.log(var4);
// let var5=document.querySelector('div');
// console.log(var5);
// let var6=document.querySelector('.images-section');
// console.log(var6);
// let var7=document.querySelector('div.upper-img');
// console.log(var7);
// let var8=document.querySelectorAll('div');
// console.log(var8);
// let var9=document.querySelectorAll('p').innerHTML;
// console.log(var9);
// let var10=document.getElementById('header').innerHTML;
// console.log(var10);
// let var11=document.getElementById('article').innerText;
// console.log(var11);
// let var12=document.querySelector('header').innerText;
// console.log(var12);
// let var13=document.querySelector('div').getAttribute('class');
// console.log(var13);
// let var14=document.querySelector('div').getAttributeNode('class');
// console.log(var14);
// let var15=document.getElementById('header').getAttributeNode('class');
// console.log(var15);
// let var16=document.querySelector('header').attributes;
// console.log(var16);
// let  var17=document.querySelectorAll('main').attributes;
// console.log(var17);
// let var18=document.querySelector('header h1');
// var18.innerText="Waseem ";
// let var19=document.querySelector('header h1');
// var19.innerHTML='<h5>Waseem Gonna</h5>';
// let var20=document.querySelector('header p');
// var20.innerHTML='<p>Waseem Gonna</p>';
// let var21=document.getElementById('article');
// var21.innerHTML='<h5>Waseem Gonna</h5>';
// let var22=document.getElementById('header');
// var22.innerHTML='<h5>Waseem Gonna</h5>';
// let var23=document.querySelector('img');
// var23.setAttribute('src', 'Waseem Gonna');
// console.log(var23);
// let var24=document.querySelector('.images-section');
// let a=var24.attributes.value='WASEEM GONNS';
// console.log(a);
// console.log(var24.attributes);
// let var25=document.querySelector('.article button');
// let temp=var25.attributes[0].value='waseem gonna be';
// console.log(temp);
// let var26=document.querySelector('.article');
// console.log(var26.attributes[0].name);
// let var27=document.querySelector('img');
// var27.style.marginLeft="30px";
// console.log('var27');
// let var28=document.querySelectorAll('.article');
// var28.forEach(function(data) {
//     data.style.backgroundColor="red";
// data.style.color='red';
// });
// console.log('var28');
// let var30=document.querySelectorAll('div');
// var30.forEach(function(data) {
//     data.style.backgroundColor="red";
// });
// let var31=document.querySelector('header');
// let a=var31.className='gonnaissance';
// console.log(a);
// let var32=document.querySelectorAll('.article');
// var32.forEach(function(data) {
//     // console.log(var32);
//     data.className='img-container';
//     console.log(data);
// });
// let a=var32.className='janitor';
// let var33=document.querySelectorAll('.form');
// var33.forEach(function(data){
//  data.className='janitor';
//  console.log(data);
// });
// let var34=document.querySelector('.form').classList;
// // let c=var34.item;
// // console.log(c);
// var34.add('billa','pandit','thakur');
// console.log(var34);
// var34.remove('billa','pandit',);
// console.log(var34);
// var34.replace('form','pandit',);
// console.log(var34);
// let length=var34.length;
// console.log(length);
// let contain=var34.contains('pandit');
// console.log(contain);
// const remove=function()
// {
//     let chk=document.querySelector('.article');
//     chk.style.backgroundColor='red';
//     chk.style.paddingTop='50px';

//     console.log(chk);
// }
// let var35=document.querySelector('.article');
// const remove=()=>{
//     var35.style.backgroundColor='red';
//     console.log(var35);
// }
// let var36=document.querySelector('.article').classList;
// const remove=()=>{
// console.log("Yes i am still alive");
// }
// let var37=document.querySelector('.article');
// let var38=document.querySelector('.article h1');
// const remove=()=>{
//     // var37.style.display="none";
//     console.log(var37);
// }
// let var38=document.querySelector('.form-section');
// const remove=()=>{
// var38.style.background="none";
// console.log(var38);
// }
// var38.onclick=remove;
// let var39=document.querySelector('.form');
// const waseem=()=>{
//  var39.style.background="tan";
//  console.log(var39);
// }
// var39.onclick=waseem;
// let var40=document.querySelector('.form-section');
// const rose=()=>{
//     var40.style.paddingLeft='20px';
//     console.log(var40);
// }
// var40.addEventListener('click',rose);
// let var41=document.querySelector('.links');
// var41.addEventListener('click',function(){
//     var41.style.backgroundColor='green ';
//     console.log(var41);
// });
// let var42=document.querySelector('header');
// var42.addEventListener('click',function(){
//     var42.style.backgroundColor='green ';
//     console.log(var42);
// });
// let var43=document.querySelector('header');
// var43.addEventListener('mouseleave',function(){
// var43.style.backgroundColor='blue';
// console.log(var43);
// });
let one=document.querySelector('.one');
let two=document.querySelector('.two');
let three=document.querySelector('.three');
let four=document.querySelector('.four');
let five=document.querySelector('.five');
one.addEventListener('click',function(){
    one.style.backgroundColor='khaki';
    one.style.border='none';
});
two.addEventListener('click',function(){
    two.style.backgroundColor='wheat';
    two.style.border='none';
});
three.addEventListener('click',function(){
    three.style.backgroundColor='tan';
    three.style.border='none';
});
four.addEventListener('click',function(){
    four.style.backgroundColor='teal';
    four.style.border='none';
});
five.addEventListener('click',function(){
    five.style.backgroundColor='black';
    five.style.color='white';
});