import React from "react";
import PaginationStyled from "./PaginationStyled";
import Button from "../Button/Button";

interface PaginationProps {
  nextOnClick: () => void;
  backOnClick: () => void;
  totalVideogames: number;
  page: number;
  limit: number;
}

const Pagination = ({
  nextOnClick,
  backOnClick,
  totalVideogames,
  page,
  limit,
}: PaginationProps): React.ReactElement => {
  const totalPages = Math.ceil(totalVideogames / limit);
  const isPreviousDisabled = page === 1;
  const isNextDisabled = page === totalPages;

  return (
    <PaginationStyled className="pagination">
      <Button
        button={{
          className: "go-back-button",
          icon: "images/icon-back.svg",
          alt: "go back icon",
          width: "48",
          height: "48",
          actionOnClick: backOnClick,
          isDisabled: isPreviousDisabled,
        }}
      />
      <span className="pagination__page-number">
        {page} / {totalPages}
      </span>
      <Button
        button={{
          className: "go-next-button",
          icon: "images/icon-next.svg",
          alt: "go next button",
          width: "48",
          height: "48",
          actionOnClick: nextOnClick,
          isDisabled: isNextDisabled,
        }}
      />
    </PaginationStyled>
  );
};

export default Pagination;
