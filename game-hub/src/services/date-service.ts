import moment from 'moment';

export const getTomorrowDate = () => {
    
    let today = moment().format('DD/MM/YYYY HH:mm:ss');
    let tomorrow = moment().add(1, 'days').format('DD/MM/YYYY HH:mm:ss').toString();
    let yesterday = moment().subtract(1, 'days').startOf('day').format('DD/MM/YYYY HH:mm:ss').toString();
    console.log("Today:", today);
    console.log("tomorrow:", tomorrow);
    console.log("yesterday:", yesterday);

}