import React from "react";

const PickerList = ({ name, changeID, total }) => {
    return (
        <div className="input-group mb-3">
            <select onChange={(e) => changeID(e.target.value)} className="form-select" id={name} >
                <option value="1">Choose {name}...</option>
                {[...Array(total).keys()].map((x, _) => {
                    return (
                        <option value={x + 1}> {name}: {x + 1} </option>
                    );
                })}
            </select>
        </div>
    );
};

export default PickerList;
