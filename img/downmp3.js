function processUrl(str) {

    var extractedStr = str.match(/\d{3,}(?!\d{3,163})/); 

    if (extractedStr == undefined || extractedStr == null || extractedStr == '') {
        return "";
    }else{
    var result = "https://music.163.com/song/media/outer/url?id=" + extractedStr + ".mp3";
    }
    console.log(result);
    return result;  
}