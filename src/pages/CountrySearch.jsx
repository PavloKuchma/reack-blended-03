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
import { useSearchParams } from 'react-router-dom';

export const CountrySearch = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get(`value`);
    if (!search) return;
    const fetchRegions = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetchByRegion(search);
        setCountries(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRegions();
  }, [searchParams]);
  const onSubmit = value => {
    setSearchParams({ value });
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
