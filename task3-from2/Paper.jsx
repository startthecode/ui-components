export const Paper = ({ Component = "div", children, className, ...props }) => {
  return (
    <Component
      className={`bg-white rounded-2xl shadow-2xl p-5 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
