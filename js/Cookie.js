//设置Cookie 第一个参数为Cookie的名字 第二个参数为Cookie的内容 第三个参数为Cookie有效期 
function setCookie(Cookiename, Cookieinfo, time) {
    times = new Date();
    times.setDate(times.getDate() + time);
    document.cookie = `${Cookiename}=${Cookieinfo};expires=${times};path=/app/src/`;
    
}
function updatCookie(Cookiename, Cookieinfo, time) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split(";")
    var Arr = [];
    for (i = 0; i < arrCookie.length; i++) {
        var dataCookie = arrCookie[i].split("=");
        Arr.push(dataCookie[0]);
    }
    if (Arr.indexOf(Cookiename) == -1) {
        if (confirm("Cookie未被设置 是否设置？")) {
            times = new Date();
            times.setDate(times.getDate() + time);
            document.cookie = `${Cookiename}=${Cookieinfo};expires=${times};path=/app/src/`;
        }else{
            return;
        }
    }
    times = new Date();
    times.setDate(times.getDate() + time);
    document.cookie = `${Cookiename}=${Cookieinfo};expires=${times};path=/app/src/`;
}

function deleteCookie(Cookiename){
    times = new Date();
    times.setDate(times.getDate()-1);
    document.cookie = `${Cookiename}=delelte;expires=${times};path=/app/src/`;
}
function getCookie(Cookiename){
    var strCookie = document.cookie;
    console.log(strCookie);
    var arrCookie = strCookie.split("; ")
    console.log(arrCookie);
    for (i = 0; i < arrCookie.length; i++) {
        var dataCookie = arrCookie[i].split("=");
        // console.log(dataCookie);
        if(Cookiename==dataCookie[0]){
            return dataCookie[1];
        }
    }
}
