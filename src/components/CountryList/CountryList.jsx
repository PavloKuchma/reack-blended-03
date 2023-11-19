import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';
import { routes } from 'routes';

export const CountryList = ({ countries }) => {
  const location = useLocation();
  return (
    <Grid>
      {countries.map(item => {
        return (
          <GridItem key={item.id}>
            <Link to={`${routes.COUNTRY}/${item.id}`} state={{ from: location }}>
              <img src={item.flag} alt={item.country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
