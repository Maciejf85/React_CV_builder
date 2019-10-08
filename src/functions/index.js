//  Change UNIX to date

export const formatDate = date => {
  const months = [
    'sty',
    'lut',
    'mar',
    'kwi',
    'maj',
    'cze',
    'lip',
    'sie',
    'wrz',
    'paź',
    'lis',
    'gru',
  ];

  const format = new Date(date * 1000);

  const day = format.getDate();
  const month = format.getMonth();
  const year = format.getFullYear();

  return `${day}-${months[month]}-${year}`;
};

//  Change format date from xxx-xx-xx to xx-xx-xxx

export const reverseDate = date => {
  if (typeof date === 'string') {
    const temp = date
      .split('-')
      .reverse()
      .join('-');
    return temp;
  }
  return '';
};

export const image64toCanvasRef = (canvasRef, image64, pixelCrop) => {
  console.log('canvasRef, image64, pixelCrop', canvasRef, image64, pixelCrop);
  const canvas = canvasRef;
  canvas.width = pixelCrop.width;
  canvas.height = pixelCrop.height;
  const ctx = canvas.getContext('2d');
  const image = new Image(400, 617);
  image.src = image64;
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  console.log('scaleX', scaleX);
  console.log('scaleY', scaleY);
  image.onload = () => {
    ctx.drawImage(
      image,
      pixelCrop.x * scaleX,
      pixelCrop.y * scaleY,
      pixelCrop.width * scaleX,
      pixelCrop.height * scaleY,
      0,
      0,
      pixelCrop.width,
      pixelCrop.height,
    );
  };
};
