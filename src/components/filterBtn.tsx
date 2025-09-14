const FilterBtn = (props: {txt: string}) => {
  return (
    <div className='filterBtn activeFilter'>
        <p>{props.txt}</p>
    </div>
  )
}

export default FilterBtn