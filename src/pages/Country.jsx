import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchRegions = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const response = await fetchCountry(id);
        console.log(response);
        setCountries(response);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRegions();
  }, [id]);

  // const onSubmit = id => {
  //   setId(id);
  // };

  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {isError && <Heading>Go back!</Heading>}
        <CountryInfo countries={countries} />
      </Container>
    </Section>
  );
};
