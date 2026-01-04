import React from "react";
import { PaginationProps } from "./types";
import { getClassList } from "@utils";
import { getSiblingNumbers } from "./helpers";

/**
 * Компонент пагинации страниц
 * @param activePageNumber - номер текущей страницы, отсчет от 0
 */
export const Pagination: React.FC<PaginationProps> = (props) => {
  const { pagesCount, setPageHandler, activePageNumber, isFixed } = props;
  const siblingNumbers = getSiblingNumbers({ activePageNumber, pagesCount });
  const classList = getClassList(["pagination", isFixed && "pagination_fixed"]);

  return (
    <div className={classList} title={"Тут вы можете перейти на другую страницу"}>
      <div className={"pagination-numbers"}>
        {activePageNumber > 2 && (
          <>
            <button className={"pagination-numbers-item"} onClick={() => setPageHandler(0)}>
              1
            </button>
            {"..."}
          </>
        )}
        {activePageNumber > 0 && (
          <button
            className={"pagination-numbers-item"}
            onClick={() => setPageHandler(activePageNumber - 1)}
          >
            {"<"}
          </button>
        )}
        {siblingNumbers.map((siblingItem) => (
          <button
            className={getClassList([
              "pagination-numbers-item",
              activePageNumber === siblingItem && "pagination-numbers-item_active",
            ])}
            key={siblingItem + 1}
            onClick={() => setPageHandler(siblingItem)}
          >
            {siblingItem + 1}
          </button>
        ))}
        {activePageNumber < pagesCount - 1 && (
          <button
            className={"pagination-numbers-item"}
            onClick={() => setPageHandler(activePageNumber + 1)}
          >
            {">"}
          </button>
        )}
        {activePageNumber < pagesCount - 3 && (
          <>
            {"..."}
            <button
              className={"pagination-numbers-item"}
              onClick={() => setPageHandler(pagesCount - 1)}
            >
              {pagesCount}
            </button>
          </>
        )}
      </div>
    </div>
  );
};
