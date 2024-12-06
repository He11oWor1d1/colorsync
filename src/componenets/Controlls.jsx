function Controlls({ colorNum, onColorNumChange, isMobileOrTablet }){
  function handleSelectChange(e){
    const newColorNum = parseInt(e.target.value, 10);
    onColorNumChange(newColorNum);
  }

  return (
    <div>
      <div className="row align-items-center mx-3 mb-3 mt-3">
        <div className="col-lg-4">
          <h2>Number of colors</h2>
          <select id="colorNum"
          name="colorNum"
          className="form-select bg-dark text-light"
          value={colorNum}
          onChange={handleSelectChange}>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5" selected>5</option>
            <option value="4">4</option>
            <option value="3">3</option>
          </select>
        </div>
        {
          isMobileOrTablet ? <button className="btn btn-primary mt-3">Generate</button> 
          : 
          <p className="mt-3">Press spacebar for a random palette</p>
        }
      </div>
    </div>
  );
}

export default Controlls;
