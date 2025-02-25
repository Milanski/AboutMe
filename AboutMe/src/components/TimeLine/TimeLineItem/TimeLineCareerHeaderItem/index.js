import React,  { CSSProperties } from 'react';
// import clsx from 'clsx';
// import styles from '../../styles.module.css';
// import faIcons, { prefix } from '@fortawesome/free-solid-svg-icons';
// import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TimelineCareerHeaderItem = ({
  icon,
  position,
  location,
  employeer,
  fromDate,
  toDate
}) => {
    var solidIcon = "fa-solid ".concat(icon)
    var to = toDate?toDate:'Today'
    var employedDateSlot=fromDate?'('.concat(fromDate, ' - ',to,')') : ''
    return (
        <div>
            <FontAwesomeIcon icon={solidIcon} size="2Ox" />  <b> {position} </b> <i>{employedDateSlot}</i><br/>
            <p>{employeer}, <i>{location}</i></p>
        </div>
  );
};


export default TimelineCareerHeaderItem;
