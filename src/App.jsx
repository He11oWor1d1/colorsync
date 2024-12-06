import { useState, useEffect, useRef } from 'react'
import ColorPalette from './componenets/ColorPalette'
import * as utils from './Utilities/ColorUtils'
import Controlls from './componenets/Controlls'

function App() {
  const [colors, setColors] = useState([]);
  const [colorNum, setColorNum] = useState(5);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const colorNumRef = useRef(colorNum);
  colorNumRef.current = colorNum;

  useEffect(() => {
    setColors(utils.generateRandomPalette(colorNum));
  }, [colorNum]);

  function handleColorNumChange(newColorNum){
    setColorNum(newColorNum);
  };
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|ipod|android.*mobile|windows.*phone/.test(userAgent);
    const isTablet = /ipad|android(?!.*mobile)/.test(userAgent);
    setIsMobileOrTablet(isMobile || isTablet);

    setColors(utils.generateRandomPalette(colorNum));
    function handleColorChange(e){
      if(e.key === ' '){
        setColors(utils.generateRandomPalette(colorNumRef.current));
      }
    }
    document.addEventListener('keydown', handleColorChange);
    return () => {
      document.removeEventListener('keydown', handleColorChange);
    };
  }, []);

  return (
    <>
      <Controlls 
      colorNum={colorNum} 
      onColorNumChange={handleColorNumChange} 
      isMobileOrTablet={isMobileOrTablet} />

      <ColorPalette 
      colors={colors}
      isMobileOrTablet={isMobileOrTablet} />
    </>
  )
}

export default App
