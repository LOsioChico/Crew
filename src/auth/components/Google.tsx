import { useState } from "react"
import {supabase} from "@/utils"
// import { CrewApi } from '@/api'
import googleBoton from "../../assets/Iconos/googleBtnx2.png"
// import { type UserResponse } from "@supabase/supabase-js"

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

  //  const user = async () :Promise<UserResponse>=> await supabase.auth.getUser()
  //  console.log(()=>user)

  // await CrewApi.post('userRoute/register', {
  //   id: (await supabase.auth.getUser()).data.user?.id,
  //   email: data.email,
  //   name: data.firstName,
  //   lastName: data.lastName,
  // })

  return (
    <div className="flex items-center justify-center mb-1 mt-3 rounded-md bg-primary px-4 py-2 duration-300 hover:bg-secondaryDark">
      <a href={url ?? '#'} className="">
      <img src={googleBoton} alt="Google" />
      </a>
    </div>
  )
}

