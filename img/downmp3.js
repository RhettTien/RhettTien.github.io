function processUrl(str) {
    var result = "";
    var extractedStr = str.match(/\d{4,}(?!\d{3,163})/); 

    if (extractedStr == undefined || extractedStr == null || extractedStr == '') {
        console.log(result);
        return result;
    }else{
    result = "https://music.163.com/song/media/outer/url?id=" + extractedStr + ".mp3";
    }
    console.log(result);
    return result;  
}