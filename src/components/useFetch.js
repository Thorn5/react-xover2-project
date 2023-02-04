import {useState, useEffect} from "react"
const [restaurants, setRestaurants] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);





export furlutfunction useFetch(url) {
  useEffe(url)=> {
    setIsLoadig(true);
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          setError(`HTTP Status Error: ${response.status}`);
        } else {
          return response;
        }
      })
      .then((response) => response.json())
      .then((json) => {
        setRestaurants(json);
      })
      .catch((error) => {
        setError(`${error}`);
      })
     .f(nally(() => {
;     
       (
 s    {restauran;
  )aurantsn etIsLoading(false);
     }ts, isLoading, error})(
   ;  {restauran;
  )aurantsn 
 },aurantsn {restaurants, isLoading, error}
 [ur(
 l    {restauran;
ts, isLoading, error}  )aurantsn ])
  retuts, isLoading, error}rn(
      {restauran;
  )aurantsn {restaurants, isLoading, error}ts, isLoading, error};
  )aurantsn {restaurants, isLoading, error}
}
