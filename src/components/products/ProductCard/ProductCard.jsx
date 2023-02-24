import React from 'react';
import './productCard.css';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../../contexts/ProductContextProvider';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const styleTitle = {
  fontSize: '20px',
  color: '#000',
  margin: '0 0 0.5em 0',
  lineHeight: '1.1'
}

const stylePrice = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  top: '-30px',
  left: '-30px',
  width: '100px',
  height: '100px',
  backgroundColor: 'rgba(0, 0, 0, 0.95)',
  color: '#fff',
  borderRadius: '50%',
  fontSize: '0.8em',
  textTransform: 'uppercase',
  letterSpacing: '1.4px',
  fontWeight: '700',
  color: 'white',
  textIndent: '10px'
}

const styleCateg = {
  display: 'block',
  color: '#cf092c',
  marginBottom: '3px',
  fontSize: '0.8em',
  textTransform: 'uppercase',
  letterSpacing: '1.4px',
  fontWeight: '700',
}

const styleProduct = {
  position: 'relative',
  width: '400px',
  // padding: '40px',
  borderRadius: '8px',
  backgroundColor: '#fff',
  // boxShadow: '0 30px 25px -20px rgba(0, 0, 0, 0.15)'
}

const styleBtn = {
  backgroundColor: 'rgba(207, 9, 44, 0.95)',
  // boxShadow: '0 30px 25px -20px rgba(0, 0, 0, 0.15)',
  // display: 'inline-block',
  // textAlign: 'center',
  whiteSpace: 'nowrap',
  borderRadius: '5px',
  textDecoration: 'none',
  color: 'inherit',
  fontSize: '0.8em',
  textTransform: 'uppercase',
  letterSpacing: '1.4px',
  fontWeight: '700',
  color: 'white'
}

const ProductCard = ({ item }) => {

  const navigate = useNavigate();
  const { deleteProduct } = useProducts();

  return (
    <div>
    <Card sx={{ maxWidth: 345, marginBottom: '10px', height: '400px'}} className="product" style={styleProduct}>
      {/* <img
        src={item.picture}
        className = 'product__image'
      /> */}
      <CardMedia
        image={item.picture}
        title="product"
        className='product__image'
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={styleTitle}>
          {item.name}
        </Typography>
        <hr />
        <Typography variant="body2" color="text.secondary" style={styleCateg}>
          {item.type}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={stylePrice}>
          {item.price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={styleBtn} onClick={() => navigate(`/edit/${item.id}`)}>Edit</Button>
        <Button size="small" style={styleBtn} onClick={() => deleteProduct(item.id)}>Delete</Button>
        <Button size="small" style={styleBtn} onClick={() => navigate(`/details/${item.id}`)} >Details</Button>
      </CardActions>
    </Card>
    </div>
  );
};

export default ProductCard