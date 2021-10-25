import React from 'react'
import Meta from '../../../components/Meta'
import Link from 'next/link';

const index = ({data}) => {

    const {id, title, body} = data; 

    return (
        <div>
            <Meta title={title} />
            <h2>Article id number: {id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <button><Link href='/'>back to home</Link></button>
        </div>
    )
}

export default index



export const getServerSideProps = async (context) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
    const data = await res.json();
    return {
        props: {data}
    }
}