var base_url = 'http://studyfox.ganjie.biz/app/';
var article_url = base_url + "article/info/";
var category_url = base_url + "category/";
var category_sub_url =base_url + "category/sub/"



function closewin() {
    api.closeWin();
}

//提示
function msg(msg){
    api.toast({
        msg: msg,
        duration: 2000,
        location: 'bottom'
    });
}
