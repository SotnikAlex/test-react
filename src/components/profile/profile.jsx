import React from 'react';
import classes from './profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return  <div>
           <div>
               <img src="https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F191120053137-03-milky-way-images-australia.jpg" alt=""/>
           </div>
           <div>
               <img src="https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687" alt=""/>
           </div>
           <MyPosts/>
       </div>
}

export default Profile