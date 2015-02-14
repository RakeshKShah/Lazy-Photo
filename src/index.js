var albumarts = [
  'http://upload.wikimedia.org/wikipedia/en/2/29/Soulcrusher_Album_Art.jpg',
  'http://th06.deviantart.net/fs71/PRE/i/2013/361/7/5/lights_album_art_by_bonvallet-d6ylvvi.png',
  'http://www.whudat.de/images/graffiti_streetart_album_covers_02.jpg',
  'http://www.smashingmagazine.com/images/music-cd-covers/64.jpg',
  'http://style.mtv.com//wp-content/uploads/style/2012/10/rihanna-side-effects-album-art.jpg',
  'http://cdn3.pitchfork.com/news/50068/3f8a6f3b.jpg',
  'http://assets.nydailynews.com/polopoly_fs/1.1439189!/img/httpImage/image.jpg_gen/derivatives/article_970/drake29f-1-web.jpg'
];

var getImageElm = function(src) {
  var img = '<img src="' + src + '"/>';
  return img;
};

var ImgFrame = {
    index : 0,

    img : {},

    srcElm : '',

    loadImage: function(imgSrc, idx) {
      this.img[idx] = $(getImageElm(imgSrc));
      this.img[idx].load(this._onload.bind(this));
    },

    _onload: function() {
      this.srcElm.append(this.img[this.index]);
      this.index++;
    },

    init : function(album) {
      this.album = album;
      this.srcElm = $('#image-display');

      this.album.forEach(function(imgSrc, idx) {
        this.loadImage(imgSrc, idx);
      }, this);
    },

    loadNext : function() {
      this.loadImage(albumarts[this.index], this.index);
    },

    loadPrevious : function() {
      console.log('here in load previous');
    },
};


$(document).ready(function() {
   var _albumarts = [];
   _albumarts.push(albumarts[0]);
   ImgFrame.init(_albumarts);
});
