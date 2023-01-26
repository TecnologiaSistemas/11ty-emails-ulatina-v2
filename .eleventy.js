const markdownIt = require("markdown-it");
const markdownItAttrs = require('markdown-it-attrs');
const markdownItMdTable = require('markdown-it-multimd-table');
const sass = require('sass');
const inlineCss = require('inline-css');
const beautify = require("js-beautify");
const fs = require('fs');
const path = require("path");

//Utils
const processImage = require('./utils/optimizeImage');

module.exports = function(eleventyConfig) {
  let enviroment = process.env.ELEVENTY_ENV.trim();
  console.info('\x1b[42m%s\x1b[0m', `Build for: ${enviroment} `);

  //Directory configutation
  eleventyConfig.dir = {
    input: "src",
    includes: "_includes",
    layouts: "_layouts",
    data: "_data",
    output: "public"
  };

  //Template engines
  eleventyConfig.markdownTemplateEngine= "njk";
  eleventyConfig.htmlTemplateEngine= "njk";

  eleventyConfig.setTemplateFormats(["md", "njk", "html"]);

  //Data
  eleventyConfig.setDataDeepMerge(true);

  //Markdown config
  const markdownLibrary = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true
  })
  .use(markdownItAttrs)
  .use(markdownItMdTable, { 
    multiline:  true,
    rowspan:    true,
    headerless: true
  });

  eleventyConfig.setLibrary("md", markdownLibrary);

  //11ty events
  eleventyConfig.on('eleventy.before', function(){
    //Sass
    if (!fs.existsSync('./public/css')){
      fs.mkdirSync('./public/css');
    }
    const css = sass.compile("./src/_includes/css/styles.scss", { style: "compressed", sourceMap: false });
    fs.writeFile("./public/css/styles.css", css.css, function(error){
      if(error){
        console.log("\x1b[41m%s\x1b[0m", `Sass Error: ${error}`);
      }
    });
  });
  
  //Transforms
  eleventyConfig.addTransform("beautify", function(content, outputPath) {
    if(outputPath.endsWith(".html")){
      content = inlineCss(content, {
        removeStyleTags: false,
        applyStyleTags: false,
        url: "file://" + path.resolve("public/styles.css")
      }).then( html => {
        return beautify.html(html, {
          "indent-size": 2,
          "max-preserve-newlines": 0
        });
      }).catch( error => { console.log(error); } );
    };
    return content;
  });

  //Shortcodes
  eleventyConfig.addShortcode("renderMarkDown", function(content){
    return markdownLibrary.render(content);
  });

  eleventyConfig.addShortcode("renderMarkDownFile", function(file) {   
    let validFile = (file != undefined)? ((path.extname(file) != '.md')? false : true ) : false;
    if(validFile) {
      if(fs.existsSync('./src/_content/'+ file)){
        let data = fs.readFileSync('./src/_content/'+ file, 'utf-8', function (error, content) {
          if(error){
            console.log("\x1b[41m%s\x1b[0m", `[11ty] Render MarkDown: ${error}`);
            return;
          }
          return content;
        });
        return markdownLibrary.render(data);
      } else {
        console.log("\x1b[41m%s\x1b[0m", `[11ty] Markdown file not found: ${file}`);
      }
    } else {
      console.log("\x1b[41m%s\x1b[0m", `[11ty] Invalid Markdown extension: ${file}`);
    }
  });

  eleventyConfig.addShortcode("sass", function(file) {   
    const css = sass.compile("./src/_includes/css/responsive.scss", { style: "compressed", sourceMap: false });
    return css.css;
  });

  eleventyConfig.addShortcode("image", function(src, attrs = {}){
    let imageObj = processImage(src, attrs);
    let imageUrl = imageObj.filename;
    if(imageObj.sourceType != "external"){
      if(enviroment == "production"){
        console.log('\x1b[41m%s\x1b[0m', `Local image: ./public/images/${imageUrl}. Upload to the server and/or change the URL`);
        imageUrl = attrs.domain + "/"+ imageUrl;
      } else {
        console.log('\x1b[41m%s\x1b[0m', `Processing local image: ${imageUrl}`)
        imageUrl = "/images/" + imageUrl;
      }
    }
    return imageUrl;
  });

  //Filters
  eleventyConfig.addFilter("roman", function(index){
    const romanIndex = { l:50, xl:40, x:10, ix:9, v:5, iv:4, i:1};
    let roman = '', i;
    for ( i in romanIndex ) {
      while ( index >= romanIndex[i] ) {
        roman += i;
        index -= romanIndex[i];
      }
    }
    return roman;
  });

  eleventyConfig.addFilter("letter", function(index){
      return String.fromCharCode(96 + index);
  });
  
  eleventyConfig.addFilter('typeOf', function(v){
    let type = typeof v;
    if(type == "object"){ if(Array.isArray(v)){ return "array"; } else { return type; } } else { return type; }
  });

  return eleventyConfig;
};