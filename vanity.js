/*
  Vanity.js
  
  (C) Lackluster Studios
  
*/

document.title = 'Loading...';
vanity_irl = window.location.pathname;

const vanity = {
  link: function(vanity, file){
      if (vanity === vanity_irl) {
          document.documentElement.innerHTML = `<iframe src="${file}" style="position:fixed; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%; border:none; margin:0; padding:0; overflow:hidden; z-index:999999;" id="vfrm"> Your browser doesn't support iframes </iframe>`;
          const frame = document.querySelector('#vfrm');
          frame.addEventListener('load', () => {
            document.title = frame.contentDocument.title;
          });
      }
  },
  redirect: function(vanity, url){
    if (vanity === vanity_irl) {
        window.location.replace(url);
    }
  }
};
