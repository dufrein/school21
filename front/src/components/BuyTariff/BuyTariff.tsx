"use client";

import React, { useState } from "react";
import { BuyTariffProps } from "./types";
import { getClassList } from "@utils";
import styles from "./styles.module.scss";
import { OrderModal } from "@components";

export const BuyTariff: React.FC<BuyTariffProps> = (props) => {
  const { className, children } = props;
  const classList = getClassList(["button btnPrimary", styles.btnStub, className]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button className={classList} onClick={handleBuyClick}>
        {children}
      </button>
      <OrderModal isOpened={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
