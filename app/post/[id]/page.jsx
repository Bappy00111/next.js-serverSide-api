import { PostApi } from '@/service/PostApi';
import React from 'react';


const getDetelsPost = async (id) => {
    const getData = await PostApi();
    const reaming = getData.find(data => Number(data.id) === Number(id));
    console.log('reaming', reaming)
    return reaming

}

const ProductDetels = async ({ params }) => {
    console.log(params.id)
    const { title, body, id } = await getDetelsPost(params.id)
    return (
        <div className="border p-10" key={id}>
            <h1>{id}</h1>
            <h6>Title:{title}</h6>
            <h6>body:{body}</h6>
            
        </div>
    );
};

export default ProductDetels;