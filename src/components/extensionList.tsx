import { useEffect, useState } from 'react'
import ExtensionCard, { type ExtensionDataModel } from './extensionCard'
import FilterBtn from './filterBtn'

const ExtensionList = () => {
  const [data, setdata] = useState<ExtensionDataModel[]>()

  useEffect(() => {
    fetch("/data/data.json")
    .then(res => res.json())
    .then(d => setdata(d));
  })
  
  return (
    <div>
      <div className='row space-between'>
          <h2>Extensions List</h2>
          <div className='row filters alignCenter'>
              <FilterBtn txt='All'></FilterBtn>
              <FilterBtn txt='Acive'></FilterBtn>
              <FilterBtn txt='Incative'></FilterBtn>
          </div>
      </div>
      <div className='grid'>
        {
          data?.map(x => <ExtensionCard {...x}></ExtensionCard>)
        }
      </div>
    </div>
  )
}

export default ExtensionList