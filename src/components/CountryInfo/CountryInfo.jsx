import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';

import { GoBackBtn } from '../GoBackBtn/GoBackBtn';
import { useLocation } from 'react-router-dom';

export const CountryInfo = ({
  countries: { flag, capital, country, id, languages = [], population },
}) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  return (
    <>
      <GoBackBtn path={backLinkHref}>Go back</GoBackBtn>
      <CountryWrapper>
        <Flag>
          <Image src={flag} alt={country} />
        </Flag>
        <CountryDescription>
          <CountryCapital>
            Capital: <Accent>{capital}</Accent>
          </CountryCapital>

          <CountryTitle></CountryTitle>

          <CountryDetail>
            Population: <Accent>{population}</Accent>
          </CountryDetail>

          <CountryDetail>
            Languages: <Accent>{languages.join(', ')}</Accent>
          </CountryDetail>
        </CountryDescription>
      </CountryWrapper>
    </>
  );
};
