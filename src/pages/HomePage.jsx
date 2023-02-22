import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const violetStyle = {
  text: {
    background: 'linear-gradient(to right, #30CFD0 0%, #330867 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  button: {
    background: 'linear-gradient(to right, #30CFD0 0%, #330867 100%)',
    width: '25%',
    color: 'white',
    marginRight: '3px'
  }
}

const HomePage = () => {
  return (
    <>
      <Box sx={{width: '90%', m: 'auto', display: 'flex', mt: '3%'}}>
        <Box>
          <Typography variant="h1" component="h2" style={violetStyle.text} sx={{fontSize: '80px', fontWeight: 'bold'}}>
            Powered
          </Typography>
          <Typography variant="h1" component="h2" sx={{fontSize: '80px', fontWeight: 'semi-bold'}}>
            By Intellect <br/>
            Driven By Values
          </Typography>
          <Box>
            <Button style={violetStyle.button} sx={{mb: '10px'}}>Buy now</Button>
            <Button sx={{mb: '10px'}}>Learn more</Button>
          </Box>
        </Box>
        <img src="https://promo.s1.citilink.ru/iphone-13/img/hero_large.png" alt="" style={{width: '50%'}} />
      </Box>
      <Box sx={{width: '100%', background: '#212121', height: '300px', display: 'flex', alignItems: 'center'}}>
      <Box sx={{mx: 'auto', width: '90%', display: 'flex', justifyContent: 'space-between'}}>
        <Card sx={{ maxWidth: 345 }}>
          <LocalShippingIcon style={{marginLeft: '15px', marginTop: '2px'}}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Delivery
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error placeat quos commodi corporis laborum corrupti tempore. Ad sint odit natus nesciunt nisi quia, maxime.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CreditScoreIcon style={{marginLeft: '15px', marginTop: '2px'}}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Payment
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error placeat quos commodi corporis laborum corrupti tempore. Ad sint odit natus nesciunt nisi quia, maxime.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <WorkspacePremiumIcon style={{marginLeft: '15px', marginTop: '2px'}}/>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Guarantee
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error placeat quos commodi corporis laborum corrupti tempore. Ad sint odit natus nesciunt nisi quia, maxime.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      </Box>
    </>
  )
}

export default HomePage