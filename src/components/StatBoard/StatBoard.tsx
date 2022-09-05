import TextStats from "../TextStats/TextStats";
//styling
import "./StatBoard.scss";

const StatBoard = () => {
  return (
    <div className="stat-board">
      <TextStats
        title="Activities"
        increment={3}
        data={228}
        chartData={[1, 2, 5, 8]}
        border
      />
      <TextStats
        title="Forms Created"
        data={44}
        chartData={[1, 2, 5, 8]}
        border
      />
      <TextStats title="Organization Key" data={"QWG3O32K"} />
    </div>
  );
};

export default StatBoard;
