const ToggleSwitch = (props) => {
    
    return (
    <div className="toggle">
      <div class="toggle-switch">
      <input
        onClick={props.onCheck} className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
      </div>
    </div>
  );
};

export default ToggleSwitch;