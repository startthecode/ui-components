export const Button = (props) => {
  let {
    Component = "button",
    href = null,
    type = "submit",
    children,
    className,
    ...otherProps
  } = props;

  if (href)
    return (
      <a className="" href={href} {...otherProps}>
        {children}
      </a>
    );
  return (
    <Component
      type={type}
      {...otherProps}
      className={`bg-violet-600 text-white p-3 max-w-[150px] rounded-lg w-full ${className}`}
    >
      {children}
    </Component>
  );
};
