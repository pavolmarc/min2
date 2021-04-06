import axios from 'axios'
 
const HttpGet = () => {
  console.log('The link was clicked.')
 
  axios
    .get(
      'http://localhost:8080/hello-world'
    )
    .then((res) => {
      const data = res.data
      console.log('DATA is' + data)
    })
}
 export default HttpGet