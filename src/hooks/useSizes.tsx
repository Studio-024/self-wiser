import { useEffect, useState } from "react";

export const useSizes = () => {
  const [ sizes, setSizes ] = useState({
    width: 0,
    height: 0
  }) 
  useEffect(() => {
    if(!sizes.width) {
      setSizes({
        width: document.children[0].clientWidth,
        height: document.children[0].clientHeight 
      })
    }
    window.onresize = () => setSizes({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }, [])
  return sizes
};
