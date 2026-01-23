import useFetch from "../hooks/useFetch"


const Fetch = () => {

const data = useFetch('https://jsonplaceholder.typicode.com/users')

  return (
    <div>
      { data.map((response) => {
    return (
        <h4 key={response.id}>
         {response.id}. {response.name}</h4>
     )
})}
    </div>
  )
}

export default Fetch