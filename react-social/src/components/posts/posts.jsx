import React from 'react'
import Post from '../post/post'
import "./posts.scss"

const posts = () => {

    const posts = [
        {
            id: 1,
            name: "Shushma Swaraj",
            userId: 101,
            profilePic: "https://images.pexels.com/photos/2245222/pexels-photo-2245222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, eius autem doloribus rem fugiat eum recusandae cumque iure veniam dolorem atque porro enim corporis sequi accusantium impedit reprehenderit quod. Tempora ad sint eaque consequatur.",
            img: "https://images.pexels.com/photos/2245222/pexels-photo-2245222.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        },
        {
            id: 2,
            name: "Anshuman Bhaodria",
            userId: 102,
            profilePic: "https://images.pexels.com/users/avatars/11929/josh-sorenson-170.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, eius autem doloribus rem fugiat eum recusandae cumque iure veniam dolorem atque porro enim corporis sequi accusantium impedit reprehenderit quod. Tempora ad sint eaque consequatur.",
            img: "https://images.pexels.com/photos/154147/pexels-photo-154147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            id: 3,
            name: "Lala Noor",
            userId: 103,
            profilePic: "https://images.pexels.com/users/avatars/196863/ylanite-koppens-723.jpeg?auto=compress&fit=crop&h=130&w=130&dpr=1",
            desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, eius autem doloribus rem fugiat eum recusandae cumque iure veniam dolorem atque porro enim corporis sequi accusantium impedit reprehenderit quod. Tempora ad sint eaque consequatur.",
            img: "https://images.pexels.com/photos/10484102/pexels-photo-10484102.jpeg?auto=compress&cs=tinysrgb&w=600"
        },
    ];

  return (
    <div className='posts'>
        {posts.map(post=>(
            <Post post={post} key={post.id} />
        ))}
    </div>
  )
}

export default posts