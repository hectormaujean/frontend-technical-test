import moment from 'moment';

export function humanizeTimestamp(timestamp: number) {
    const timestampMoment = moment(timestamp, 'X');

    if (timestampMoment.isSame(moment(), 'day')) {
        return timestampMoment.format('hh:mm')
    } else if (timestampMoment.isSame(moment(), 'week')) {
        return timestampMoment.format('ddd')
    } else {
        return timestampMoment.format('D MMM')
    }
}