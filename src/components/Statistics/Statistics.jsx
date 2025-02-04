import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import style from './Statistics.module.css';
import StatisticsItem from '../StatisticsItem/StatisticsItem';

const icons = [
  FaRegThumbsUp,
  MdPeople,
  MdOutlineProductionQuantityLimits,
  GiTreeDoor,
];

const Statistics = ({ title, stats }) => {
  return (
    <>
      {title && <h3 className={style.title}>{title}</h3>}
      <ul className={style.list}>
        {stats.map((item, i) => {
          return (
            <li className={style.item} key={item.id}>
              <StatisticsItem
                counter={item.total}
                title={item.title}
                icon={icons[i]}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Statistics;
