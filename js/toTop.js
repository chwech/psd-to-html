window.onload = function(){
        var to_top = document.getElementById('toTop');
        var timer = null;//定义定时器
        var isTop = true;//到达顶部时标记为true
        //获取可视高度
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;

        to_top.onclick = function(){        
            timer = setInterval(function(){
                //获取滚动隐藏内容的高度
                var top = document.documentElement.scrollTop || document.body.scrollTop;
                //缓冲运动
                var speed = Math.floor(-top/6);
                document.documentElement.scrollTop = document.body.scrollTop = top + speed;             
                //返回顶部后清空定时器
                isTop = true;
                if(top == 0){
                    clearInterval(timer);
                }   
            }, 30);
        };

        window.onscroll = function(){
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            //隐藏的内容大于可视区域的高度时，显示返回顶部按钮
            if(top >= clientHeight){
                // console.log(document.documentElement.clientHeight);
                // console.log(document.body.scrollTop);
                to_top.style.display = "block";
            }else{
                to_top.style.display = "none";
            }
            //用户滚动时如果未到达顶部停下
            if(!isTop){
                clearInterval(timer);
            }
            isTop = false;
        };
    };  