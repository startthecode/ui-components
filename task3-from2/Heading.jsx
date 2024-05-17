import css from "./heading.module.css";

export const Heading = (props) => {
  let {
    color = "text-black",
    size = "text-xs",
    bold = false,
    Component = "div",
    children,
    className,
    ...otherProps
  } = props;
  console.log(className);
  return (
    <Component
      className={`${className?.includes("text-[#") ? "" : color} ${size}${
        bold ? " font-bold" : ""
      } ${className ? className : ""} ${css.dummy}`}
      {...otherProps}
    >
      {children}
    </Component>
  );
};
