export async function fetchPrompts(Category,APIendpoint){
  try {
      const prompts = []
      const response = await fetch(APIendpoint)
      const data = await response.json()
      prompts.value = data.filter(prompt => prompt.category === Category)
      return prompts.value
  } 
  catch (error) {
      console.error('Error fetching data:', error)
  }
}