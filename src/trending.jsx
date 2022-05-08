import { useQuery } from "react-query";

export const Trending = () => {

  const useFetchData =  () => {
      return useQuery("data",()=>{
          return fetch(`https://jsonplaceholder.typicode.com/todos`).then((res)=>res.json());
      })
  };
  const { data, isLoading, isError } = useFetchData();
  console.log(data);
  return (
    <div>
      <div className="trending">
        {isLoading && <h1>loading....</h1>}
        {isError && <h1>try again!....</h1>}
      </div>
    </div>
  );
};
