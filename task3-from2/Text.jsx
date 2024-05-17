export const Text = (props) => {
  let {
    Component = "p",
    size = "text-sm",
    color = "text-black",
    bold = true,
    className,
    children,
    ...otherProps
  } = props;

  return (
    <Component
      className={`${size} ${color} ${className} ${bold ? " font-bold" : ""}`}
    >
      {children}
    </Component>
  );
};
