interface MyProps {}
const defaultProps = {};
const DashboardPage = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const {} = props;
  return (
    <div data-testid="DashboardPage" className="fadein">
      <h1>DashboardPage component</h1>
    </div>
  );
};

export default DashboardPage;
