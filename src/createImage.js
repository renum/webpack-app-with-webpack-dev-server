export const createImage=(imgsrc)=>{
    const image=document.createElement('img');
   
    image.src=imgsrc;
    image.height=300;
    image.width=300;
    return image;
};  