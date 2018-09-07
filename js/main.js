$(window).on('load', function(){
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function(){
    var n = Math.random();
    if(n < 0.05){ //5%
      this.textContent = 'チンポ (ﾎﾞﾛﾝ';
    } else {  //95%
      var tools = ['タイムマシーン～', 'タケコプタ～', 'どこでもドア～', '通り抜けフープ～', 'バイバイン～',
        'デンデンハウス～', 'さいなん報知器～', '代用シール～', 'もしもボックス～', 'ひらりマント～', 'フエルミラ～',
        'ガリバートンネル～', 'あべこべクリーム～', 'タイムカメラ～', '爆発コショウ～', '時限バカ弾～', 'コエカタマリン～'];
      var m = Math.floor(Math.random() * tools.length);
      this.textContent = tools[m];
    }
  });
  btn.addEventListener('mousedown', function(){
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function(){
    this.className = '';
  });
})();
