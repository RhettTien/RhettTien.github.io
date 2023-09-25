function processUrl(str) {

    var result = "";
    const regex = /\d{4,}/; // 匹配4个或更多数字的正则表达式  

    var extractedStr = str.match(regex);
    if (extractedStr == "" || extractedStr == null || extractedStr == undefined) {
        console.log("")
        return "";
    }
    var result = "https://music.163.com/song/media/outer/url?id=" + extractedStr + ".mp3";
    console.log(result)
    return result;
}