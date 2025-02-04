import style from './StatisticsItem.module.css';
import { IconContext } from 'react-icons';

const StatisticsItem = ({ counter, title, icon: Icon }) => {
  return (
    <>
      <IconContext.Provider
        value={{ color: 'blue', className: 'global-class-name', size: '40' }}
      >
        <Icon />
      </IconContext.Provider>
      <span className={style.counter}>{counter}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
