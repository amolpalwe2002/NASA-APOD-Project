import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"
import { useEffect, useState } from "react"


function App() {
  const [data, setData] = useState(null)

  
  useEffect(() => {
    async function fetchAPI(){
      // const NASA_Key = "a5mw7C3KZQpTqzrCkIIMI5znOGfk2dmpTIhMDfp9";
      const NASA_Key = import.meta.env.VITE_NASA_API_Key
      try{
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_Key}`)
        const data = await response.json()
        setData(data)
      }catch(error){
        console.log(error)
      }
    }

    fetchAPI()
  }, [])

  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex">

      {/* {
        console.log(data)
      } */}
      {
        data &&<Main data={data}/> 
      }
      {
        data && isOpen && <Sidebar toggleSidebar={toggleSidebar} data={data} />
      }
      {
        data && <Footer toggleSidebar={toggleSidebar} data={data} />
      }
     
    </ div>
  )
}

export default App
