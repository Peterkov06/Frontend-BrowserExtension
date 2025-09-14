export type ExtensionDataModel = {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

const ExtensionCard = (props: ExtensionDataModel) => {
  return (
    <div className="card">
      <div className="row">
        <img src={props.logo} alt="" className="cardIcon" />
        <div className="column">
          <h3 className="cardTitle">{props.name}</h3>
          <p className="cardSub">{props.description}</p>
        </div>
      </div>
      <div className="row space-between">
        <button className="removeBtn">Remove</button>
        <input type="checkbox" name="" id="" checked={props.isActive} />
      </div>
    </div>
  )
}

export default ExtensionCard