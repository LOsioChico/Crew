import { type ShowState } from '../interface'

interface URLParamsProps {
  showState: ShowState
  search: string
}

export const URLParams = ({
  showState,
  search,
}: URLParamsProps): URLSearchParams => {
  const params = new URLSearchParams()
  if (showState.category !== 'All Projects') {
    params.append('category', showState.category)
  } else {
    params.append('category', 'all')
  }

  params.append('sort', showState.sort)
  params.append('q', search)
  params.append('s', '20')
  params.append('p', '0')

  return params
}
