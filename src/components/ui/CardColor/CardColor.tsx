import { CardColors } from "./types/CardColors";

interface MyProps {
  bgColor?: CardColors;
  headerText: string;
  title: string;
  children?: JSX.Element | undefined | string;
}
const defaultProps = {
  bgColor: CardColors.PRIMARY,
};

const CardColor = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { bgColor, title, children, headerText } = props;
  return (
    <div className={`card text-white ${bgColor} mb-3 mx-2 w-100 h-100`}>
      <div className="card-header">{headerText}</div>
      <div className="card-body d-flex align-items-center justify-content-center flex-column">
        <h5 className="card-title">{title}</h5>
        {children}
      </div>
    </div>
  );
};

export default CardColor;
