import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import {useSelector} from 'react-redux';


export default function Review(props) {
let address = Object.values(props.userInfo)[0];
address = Object.values(address);

let payments = Object.values(props.paymentInfo)[0];
//payments = Object.values(payments);
const arr = Array.from(Object.keys(payments), (k) => [`${k}`, payments[k]]);
const products = useSelector((state) => state.cart.cart);
const total = products.reduce((total, product) => {
  return total + product.attributes.price * product.count;
}, 0);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem
            key={`${product.attributes.name}-${product.id}`}
            sx={{ py: 1, px: 0 }}
          >
            <ListItemText
              primary={`${product.attributes.name} ( ${product.count} ) `}
              secondary={product.attributes.shortDescription}
            />
            <Typography variant="body2">
              {product.attributes.price * product.count}
            </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            ${Math.floor(total)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={8}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{address.join(",")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container>
            {arr.map((payment) => (
              <React.Fragment key={payment[0]}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment[0]}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment[1]}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
