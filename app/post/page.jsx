
import { PostApi } from '@/service/PostApi';
import Link from 'next/link';
import React from 'react';

const PostData = async () => {
    const data = await PostApi()

    console.log(data)
    return (
        <div>
            <h1>post data</h1>
            <div className="grid grid-cols-4 gap-10 ">
                {
                    data.slice(0,20).map(({title,body,id}) => (
                        <div className="border p-10" key={id}>
                            <h6>Title:{title}</h6>
                            <h6>body:{body}</h6>
                            <button className="bg-red-500 px-4 py-2"><Link href={`/post/${id}`}>See Detels</Link></button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PostData;