interface MyProps {
  visible: boolean;
  children?: JSX.Element | undefined | string;
}
const HelpText = (props: MyProps) => {
  const { visible, children } = props;
  if (!visible) return <></>;

  return <p className="text-left form-text text-danger my-1">{children}</p>;
};

export default HelpText;
