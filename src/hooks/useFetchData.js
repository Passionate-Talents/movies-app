import { useQuery } from "react-query";

export const useFetchData = (queryKey, queryFn, config) => {
    const { data, isLoding, isError } = useQuery(queryKey, queryFn, config);

    return { data, isLoding, isError };
};