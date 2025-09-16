import { createContext, useEffect, useState } from 'react'
import ExtensionCard, { type ExtensionDataModel } from './extensionCard'
import FilterBtn from './filterBtn'

export type fileringContextModel =
{
  data: ExtensionDataModel[],
  filterState: boolean | null,
  changeState: (x: boolean | null) => void,
  modifySelected: (x: string, val: boolean) => void,
}

export const filteringContext = createContext<fileringContextModel>({data:[], filterState: null, changeState: () => {}, modifySelected: () => {}})

const ExtensionList = () => {
  const [data, setdata] = useState<ExtensionDataModel[]>([])
  const [filter, setFilter] = useState<boolean | null>(null)

  const filteredData = data?.filter(x => {
    if (filter === null) return true;
    return x.isActive === filter;
  })

  useEffect(() => {
    fetch("/data/data.json")
    .then(res => res.json())
    .then(d => setdata(d));
  }, [])

  function changeState(x: boolean | null)
  {
    setFilter(x);
  }

  function modifySelected(name: string, val: boolean)
  {
    setdata(prev => prev.map(x => x.name === name ? {...x, isActive: val} : x))
  }
  
  return (
    <div>
      <filteringContext.Provider value={{data:data, filterState:filter, changeState: changeState, modifySelected: modifySelected}}>
        <div className='row space-between alignCenter breakMobile'>
            <h2>Extensions List</h2>
            <div className='row filters'>
                <FilterBtn value={null} txt='All' selected></FilterBtn>
                <FilterBtn value={true} txt='Active'></FilterBtn>
                <FilterBtn value={false} txt='Inactive'></FilterBtn>
            </div>
        </div>
        <div className='grid'>
          {
            filteredData?.map(x => <ExtensionCard {...x}></ExtensionCard>)
          }
        </div>
      </filteringContext.Provider>
    </div>
  )
}

export default ExtensionList