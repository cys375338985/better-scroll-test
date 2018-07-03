window.onload=function () {
    var bs = new BScroll("#wrapper",{
        pullDownRefresh: {
            threshold: 50,
            stop: 20
        },
        pullUpLoad:true
    });

   bs.on("pullingDown",function () {

       setTimeout(function () {
          var content=document.querySelector(".content");
           for(var i=0;i<100;i++){
                content.innerHTML+="<li class='item'>list-item"+i+" </li>";
           }
           bs.refresh();
           clearTimeout(this);
       },5000)
   });
   var time;
   bs.on("scroll",function (o) {
       console.log(this.maxScrollY);
        console.log(o.y);
       console.log(this.movingDirectionY);

       // if(bs.isInTransition){
       //     bs.isInTransition=false;
       // }
       if(this.movingDirectionY==0){
           return;
       }
       if(this.movingDirectionY==1){
           if(o.y>=this.maxScrollY){
               document.querySelector(".loading-wrapper").innerHTML="向上加载";
           }
           if(o.y<this.maxScrollY-50){
               document.querySelector(".loading-wrapper").innerHTML="释放加载";
           }
       }

    });
  /*  bs.on("pullingDown",function () {
        setTimeout(function () {
            var content=document.querySelector(".content");
            for(var i=0;i<1000;i++){
                content.innerHTML+=" <li class='item'>list-item"+i+" </li>";
            }
            bs.refresh();
        },5000)

    })*/
};