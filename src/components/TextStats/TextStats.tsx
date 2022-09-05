import { FC } from "react";
import { BsCaretUpFill } from "react-icons/bs";
import chartImage from "../../assets/images/chart-img.png";

//styling
import "./TextStats.scss";

type Props = {
  children?: React.ReactNode;
  title: string;
  increment?: number;
  data?: string | number;
  chartData?: number[];
  border?: boolean;
};

const TextStats: FC<Props> = ({
  title,
  data,
  increment,
  chartData,
  border,
}) => {
  return (
    <div className={`text-stats ${border && "line-border"}`}>
      {!!chartData && (
        <img src={chartImage} alt="chart" className="chart-img" />
      )}
      <div className="detail-container">
        <h3 className="data-text">{data}</h3>
        {!!increment && (
          <div className="detail">
            <BsCaretUpFill className="icon" />
            <small>{`+${increment}`}</small>
          </div>
        )}
      </div>
      <p className="title">{title}</p>
    </div>
  );
};

export default TextStats;
