import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Products from '../components/Products';

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
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 5px;
  margin-right: 20px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Title>Chairs</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Material
            </Option>
            <Option>Oak</Option>
            <Option>Walnut</Option>
            <Option>Mahogany</Option>
            <Option>Teak</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Finish
            </Option>
            <Option>Matt</Option>
            <Option>Semi-Glass</Option>
            <Option>Glass</Option>
            <Option>Oil</Option>
            <Option>Wax</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
