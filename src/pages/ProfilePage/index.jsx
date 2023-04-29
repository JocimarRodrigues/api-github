import React, { useContext } from 'react'
import { SearchContext } from '../../components/common/context/searchContext'

const ProfilePage = () => {
  const {userProfile} = useContext(SearchContext);
  console.log(userProfile)

  return (
    <div>
      <h1>
        {userProfile.name}
      </h1>

    </div>
  )
}

export default ProfilePage;