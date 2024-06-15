import type { IPrompt } from "~/types/IPrompt"

export async function formPrompt(name:string,title:string,description:string,category:string) {
    try {
      const reponse = await $fetch<IPrompt>("/api/RegisterPrompt",{
        method : 'POST',
        body: {name,title,description,category}
      })
      if (reponse) {
        await useRouter().push('/')
      }
      }
      catch (e) {
          console.log("error : " + e)
      }
}