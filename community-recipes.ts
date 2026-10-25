export type RecipePost = {
  id: number
  author: string
  title: string
  description: string
  ingredients: string[]
  steps?: string[]
  likes: number
  image?: string
  sourceUrl?: string
  readyInMinutes?: number
  servings?: number
  nutrition?: {
    calories: number
    protein: number
    carbs: number
    fat: number
    fiber: number
  }
}

export const communityAvatars = [
  'https://images.unsplash.com/photo-1760552069633-c05f246a5d8c?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1531750026848-8ada78f641c2?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1609371497456-3a55a205d5eb?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1633112639964-f8c9d360dc75?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1701728667207-54b43dbdab97?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1571756978657-e7db0b92f7d1?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1544168190-79c17527004f?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1639596009496-d24f966adc25?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1642736468842-c6bdcfbbcd28?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1643753945179-951661a01e2c?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1679476819592-3e233227fd83?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1688660435269-9b2220f44c75?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1690846152581-37a78f2e83e9?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
  'https://images.unsplash.com/photo-1790575188529-fef09467841a?crop=faces&fit=crop&fm=jpg&q=80&w=160&h=160',
]

export const communityRecipes: RecipePost[] = []
export const getCommunityRecipeSteps = (recipe: RecipePost) => recipe.steps ?? []
export const isUserRecipe = (recipe: RecipePost) => recipe.id > 1_000_000_000_000
