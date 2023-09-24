function processUrl(str) {

    var extractedStr = str.split('=')[1].split('&')[0];

    var result = "https://music.163.com/song/media/outer/url?id=" + extractedStr + ".mp3";

    console.log(result);
    return result;  
}