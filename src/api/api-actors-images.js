import axios from "axios";
import { useQuery } from "react-query";

export const useActorsImages = (mediaType, id) => {
    return useQuery(
        "actors-images",
        () => {
            return axios.get(
                `https://api.themoviedb.org/3/${mediaType}/${id}/credits?api_key=1a0525b93e71ae4a85e33829e5132266&language=en-US`
            );
        }, {
            select: (response) =>
                response.data.cast.map(({ name, id, profile_path: src }) => ({
                    name,
                    id,
                    src,
                })),
        }
    );
};