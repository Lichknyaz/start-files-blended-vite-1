import ForbesListItem from '../ForbesListItem/ForbesListItem';
import style from './ForbesList.module.css';

const ForbesList = ({ forbes }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leader board</span>
        </h2>
      </div>

      <ul className={style.list}>
        {forbes.map(item => (
          <li key={item.id} className={style.item}>
            <ForbesListItem
              avatar={item.avatar}
              name={item.name}
              capital={item.capital}
              isIncrease={item.isIncrease}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForbesList;
