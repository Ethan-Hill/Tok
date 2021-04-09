import React, { useEffect } from 'react'
import { useStoreState } from '../../../../../../hook'

export default function Name(): JSX.Element {
  const User = useStoreState((state) => state.auth.user)

  useEffect(() => {
    null
  }, [User])
  return (
    <h1 className="p-2 text-3xl font-semibold text-white">{User.username}</h1>
  )
}
