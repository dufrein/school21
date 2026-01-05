import { RefObject, useEffect } from "react";

/**
 * Хук для добавления внешним ссылкам target='_blank' если они идут на внешний источник
 * @param contentBlockRef 
 */
export const useAddTargetBlank = (contentBlockRef: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    contentBlockRef.current?.querySelectorAll<HTMLAnchorElement>("a").forEach((anchorItem) => {
      if (!anchorItem.href.includes(process.env.NEXT_PUBLIC_URL || "")) {
        anchorItem.target = "_blank";
      }
    });
  }, []);
};
