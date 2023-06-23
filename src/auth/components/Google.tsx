import { useState } from "react"
import {supabase} from "@/utils"
import googleBoton from "../../assets/Iconos/googleBtnx2.png"

export const Google: React.FC = () => {
  const [url,setUrl]= useState<string|null>(null)

  const googleUrl = async(): Promise<string|null>=>{
    const {data}= await supabase.auth.signInWithOAuth({
      provider:'google',
      options: {
        skipBrowserRedirect:true,
      }
    })
    return data.url
  }

  void googleUrl().then((url)=>{
    setUrl(url)
  })

  return (
    <a href={url ?? "/"} className="flex items-center justify-center mb-1 mt-3 rounded-md bg-primary px-4 py-2 duration-300 hover:bg-secondaryDark">
      <img src={googleBoton} alt="Google" />
    </a>
  )
}

