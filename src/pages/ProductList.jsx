import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Products from '../components/Products';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
// Responsive
import { mobile } from '../responsive';

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
  font-weight: 300;
  letter-spacing: 2px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;

const Option = styled.option``;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split('/')[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Title>Chairs</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="size" onChange={handleFilters}>
            <Option disabled>Material</Option>
            <Option>Oak</Option>
            <Option>Walnut</Option>
            <Option>Mahogany</Option>
            <Option>Teak</Option>
          </Select>
          <Select name="color" onChange={handleFilters}>
            <Option disabled>Finish</Option>
            <Option>Matt</Option>
            <Option>Semi-Glass</Option>
            <Option>Glass</Option>
            <Option>Oil</Option>
            <Option>Wax</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
