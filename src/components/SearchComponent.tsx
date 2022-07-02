import { useState } from 'react';
import './SearchComponent.scss'

function SearchComponent() {
    const [searchTerm, setSearchTerm] = useState<string>()
    const [results, setResults] = useState<Product[]>()
    const [loading, setLoading] = useState(false)

    type Product = {
        id: number;
        brand: string;
        name: string;
        "ingredient-list": string[];
    }

    const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow'
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        setLoading(true)
        await fetch(`https://thawing-scrubland-03171.herokuapp.com/https://skincare-api.herokuapp.com/product?q=${searchTerm}&limit=25&page=1`, requestOptions)
            .then(response => response.json())
            .then(result => setResults(result))
            .catch(error => console.log('error', error));

        setLoading(false)
    }
    return (
        <div className='main'>
            <div className='container'>
                <form className="search" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter search term" className='search-input' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    <input type="submit" value="Search" className='search-button' />
                </form>
                <ul>
                    {loading ? <p>Loading...</p> :
                        results && results.map(result => {
                            return <li key={result.id}>
                                <p><span className='brand'>{result.brand}</span> - {result.name}</p>
                            </li>
                        })}
                </ul>
            </div>

        </div>
    )
}

export default SearchComponent;