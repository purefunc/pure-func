import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Cookies from 'js-cookie'

function useRefCookie() {
  const location = useLocation()
  const affiliateCode = location.search
  useEffect(() => {
    const search = new URLSearchParams(affiliateCode)
    const affiliateId = search.get('ref')
    if (affiliateId) {
      Cookies.set('affiliateId', affiliateId, { expires: 30 })
    }
  }, [affiliateCode])
}

export default useRefCookie
