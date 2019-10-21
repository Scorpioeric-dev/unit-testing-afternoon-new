export const shortenText = text => {
  // let shortened = text.substr(0, 100).trim();
  if (text.trim().length >= 100 && text.length !== 100){
    return `${text.substr(0,100).trim()}...`
  }
  return text
  // shortened.length === 100 && (shortened += '...');
  // return shortened;
};






  