import './css/ColorPalette.css'

function ColorPalette({ colors, isMobileOrTablet }){
  return (
    <div className={`palette ${isMobileOrTablet ? 'horizontal' : 'vertical'}`}>
      {colors.map((color, index) => (
        <div key={index} className="colors" style={{backgroundColor: color}}>
          <p className="hex">{color}</p>
        </div>
      ))}
    </div>
  );
}

export default ColorPalette;
