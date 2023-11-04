import { Link, useSearchParams } from 'react-router-dom';
import {useFetch} from '../hooks/useFetch'

const Blog = () => { 

    const [searchParams, setSearchParams] = useSearchParams()

    //useEffect(() =>{
    //    setSearchParams({filter: 'emmanuel'})
    //}, [searchParams])

    const {data, loading, error} = useFetch('https://jsonplaceholder.typicode.com/posts')

    if(loading) return <p>Loading data....</p>
    if(error) return <p>error....</p>

    const handeChangue = (e) =>{
        let filter = e.target.value
        if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
    }


    return(
        <>
            <h1>Blog</h1>
            <input type="text" onChange={handeChangue} className='form-control my-3' 
            value={searchParams.get('filter') || ""}
            />
            <ul className='list-group'>
            {
                data
                .filter((item) => {
                    let filter = searchParams.get("filter");
                    if (!filter) return true;
                    let name = item.title.toLowerCase();
                    return name.startsWith(filter.toLowerCase());
                  })
                .map(item=>(
                    <Link className='list-group-item' to={`/blog/${item.id}`} key={item.id}>{item.id} - {item.title}</Link>
                ))
            }
            </ul>
        </>
    );
 };

 export default Blog;