import {Box,Button,Typography} from '@mui/material'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {clearCart} from '../../state/index'
const Confirmation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
      <Box>
        <Typography variant="h5" gutterBottom>
          Thank you for your order.
        </Typography>
        <Typography variant="subtitle1">
          Your order number is #2001539. We have emailed your order
          confirmation, and will send you an update when your order has shipped.
        </Typography>
        <Box display="flex" alignItems="center">
          <Button 
            sx={{
              backgroundColor: "#222222",
              color: "white",
              borderRadius: 0,
              minWidth: "150px",
              padding: "10px 40px",
              margin: "20px auto 0",
            }}
            onClick={() => {
            dispatch(clearCart());
            navigate("/");
            }}
          >
            Back to Shopping
          </Button>
        </Box>
      </Box>
    );
}

export default Confirmation