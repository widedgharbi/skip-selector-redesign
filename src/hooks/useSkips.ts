// src/hooks/useSkips.ts
import { useEffect, useState } from 'react'
import axios from 'axios'

const useSkips = () => {
  const [skips, setSkips] = useState([])

  useEffect(() => {
    axios
      .get('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then((res) => {
        setSkips(res.data)
      })
  }, [])

  return skips
}

export default useSkips
