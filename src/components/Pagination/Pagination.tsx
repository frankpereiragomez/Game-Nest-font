import React from "react";
import PaginationStyled from "./PaginationStyled";
import Button from "../Button/Button";

const Pagination = (): React.ReactElement => {
  return (
    <PaginationStyled className="pagination">
      <Button
        button={{
          className: "go-back-button",
          icon: "images/icon-back.svg",
          alt: "go back icon",
          width: "48",
          height: "48",
        }}
      />
      <Button
        button={{
          className: "go-next-button",
          icon: "images/icon-next.svg",
          alt: "go next button",
          width: "48",
          height: "48",
        }}
      />
    </PaginationStyled>
  );
};

export default Pagination;
