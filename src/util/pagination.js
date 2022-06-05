export const getPagesToDisplay = (
    countPage,
    marginPagesDisplayed,
    currentPage
) => {
    const pagesList = Array.from({ length: countPage }, (_, index) => index + 1);

    return pagesList
        .filter((page) => {
            if (page === 1 || page === pagesList.length) return true;
            if (
                page >= currentPage - 1 &&
                page < currentPage + marginPagesDisplayed
            ) {
                return true;
            }
            return false;
        })
        .reduce((pages, page, index, pagesList) => {
            if (index === 1 && page - 1 !== 1) {
                pages.push("...");
            }

            pages.push(page);

            if (index === pagesList.length - 2 && page + 1 !== countPage) {
                pages.push("...");
            }
            return pages;
        }, []);
};