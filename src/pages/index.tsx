import { useUser } from '../hooks'
import { NextPage } from 'next'
import Link from 'next/link'
import { useCallback } from 'react'

const Home: NextPage = () => {
  const { user, setUser } = useUser()
  const onClick = useCallback(() => setUser(() => ({ name: 'Bob' })), [setUser])

  return (
    <>
      <div>{user.name}</div>
      <div>
        <button type="button" onClick={onClick}>
          set name button
        </button>
      </div>
      <Link href="/user">go to user page</Link>
    </>
  )
}

export default Home
