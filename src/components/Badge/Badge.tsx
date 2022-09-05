import { FC } from "react";
import "./Badge.scss";

type Props = {
  imgUrl?: string;
};
const Badge: FC<Props> = ({ imgUrl }) => {
  return <img className="badge" src={imgUrl} alt="avatar" />;
};

export default Badge;
