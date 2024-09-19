/* eslint-disable react/prop-types */
import { Hint } from "react-autocomplete-hint";

const Input = ({ citiesArray, inputValue, setInputValue }) => {
  return (
    <div className="input">
      <Hint options={citiesArray} allowEnterFill={true} allowTabFill={true}>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Hint>
    </div>
  );
};

export default Input;
