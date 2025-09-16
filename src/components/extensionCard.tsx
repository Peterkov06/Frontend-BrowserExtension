import { useContext, useEffect, useState } from "react";
import { filteringContext } from "./extensionList";

export type ExtensionDataModel = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

const ExtensionCard = (props: ExtensionDataModel) => {

  const ctx = useContext(filteringContext);
  
  function change()
  {
    ctx.modifySelected(props.name, !props.isActive)
  }

  return (
    <div className="card">
      <div className="row">
        <img src={props.logo} alt="" className="cardIcon" />
        <div className="column m-5">
          <h2 className="cardTitle">{props.name}</h2>
          <p className="cardSub">{props.description}</p>
        </div>
      </div>
      <div className="row space-between">
        <button className="removeBtn">Remove</button>
        <input type="checkbox" name="" id="" checked={props.isActive} onChange={change}/>
      </div>
    </div>
  )
}

export default ExtensionCard