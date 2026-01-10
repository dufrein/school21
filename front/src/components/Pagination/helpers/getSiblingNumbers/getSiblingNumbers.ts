export type GetSiblingNumbersParams = {
  activePageNumber: number;
  pagesCount: number;
};

export const getSiblingNumbers = ({ activePageNumber, pagesCount }: GetSiblingNumbersParams) => {
  const siblingNumbers = [activePageNumber];

  const firstSibling = activePageNumber - 2 > 0 ? activePageNumber - 2 : 0;
  const lastSibling = activePageNumber + 2 < pagesCount ? activePageNumber + 2 : pagesCount - 1;
  const beforeNumbers = [];

  for (let i = firstSibling; i < activePageNumber; i++) {
    beforeNumbers.push(i);
  }

  siblingNumbers.unshift(...beforeNumbers);

  for (let i = activePageNumber + 1; i <= lastSibling; i++) {
    siblingNumbers.push(i);
  }

  return siblingNumbers;
};
