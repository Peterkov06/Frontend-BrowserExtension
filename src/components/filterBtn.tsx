import { useContext, useEffect, useState } from "react";
import { filteringContext } from "./extensionList";

const FilterBtn = (props: {txt: string, selected?: boolean, value: boolean | null}) => {
  const ctx = useContext(filteringContext);
  
  const classesUnactive = "filterBtn"
  const classesActive = "filterBtn activeFilter"
  

  function clicked()
  {
    if (ctx.filterState !== props.value)
    {
      ctx.changeState(props.value);
    }
  }

  return (
    <div className={ctx.filterState === props.value ? classesActive : classesUnactive} onClick={clicked}>
        <p>{props.txt}</p>
    </div>
  )
}

export default FilterBtn