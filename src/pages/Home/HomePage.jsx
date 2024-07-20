import { Presentation } from "./components/Presentation/Presentation"
import { Functionalities } from "./components/Functionalities/Functionalities"
import { BannersHome } from "./components/BannersHome/BannersHome"
import { ParagraphButtons } from "./components/ParagraphButtons/ParagraphButtons"
import { FormMessage } from "./components/FormMessage/FormMessage"
import './HomePage.css'

export const HomePage = () => {
  return (
    <div className="homepage">
      <Presentation/>
      <Functionalities/>
      <BannersHome/>
      <ParagraphButtons/>
      <FormMessage/>
    </div>
  )
}
