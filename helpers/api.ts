import useSWR from 'swr'

const API = ({ path }: APIProps) => {
  
  const { data, error } = useSWR(`https://backend-guiadefoz.herokuapp.com/${path}`, () => {
    
  }, {
    
  })
  
}

interface APIProps {
  path: string
}

export default API