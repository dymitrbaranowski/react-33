import { FaMapMarkerAlt, FaCalendarAlt, FaUserAlt, FaClock } from 'react-icons/fa';

import { formatEventDuration, formatEventStart } from '../utils';
import { iconSize } from 'constants';
import { Card, EventName, Info, Chip } from './Event.styled';
// import { formatEventStart } from '../utils/formatEventStart';
// import { formatEventDuration } from '../utils/formatEventDuration';
export const Event = ({ name, location, speaker, type, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <Card>
      <EventName>{name}</EventName>
      <Info>
        <FaMapMarkerAlt size={iconSize.sm} />
        {location}
      </Info>
      <Info>
        <FaUserAlt size={iconSize.sm} />
        {speaker}
      </Info>
      <Info>
        <FaCalendarAlt size={iconSize.sm} />
        {formattedStart}
      </Info>
      <Info>
        <FaClock size={iconSize.sm} />
        {duration}
      </Info>
      <Chip eventType={type}>{type}</Chip>
    </Card>
  );
};

//className={`${css.chip} ${css[type]}`}
