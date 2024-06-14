// const date = new Date();
// const year = date.getFullYear();
// const currentMonth = date.getMonth() + 1;
// const today = date.getDate();

// const solar = Solar.fromYmd(year, currentMonth, today);
// const lunchMonth = solar.getLunar().getMonth();
// const lunchDay = solar.getLunar().getDay();

const aimg = document.getElementById('home-img');
const msg = document.getElementById("msg")
const smsg = document.getElementById("smsg")
const aurl = document.getElementById('home-img-url');

//Rwandan Genocide
if (today == 7 && currentMonth === 4) {
    set_images('47');
}

// iying
else if (today == 8 && currentMonth === 4) {
    set_images('48');
}

// 1945.9.9
else if (today == 9 && currentMonth === 9) {
    set_images('99');
}

// 10.1
else if (today == 1 && currentMonth === 10) {
    set_images('101');
}

// Halloween
//else if (today == 14 && currentMonth === 6) {
else if ((today == 31 && currentMonth === 10) || (today == 1 && currentMonth === 11)) {
    set_images('1031');
}

// 12-22
else if (today == 22 && currentMonth === 12) {
    set_images('1222');
}

// Christmas
else if (([25, 26, 27, 28, 29, 30, 31].includes(today) && currentMonth === 12) || ([1, 2, 3, 4, 5].includes(today) && currentMonth === 1)) {
    set_images('1225');
}

// Chinese New Year's Eve
else if (lunchDay == 30 && lunchMonth === 12) {
    set_images('1230');
}

// New Year
else if (([1, 2, 3, 4, 5, 6].includes(lunchDay)) && lunchMonth === 1) {
    set_images('11');

} else {
    set_images('00');
}

// The custom of the Spring Festival
// Lantern Festival
// Mid-Autumn Festival
// Dragon Boat Festival
// Double Seventh Festival
// International Children's Day

function remove_div() {
    setTimeout(function() {
        document.getElementById("myImage").remove();
        $(".active").css('display', 'none');
    }, 1000);
}

// 剪切重复的前缀
function removeRepeatedSubstring(str) {
    if (str.charAt(0) === '/') {
        str = str.substring(1);
    }
    // 假设重复的部分是字符串的前缀，且完全重复  
    // 找到可能的重复部分的长度  
    for (let i = 1; i < str.length / 2; i++) {
        const prefix = str.substring(0, i);
        if (str.startsWith(prefix + prefix)) {
            // 找到了重复的部分，剪切它  
            return str.substring(prefix.length);
        }
    }
    // 如果没有找到重复的部分，返回原始字符串  
    return str;
}

// 读取资源函数函数
function set_images(day) {
    $.getJSON("wp-content/themes/myBlog/assets/data/data_images.json", function(data) {
        var url = data[day].url;
        var comment = data[day].comment;
        var images = data[day].images;

        let len = images.length;

        // 图片
        if (len == 0) {
            console.log("0");

            var result = removeRepeatedSubstring(data['00'].images[0]);
            aimg.setAttribute('src', result);

            var url = data['00'].url;
            aurl.setAttribute('href', url);
            aurl.style.pointerEvents = "auto";
        } else if (len > 1) {

            if (day == 48) {

				var body = document.body;
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = removeRepeatedSubstring(data[day].css);
				body.appendChild(script);
				
                // let number = Math.floor(len / 2) - 1;
                // var result2 = removeRepeatedSubstring(images[number]);
                // aimg.setAttribute('src', images[5]);

                smsg.innerHTML = "<span id=\"text\">Happy&nbsp;" + (date.getFullYear() - 2020) + "th&nbsp;Birthday&nbsp;to&nbsp;Zhan&nbsp;Ying&nbsp;~</span>";

                let isTyping = true;
                let currentIndex = 0;
                let textElement = document.getElementById('text');
                let text = textElement.textContent;
                let temp = text
                let lens = temp.length;
                let finaltext = temp

                textElement.textContent = "";
                async function type() {
                    if (isTyping) {
                        if (currentIndex < temp.length) {
                            textElement.textContent += temp.charAt(currentIndex);
                            currentIndex++;
                            setTimeout(type, 160); // 设置打字速度，这里为100毫秒  
                        } else {
                            isTyping = false;
                            lens = finaltext.length;
                        }
                    } else if (!isTyping) {
                        if (lens > 0) {
                            textElement.textContent = temp.slice(0, lens);
                            lens--;
                            setTimeout(type, 160); // 设置打字速度，这里为100毫秒  
                        } else {
                            isTyping = true;
                            temp = finaltext
                            currentIndex = 0
                        }
                    }
                }
                type().catch(console.error);

                smsg.style.opacity = 1;

                async function delayedLoop(delay) {
                    var ii = 0
                    while (true) {
                        aimg.setAttribute('src', images[ii]);
                        await new Promise(resolve => setTimeout(resolve, delay));
                        ii++;
                        if (ii == len) {
                            ii = 0;
                            type().catch(console.error);
                        }
                    }
                }
                delayedLoop(3000).catch(console.error); // 3000毫秒
            }
        } else {
            console.log("1");
            var result = removeRepeatedSubstring(images[0]);
            aimg.setAttribute('src', result);
        }

        if (day == 1031) {
            $(".img-box").css('display', 'block');
            const img = document.getElementById('myImage');
            img.setAttribute('src', result);
            img.style.opacity = 1;

            img.ondblclick = function() {
                img.style.opacity = 0;
                remove_div();
            };

            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = removeRepeatedSubstring(data[day].css); // 指定CSS样式文件的路径  
            document.head.appendChild(link); // 添加CSS样式文件到文档头部  
        }

        if (day == 11) {
            var body = document.body;
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = removeRepeatedSubstring(data[day].css);
            body.appendChild(script);
        }

        // 超链接
        if (url == undefined || url === '') {
            aurl.style.pointerEvents = "none";
        } else {
            aurl.setAttribute('href', url);
        }

        // 文字
        if (!(comment == undefined || comment === '')) {
            msg.innerText = comment;
            msg.style.opacity = 0.9;
        }
    });
}