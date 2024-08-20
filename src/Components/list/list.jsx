const CustomList=()=>{
    return (
        <ul>
          <ListItems/>
        </ul>
    )
}

export default CustomList

export const CustomOrderedList=()=>
{
    return (
        <ol>
            <ListItems/>
        </ol>
    )
}

export const ListItems=()=>
{
    return (
        <div>
  <li>apple</li>
            <li>banana</li>
            <li>guava</li>
            <li>pomogranate</li>
            <li>papaya</li>
            <li>kiwi</li>
        </div>
    )
}