var allbutton=$('.window>.allinput>input');
console.log(allbutton.length);
for(var i=0;i<allbutton.length;i++){
    $(allbutton[i]).on('click',function(e){
        // addClass("red");
        var index=$(e.currentTarget).index();
        console.log(index);
        var n=index*-400;
        console.log(n);
        $('.wrapper').css({transform:'translate('+n+'px)'})
    })
}



for(var i=0;i<allbutton.length;i++){
    allbutton[i].onclick=function(){
        for(var j=0;j<allbutton.length;j++){
            allbutton[j].className="";
        }
        this.className="red";
    }
}
// let n
// setInterval(() => {
//     makeLeave(getImage(n))
//     .one('transitionend',(e)=>{
//         makeEnter($(e.currentTatget))
//     })
//     makeCurrent(getImage(n+1))
//     n++

// }, 3000);
// document.addEventListener('visibilitychange',function(e){
//     console.log(document.hidden);
// })
















