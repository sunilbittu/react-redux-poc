
import moment from 'moment';
class DateUtils {

    ConvertIsoToSimpleDateFormat(isoDate) {
        // Format : DD/MM/YYYY
        const dob = new Date(isoDate);
        let year = dob.getUTCFullYear();
        let month = dob.getUTCMonth() + 1;
        month=month<10 ? '0'+month : month;
        let date = dob.getUTCDate();
        date=date<10 ? '0'+date : date;
        return date + "/" + month + "/" + year;
    }
    secondsToHm=(d) =>{
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? "min" : "min") : "";
        
        return hDisplay + mDisplay; 
    }
    convertStringToDate(dateString){
        const dateObj = moment(dateString).format('DD-MM-YYYY');
        return dateObj;
    }

    convertToDateFormate(dateString){
        const dateObj = moment(dateString).format('DD-MMM-YYYY HH:MM');
        return dateObj;
    }

    convertStringdateFormat(dateString){
        const dateObj = moment(dateString).format('MMM DD YYYY');
        return dateObj;
    }
    msToTime(duration ) {
        var d = new Date(duration);

      return d.toLocaleString();
      }
      timeStampToDate(duration ) {
        var d = new Date(duration);

      return d.toDateString();
      }
      prettyDate(timeStamp,format) {
        const dateObj = moment(timeStamp).format(format);
        return dateObj;
      }
     
      msTTime(timeStamp) {
        // Pad to 2 or 3 digits, default is 2
        var ms = Date.parse(timeStamp);
        return new Date(ms).toISOString().slice(11, -1); 
    }
    
    
      timeStampToTime(duration ) {
        var d = new Date(duration);

      return d.toLocaleTimeString();
      }
      msToTime(duration) {
        var milliseconds = parseInt((duration % 1000) / 100),
          seconds = Math.floor((duration / 1000) % 60),
          minutes = Math.floor((duration / (1000 * 60)) % 60),
          hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
          if (hours != "") {
            return hours +"h" +"  "+ minutes +"min"
        }
        return minutes + " min";
      
        
      }

      convertToDate(dateString){
        const dateObj = moment(dateString).format('DD/MM/YYYY');
        return dateObj;
    }
}
export default new DateUtils()