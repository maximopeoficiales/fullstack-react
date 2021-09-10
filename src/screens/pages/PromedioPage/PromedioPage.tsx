interface MyProps {}
const defaultProps = {};
const PromedioPage = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="PromedioPage" className="fadein">
      <h1>PromedioPage component</h1>
    </div>
  );
};

export default PromedioPage;
