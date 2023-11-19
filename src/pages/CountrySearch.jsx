import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { fetchByRegion } from 'service/country-service';
import { useEffect, useState } from 'react';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    if (!search) return;
    const fetchRegions = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetchByRegion(search);
        console.log(response);
        setCountries(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRegions();
  }, [search]);
  const onSubmit = value => {
    setSearch(value);
  };

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {isError && <Heading>Something went wrong...</Heading>}
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
