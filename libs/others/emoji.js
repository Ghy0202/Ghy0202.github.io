function mouseClickAN() {
  let $html = document.getElementsByTagName("html")[0];
  let $body = document.getElementsByTagName("body")[0];
  let emojIcon = ['๐','๐','๐','๐','๐','๐','๐','๐คฃ','๐ฅฒ','๐','๐','๐','๐','๐','๐','๐ฅฐ','๐','๐','๐','๐','๐','๐','๐','๐','๐คช','๐คจ','๐ง','๐ค','๐','๐คฉ','๐ฅณ','๐','๐','๐ซ','๐','๐ฅบ','๐ค','๐ญ','๐ข','๐ก','๐ ','๐ฅต','๐คฏ','๐ณ','๐ฅถ','๐ถโ๐ซ๏ธ','๐ฑ','๐จ','๐ฐ','๐ฅ','๐','๐ค','๐ค','๐คญ','๐คซ','๐คฅ','๐','๐ฌ','๐','๐ฏ','๐ฆ','๐ง','๐ฎ','๐ฒ','๐ฅฑ','๐ด','๐คค','๐ช','๐ฎโ๐จ','๐ต','๐ตโ๐ซ','๐ค','๐ฅด','๐คข','๐คฎ','๐คง','๐ท','๐ค','๐ค','๐ค ','๐','๐ฟ','๐คก','๐ป','๐','โ ๏ธ','๐ฝ','๐ค','๐','๐บ','๐ธ','๐น','๐ป','๐ผ','๐ฝ','๐','๐ฟ','๐พ','๐','๐งโโ๏ธ','๐งโโ๏ธ','๐ถ','๐ฑ','๐ญ','๐น','๐ฆ','๐ป','๐ผ','๐ป','๐ฏ','๐ฆ','๐ฎ','๐ท','๐ฝ','๐ธ','๐ต','๐','๐','๐','๐','๐','๐ง','๐ฆ','๐ค','๐ฃ','๐ฅ','๐ฆ','๐ฆ','๐บ','๐ฆ','๐','๐ฆ','๐','๐ซ','๐','โจ','โญ๏ธ','๐ฅ','๐ฅ','๐ช'];
  $html.onclick = function(e) {
    let $elem = document.createElement("b");
      $elem.style.color = "#E94F06";
      $elem.style.zIndex = 9999;
      $elem.style.position = "absolute";
      $elem.style.select = "none";
      let x = e.pageX;
      let y = e.pageY;
      $elem.style.left = (x - 10) + "px";
      $elem.style.top = (y - 20) + "px";
      clearInterval(anim);
      $elem.innerText = emojIcon[Math.floor(Math.random()*emojIcon.length)];
      $elem.style.fontSize = Math.random() * 10 + 14 + "px";
      var increase = 0;
      var anim;
      setTimeout(function() {
          anim = setInterval(function() {
              if (++increase == 150) {
                  clearInterval(anim);
                  $body.removeChild($elem);
              }
              $elem.style.top = y - 20 - increase + "px";
              $elem.style.opacity = (150 - increase) / 120;
          }, 8);
      }, 70);
      $body.appendChild($elem);
  };
}