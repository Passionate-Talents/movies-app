import React, { useEffect, useState } from "react";

import { useMovieGenres } from "../../hooks/use-movie-genre";
import { Chip } from "../../components/chip/chip";

export const Genres = ({ selectedGenres, setSelectedGenres }) => {
  const { data: genres } = useMovieGenres();
  const [copyGenres, setCopyGenres] = useState(genres);

  const handleAddSelect = (selectGenres) => {
    setSelectedGenres([...selectedGenres, selectGenres]);
    setCopyGenres(copyGenres.filter((genre) => genre.id !== selectGenres.id));
  };

  useEffect(() => {
    setCopyGenres(genres);
  }, [genres]);

  const handleDeleteSelect = (selectGenres) => {
    setSelectedGenres(
      selectedGenres.filter((genre) => genre.id !== selectGenres.id)
    );
    setCopyGenres([...copyGenres, selectGenres]);
  };

  return (
    <div className="button-container">
      {selectedGenres &&
        selectedGenres.map((gener) => (
          <Chip
            name={gener.name}
            handleDelete={() => handleDeleteSelect(gener)}
            classIcon={"icon-delete"}
            classButton={"cta-when-click"}
          />
        ))}
      {copyGenres &&
        copyGenres.map((gener) => (
          <Chip
            name={gener.name}
            classIcon={"hide"}
            classButton={"cta-animation"}
            handelClickChip={() => handleAddSelect(gener)}
          />
        ))}
    </div>
  );
};
