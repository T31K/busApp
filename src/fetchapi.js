const myHeaders = new Headers();
myHeaders.append("AccountKey", process.env.REACT_APP_acc_key);
myHeaders.append("accept", "application/json");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export const fetchapi = async () => {
const response = await fetch(`https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=78049`, requestOptions)
  return await response.json();
}