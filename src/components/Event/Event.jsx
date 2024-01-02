import { FaMapMarkerAlt, FaCalendarAlt, FaUserAlt, FaClock } from 'react-icons/fa';
import css from 'components/Event/Event.module.css';
import { formatEventDuration, formatEventStart } from '../utils';
import { iconSize } from 'contants';

// import { formatEventStart } from '../utils/formatEventStart';
// import { formatEventDuration } from '../utils/formatEventDuration';
export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>
        <FaMapMarkerAlt className={css.icon} size={iconSize.sm} />
        {location}
      </p>
      <p className={css.info}>
        <FaUserAlt className={css.icon} size={iconSize.sm} />
        {speaker}
      </p>
      <p className={css.info}>
        <FaCalendarAlt className={css.icon} size={iconSize.sm} />
        {formattedStart}
      </p>
      <p className={css.info}>
        <FaClock className={css.icon} size={iconSize.sm} />
        {duration}
      </p>
      <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>
  );
};
