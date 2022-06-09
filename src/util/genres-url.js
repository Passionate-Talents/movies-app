export const genresUrl = (genresIds) => {
    if (genresIds.length == 0) return "";
    return genresIds.reduce((prev, curr) => prev + "," + curr);
};