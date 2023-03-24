// parametro para acceder al elemento DOM del div con los items
export const autoScroll = (containerRef: React.RefObject<HTMLDivElement>) => {

    //verifica si current existe
    if (containerRef.current) {

        //actualiza el scrollLeft en un pixel
      containerRef.current.scrollLeft += 1;
    }
    // si existe current y el scroll es mayor o igual total del scroll
    if ( containerRef.current && containerRef.current.scrollLeft >= containerRef.current.scrollWidth - containerRef.current.offsetWidth ) {
      
        //hace un reset del scroll a cero
        containerRef.current.scrollLeft = 0;
    }

    
  }