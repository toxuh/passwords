import React, { FC } from "react";

interface Props {
  name: string;
  checked: boolean;
  handleChecked: (checked: boolean) => void;
}

const SettingsBlock: React.FC<Props> = ({ name, checked, handleChecked }) => (
  <div className="SettingsWrapper">
    <div>{name}</div>
    <label className="Switch">
      <input
        className="Checkbox"
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChecked(e.target.checked)}
      />
      <span className="SwitchWrapper" />
    </label>
  </div>
);

export default SettingsBlock;
