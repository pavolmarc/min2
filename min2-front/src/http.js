import axios from 'axios'
import React,{useState} from 'react'

const HttpGet = () => {
  console.log('The link was clicked.')
  const [data, setData] = useState("data1")
  axios
    .get(
      'http://localhost:8080/hello-world'
    )
    .then((res) => {
      setData(res.data)
      console.log('DATA is' + data)
    })
    return(
    <div>
    {data}
    </div>
    )
}
 export default HttpGet