const myHeaders = new Headers();
myHeaders.append("AccountKey", 'SsmusG4IRl2bt/N+BsE21A==');
myHeaders.append("accept", "application/json");
const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export const fetchapi = async (bus_code) => {
const response = await fetch(`https://cors-anywhere.herokuapp.com/http://datamall2.mytransport.sg/ltaodataservice/BusArrivalv2?BusStopCode=${bus_code}`, requestOptions)
  return await response.json();
}