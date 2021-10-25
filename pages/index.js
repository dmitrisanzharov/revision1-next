import Meta from '../components/Meta'
import SinglePage from '../components/SinglePage';

export default function Home({data}) {
  return (
    <div>
      <Meta title='home page' />
      <h1>This is home</h1>

      {data.map(value=> <SinglePage {...value} key={value.id}/>)}



    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
  const data = await res.json();
  
  return {
    props: {
      data
    }
  }
}


