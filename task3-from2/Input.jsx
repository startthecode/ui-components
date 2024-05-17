import { forwardRef } from "react";
import { ContionalUi } from "./ContionalUi";

export const Input = forwardRef((props, ref) => {
  let { error, name, label, classes, ...otherProps } = props;
  return (
    <div className={`inputFields mb-5 ${classes?.root}`}>
      <ContionalUi
        condition={label}
        Element={
          <label
            htmlFor={name}
            className={`block text-start text-black text-[14px] ${
              classes?.label || ""
            }`}
          >
            {label}
          </label>
        }
      />
      <input
        type="text"
        ref={ref}
        name={name}
        className={`p-3 bg-slate-100 outline-none w-full rounded-sm ${
          classes?.input || ""
        }`}
        {...otherProps}
      />
      <span
        className={`text-[14px] text-start block text-red-500${
          classes?.error || ""
        }`}
      >
        {error}
      </span>
    </div>
  );
});
