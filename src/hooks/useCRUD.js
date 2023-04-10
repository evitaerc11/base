import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { del, get, put } from 'api/requests'

const getList = get('posts')
const deletePost = (id) => del(`posts/${id}`)
const updatePost = (payload) => put(`posts/${payload.id}`, payload)

export const useGetList = () => {
  return useQuery(['posts'], () => getList)
}

export const useDelete = () => {
  const queryClient = useQueryClient()
  return useMutation((id) => deletePost(id), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
      alert('Post delete successfully')
    },
    onError: (error) => {
      alert(error.message)
    }
  })
}

export const useUpdate = () => {
  const queryClient = useQueryClient()
  return useMutation((payload) => updatePost(payload), {
    onSuccess: () => {
      queryClient.invalidateQueries('posts')
      alert('Post update successfully')
    },
    onError: (error) => {
      alert(error.message)
    }
  })
}
