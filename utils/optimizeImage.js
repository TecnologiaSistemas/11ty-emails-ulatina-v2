const fs = require('fs');
const path = require("path");
const Image = require("@11ty/eleventy-img");

module.exports = function(src, attrs = {}){
  let file;
  if(src.indexOf('https') === -1 || src.indexOf('http') === -1){
    file = (typeof src != "undefined")? './src/' + src : false;
  }
  if(fs.existsSync(file) ){
    let imageWidth = [];
    let imageFormat = [];

    if(typeof attrs.width == "string"){
      if(attrs.width.indexOf("%") === -1 ){
        attrs.width = Number(attrs.width);
      } else {
        attrs.width = 700;
      }
    } else if(typeof attrs.width == "undefined"){
      attrs.width = 700;
    }
    imageWidth = [attrs.width];

    if(typeof attrs.format == "undefined" || attrs.format == "jpg"){
      attrs.format = "jpeg";
    }
    imageFormat = [attrs.format];

    if(typeof attrs.quality == "undefined"){
      attrs.quality = 50;
    }

    if(attrs.format == "jpeg" || attrs.format == "jpg"){
      imageFormat = ["jpeg"];
    } else {
      imageFormat = [attrs.format];
    }
    
    let extension = path.extname(src), filename = path.basename(src, extension);

    let imageOptions = {
      widths: imageWidth,
      formats: imageFormat,
      filenameFormat: function(id, src, width, format, options){
        let fixFormat = (format == 'jpeg')? 'jpg' : format;
        return `${filename}_${width}w.${fixFormat}`;
      },
      outputDir: "./public/images/",
      urlPath: "/images/",
      sharpJpegOptions: {
        quality: attrs.quality
      },
      sharpWebpOptions: {
        quality: attrs.quality
      },
      sharpPngOptions: {
        quiality: attrs.quality
      }
    };

    Image(file, imageOptions);
    let imageData = Image.statsSync(file, imageOptions);

    return imageData[attrs.format][0];
  } else {
    if(src.indexOf('https') != -1 || src.indexOf('http') != -1){
      return {
        sourceType: "external",
        filename: src
      };
    } else {
      return;
    }
  }
}