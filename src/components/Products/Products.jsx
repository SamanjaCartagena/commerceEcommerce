import React from 'react';
import {Grid} from '@material-ui/core';

import Product from './Product/Product';

const products =[
    {
        id:1, name:'Shoes',description:'Running shoes', price:'$50',
        image:'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/oyhemtbkghuegy9gpo0i/joyride-run-flyknit-mens-running-shoe-PjmR5M.jpg'
    },
    {id:2, name:'Bag', description:'Chanel', price:'$50',
image:'https://www.chanel.com/images//t_one/t_fashion//q_auto:good,f_jpg,fl_lossy,dpr_1.2/w_1920/maxi-classic-handbag-black-grained-calfskin-gold-tone-metal-grained-calfskin-gold-tone-metal-packshot-other-a58601y01864c3906-8812352110622.jpg'}
];
const Products = () =>{
    return(
<main>
<Grid container justify="center" spacing={4}>
{products.map((product)=>(
    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product}/>

    </Grid>
))}
</Grid>
</main>

    );}
export default Products;