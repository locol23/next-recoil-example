import { useUser } from '../hooks'
import { NextPage } from 'next'

const User: NextPage = () => {
  const { user } = useUser()

  return <div>{user.name}</div>
}

export default User
