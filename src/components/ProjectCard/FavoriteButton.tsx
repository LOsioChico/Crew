import { useFavoriteHandler } from '@/utils'

interface FavoriteButtonProps {
  projectId: string
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  projectId,
}) => {
  const { isFavorite, addFavoriteProject, removeFavoriteProject } =
    useFavoriteHandler({ projectId })
  return (
    <button
      onClick={() => {
        if (isFavorite) {
          void removeFavoriteProject(projectId)
        } else {
          void addFavoriteProject(projectId)
        }
      }}
    >
      <span
        className={`material-symbols-outlined duration-500 hover:scale-125 active:scale-95 ${
          isFavorite ? 'text-pink-300' : 'text-secondary hover:text-pink-300'
        }`}
      >
        favorite
      </span>
    </button>
  )
}
