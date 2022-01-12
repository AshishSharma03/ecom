import dynamic from 'next/dynamic'
import { Head } from 'next/document';
import Layout from '../Components/Layout'
import { margin } from '@mui/system';
import { Button, Card, CardActionArea,CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import data from '../src/data';

 function Home() {
  
  return (
   <Layout>
     <div>
      <h1>Product</h1>
      <Grid container spacing={3}>
        {data.products.map((products)=>(
        <Grid item md={4} key={products.name}>
          <Card>
            <CardActionArea>
              <CardMedia
              component="img"
              image={products.image}
              title={products.name}
              ></CardMedia>
              <CardContent>
                <Typography>{products.name}</Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Typography>{products.price}$</Typography>
              <Button size='small' variant='outlined'>Add to cart</Button>
            </CardActions>
          </Card>
        </Grid>))}
      </Grid>
     </div>
   </Layout>
  )
}

// export default dynamic(()=> Promise.resolve(Home),{
//   ssr: false,
// });

export default Home;