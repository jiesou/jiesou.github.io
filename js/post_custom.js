if(Waline.init({el:"#comments",serverURL:"https://waline.jiecs.top",placeholder:"说点什么吧...",copyright:!1,requiredMeta:[],dark:'html[data-user-color-scheme="dark"]',emoji:["https://unpkg.com/@waline/emojis@1.1.0/tieba","https://unpkg.com/@waline/emojis@1.1.0/alus","https://unpkg.com/@waline/emojis@1.1.0/bilibili","https://unpkg.com/@waline/emojis@1.1.0/qq","https://unpkg.com/@waline/emojis@1.1.0/weibo"],login:"disable",imageUploader:function(e){var t;return confirm("图片将上传到 img.ink，可供任何人浏览、编辑、删除，请勿上传重要信息。也可填写自己的图片链接")?((t=new FormData).append("image",e),fetch("https://img.ink/api/upload",{method:"POST",headers:{Token:"a55530f768745933f5cc962a19200cb6"},body:t}).then(e=>e.json()).then(e=>e.data.url)):"Enter your image link here"}}),window.location.hash){let e=setInterval(function(){$(window.location.hash).length&&($("html, body").animate({scrollTop:$(window.location.hash).offset().top-10},700),clearInterval(e))},100)}let removeTarget=setInterval(function(){var e=document.querySelectorAll('div.vcontent > p > a[href^="#"]');e.length&&(Array.from(e).forEach(e=>e.removeAttribute("target")),clearInterval(removeTarget))},100);