import React, { useMemo } from "react";

import Paginator from "../Paginator";
import PerPageSelector from "../PerPageSelector";

import styles from "./TableController.module.scss";

export default function TableController({
  total,
  perPage,
  curPage,
  updateCurPage,
  updatePerPage,
}) {
  const totalPage = useMemo(() => {
    return Math.ceil(total / perPage);
  }, [perPage, total]);
  return (
    <div className={styles.Root}>
      <PerPageSelector
        curPage={curPage}
        perPage={perPage}
        updateCurPage={updateCurPage}
        updatePerPage={updatePerPage}
      />
      <Paginator
        totalPage={totalPage}
        curPage={curPage}
        perPage={perPage}
        updateCurPage={updateCurPage}
      />
    </div>
  );
}
