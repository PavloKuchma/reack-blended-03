import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchCoutries = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await getCountries();
        setCountries(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCoutries();
  }, []);

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {isError && <Heading>Something went wrong...</Heading>}

        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
