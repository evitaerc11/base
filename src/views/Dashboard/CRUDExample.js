import { Flex } from '@chakra-ui/react'
import { useUpdate } from 'hooks/useCRUD'
import { useGetList } from 'hooks/useCRUD'
import { useDelete } from 'hooks/useCRUD'

const CRUDExample = () => {
  const { data } = useGetList()
  const mutation = useDelete()
  const mutationUpdate = useUpdate()
  console.log(data)
  return (
    <Flex direction='column' pt={{ base: '120px', md: '75px' }}>
      <h1>CRUD Example</h1>
      <button onClick={()=> mutation.mutate(1)}> Delete item id = 1</button>
      <button onClick={()=> mutationUpdate.mutate({id: 1, title: 'test'})}> Update item id = 1</button>
    </Flex>
  )
}

export default CRUDExample
