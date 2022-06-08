import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
`;

const InfoContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-weight: 200;
  font-size: 45px;
`;

const Desc = styled.p`
  margin: 30px 0px;
  font-weight: 300;
  font-size: 18px;
  letter-spacing: 1px;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 30px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin-top: 20px;
  margin-bottom: 80px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 10px;
  cursor: pointer;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
`;

const Amount = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 20px;
`;

const ButtonContainer = styled.div`
  width: 160px;
  height: 50px;
  border: 1px solid black;
  background-color: white;
  position: relative;
`;

const Button = styled.button`
  width: 160px;
  height: 50px;
  padding: 15px;
  border: 1px solid white;
  background-color: black;
  color: white;
  cursor: pointer;
  font-weight: 500;
  backface-visibility: hidden;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(10px);
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://cdn.pixabay.com/photo/2015/11/06/13/28/table-1027888_960_720.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Solid Oak Table</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde qui a
            molestias blanditiis sunt corrupti nobis ab. Culpa dolor, quos sint
            dolore nihil, laborum aperiam veniam id quaerat enim illo. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Id omnis,
            consequuntur cumque, dolorum saepe non culpa molestiae illum
            repellendus amet voluptate dolor quaerat voluptates modi provident,
            accusantium odit fuga hic?
          </Desc>
          <Price>$1449.99</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="white" />
              <FilterColor color="#F8EFBA" />
              <FilterColor color="rgba(0,0,0,0.1)" />
            </Filter>
            <Filter>
              <FilterTitle>Finish</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Color</FilterSizeOption>
                <FilterSizeOption>Matt</FilterSizeOption>
                <FilterSizeOption>Semi-Glass</FilterSizeOption>
                <FilterSizeOption>Glass</FilterSizeOption>
                <FilterSizeOption>Oil</FilterSizeOption>
                <FilterSizeOption>Wax</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove style={{ cursor: 'pointer' }} />
              <Amount>1</Amount>
              <Add style={{ cursor: 'pointer' }} />
            </AmountContainer>
            <ButtonContainer>
              <Button>ADD TO CART</Button>
            </ButtonContainer>
          </AddContainer>
        </InfoContainer>
      </Wrapper>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
