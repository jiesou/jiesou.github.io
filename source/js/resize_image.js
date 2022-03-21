// https://github.com/bobcn/hexo_resize_image.js/blob/master/hexo_resize_image.js
function set_image_size(image, width, height, left) {
    image.setAttribute("width", width + "px");
    image.setAttribute("height", height + "px");
    if (left) {
        image.setAttribute("style", "margin: 1.5rem;");
    }
}

function hexo_resize_image()
{
    var imgs = document.getElementsByTagName('img');
    for (var i = imgs.length - 1; i >= 0; i--) 
    {
        var img = imgs[i];
        var src = img.getAttribute('src').toString();
        var fields = src.match(/\?((?:%3C|<)?)(\d+)x(\d+)/);
        if (fields && fields.length > 0) {
            var width = fields[2];
            var height = fields[3];
            if (!(width.length && height.length))
            {
                var n_width = img.naturalWidth;
                var n_height = img.naturalHeight;
                if (width.length > 0)
                {
                    height = n_height*width/n_width;
                }
                if (height.length > 0)
                {
                    width = n_width*height/n_height;
                }
            }
            set_image_size(img, width, height, fields[1]);
        }

        fields = src.match(/\?((?:%3C|<)?)(\d+)/);
        if (fields && fields.length > 0) {
            var scale = parseFloat(fields[2].toString());
            var width = scale/100.0*img.naturalWidth;
            var height = scale/100.0*img.naturalHeight;
            set_image_size(img, width, height, fields[1]);
        }
    }
}
window.onload = hexo_resize_image;