/* function to validate a image:
  arguments
    sName: image name (without extension) e.g. 'example'
    sExt: image extension e.g. 'jpg'
    lSize: image size in bytes e.g. 68296 (66.7 KB)
  return
    0: valid image
    -1: no valid extension
    -2: no valid size
*/

function validImage(sName, sExt, lSize) {
  
  var lLimit = 307200; //300 KB
  var aExt = ['jpg', 'gif', 'jpeg']; //lowercase extension

  //control extension
  if (aExt.toString().indexOf(sExt) < 0) {return -1;}
  
  //control size
  if (lSize > lLimit) {return -2;}

  //that's OK
  return 0;
}