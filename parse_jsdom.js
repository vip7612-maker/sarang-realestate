const { JSDOM } = require('jsdom');
const http = require('http');

http.get('http://xn--vk1b28fnxjq9f2g842agur.com/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    try {
      const dom = new JSDOM(data);
      const document = dom.window.document;
      
      const elementsToRemove = document.querySelectorAll('script, style, noscript');
      elementsToRemove.forEach(el => el.remove());
      
      const text = document.body.textContent.replace(/\s+/g, ' ').trim();
      console.log("=== EXTRACTION RESULT ===");
      console.log(text.substring(0, 3000));
    } catch (e) {
      console.error("Parse Error:", e);
    }
  });
}).on("error", (err) => {
  console.log("Network Error: " + err.message);
});
