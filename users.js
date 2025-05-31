$("style").last().append(`
#users .uzr.stl1 .fitimg.u-pic {
  border-radius: 100px !important;
  margin-top: 3px !important;
  height: 54px !important;
  margin-left: -8px!important;
  z-index: 0 !important;
}
#users .uzr.stl1 .d-flex.dots {
  margin-top: 7px !important;
  margin-left: 5px;
}
#users .uzr.stl1 .u-msg {
  text-align: center;
  -webkit-background-clip: text;
  padding: 1px !important;
  font-size: 89% !important;
  -webkit-text-fill-color: #0000;
  background-image: url(https://i.ibb.co/JzgnvW8/61.gif);
  color: transparent !important;
  background-size: 90% 100%;
}
#users .uzr.stl1 .ustat {
  width: 12px !important;
border-radius: 0px 50px 50px 50px !important;
height: 12px !important;
min-height: 0% !important;
z-index: 0 !important;
}
#users .uzr.stl1 span.uhash {
  margin-right: 324px;
  margin-top: 24px;
  margin-left: 0px;
}
#users .uzr.stl1 img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 282px;
}
#users .uzr.stl1 {
  box-shadow:inset 0 0 0 rgb(0 0 0 / .08),0 0 0 #000;
  margin-bottom:3px!important;margin-top:2px!important;border-radius:0;
  background-image:url(https://up6.cc/2025/05/174865032024781.png);
  background-size:100%;border-radius:0 5px 0 5px;border-style:solid!important;
  border-color:#585858 #fff #585858 #fff; 

}
#users .uzr.stl1 .c-flex.fr {
  margin-left: -4px!important;
  float: left;
}
#users .uzr.stl1 .d-flex.fl {
  padding-right: 0px !important;
}
#users .uzr.stl1 .u-topic {
  margin-left: 5px;
    text-transform: uppercase;
    -webkit-text-fill-color: #cecece00;
    animation: textclip 2s linear infinite;
    background-image: url();
    color: transparent !important;
    background-size: 100% 100%;
    margin-top: 30px;
    border-radius: 50px !important;
}
#users .uzr.stl1 .My_star1 {
  width: 84px;
  margin-top: -73px;
  height: 79px;
}
#users .uzr.stl1 .My_tsor {
  width: 79px;
  margin-top: -45px;
  z-index: 0;
  margin-left: 36px;
}
#users .uzr.stl1 .My_vedio1 {
  float: right;
  width: 20px;
  margin-top: 0px;
  margin-right: 5px;
  cursor: pointer;
}
`);
var me_user1=setInterval(function(){
    if(myid!=null){
        clearInterval(me_user1);
        $("#users .uzr:contains('n00r')").addClass('stl1');
         $("#users .uzr.nour1 .c-flex.fr").append('<img class="My_star1" src="https://i.ibb.co/5G9Ttb7/10.gif">');
	$("#users .uzr.nour1 .c-flex.fr").append('<img class="My_tsor" src="https://i.ibb.co/ThKHx1N/image.png">');

	$("#users .uzr.stl1 .c-flex.fr").after('<div id="my_mood1" class="label label-primary" style=" margin-bottom: 1px; display: inline-block;width: 100%;margin-top: 10px;height: 22px;cursor: pointer;border-radius: 50px;padding: 0px;background-image: linear-gradient(-225deg, #bbb 0%, #bbb 29%, #5a5a5a 67%, #bbb 100%);" href="">قريبــــاً</div>');
       
    
        $("#users .uzr.stl1 span.uhash, #users .uzr.stl1 img.co").hide(); 


        $("#upro").before('<div id="movon1" onclick="$(this).hide().html(``);" class="moveon1" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">'); 
        
        
        
        $("div#users .uzr:contains('n00r') .My_vedio1").click(function(){
        $("#movon1").show();
        
        $('#movon1').addClass('stl1');
        $("#movon1").before('<div class="modal-dialog fr break" style="height: 338px; max-width: 340px; min-width: 300px; min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        
        
        $("#movon1").append('<div style="max-width: 340px; min-width: 300px; color:white; width: 338px; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');
          
		  
        $("#movon1").append('<iframe id="ifr_mov1" style="max-width: 340px;min-width: 300px;right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/svA75h-GX68" allowfullscreen="" width="338" height="490" frameborder="0"></iframe>');
        
       $("#ifr_mov1").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 10000);
