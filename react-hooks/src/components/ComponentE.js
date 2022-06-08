import React, { useContext} from 'react'
// import ComponentF from './ComponentF' 
import { UserContext, ChannelContext } from '../App';

function ComponentE() {

    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <>
    {user} - {channel}
    {/* <ComponentF /> */}

    </>
  )
}

export default ComponentE