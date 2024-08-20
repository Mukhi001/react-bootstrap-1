import CustomList from "./Components/list/list"
import { CustomOrderedList } from "./Components/list/list"
import { Head1,Head2 } from "./Components/heading/heading"
import { Imagg } from "./Components/image/image"
import BasicExample from "./Components/nav/nav"
import UncontrolledExample from "./Components/corusel/corusel"
import DarkVariantExample from "./Components/corusel/corusel"
import { Foot } from "./Components/footer/footer"
 
const App=()=>
{
  return (
    <div>
      
      <BasicExample/>
      <DarkVariantExample/>
     <Foot/>
      {/* <Head1/>
      <Head2/>
        <Imagg/>
      <CustomList/>
      <CustomOrderedList/> */}
    </div>
  )
}

export default App