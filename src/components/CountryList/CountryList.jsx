import { Grid, GridItem } from 'components';
import { Link } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  console.log(countries);
  return <Grid>{countries.map((item) => {
    return <GridItem key={item.id}><Link to={`country/${item.id}`}>
      <img src={ item.flag} alt={item.country}/>
      
    </Link></GridItem>
  })}</Grid>;
};
