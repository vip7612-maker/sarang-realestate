const { JSDOM } = require('jsdom');
const http = require('http');

http.get('http://xn--vk1b28fnxjq9f2g842agur.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
      const dom = new JSDOM(data);
      const document = dom.window.document;
      
      const images = Array.from(document.querySelectorAll('img')).map(img => img.src);
      const iframes = Array.from(document.querySelectorAll('iframe')).map(iframe => iframe.src);
      const videos = Array.from(document.querySelectorAll('video')).map(video => video.src);
      const bgElements = Array.from(document.querySelectorAll('*')).filter(el => {
          const style = el.getAttribute('style');
          return style && style.includes('background-image');
      }).map(el => el.getAttribute('style'));

      console.log("=== IMAGES ===");
      images.filter(src => src && !src.startsWith('data:')).forEach(src => console.log(src));
      
      console.log("\n=== IFRAMES (Vimeo/Youtube) ===");
      iframes.forEach(src => console.log(src));
      
      console.log("\n=== VIDEOS ===");
      videos.forEach(src => console.log(src));

      console.log("\n=== BACKGROUND IMAGES ===");
      bgElements.forEach(style => console.log(style));

    } catch (e) {
      console.error("Parse Error:", e);
    }
  });
}).on("error", (err) => {
  console.log("Network Error: " + err.message);
});
