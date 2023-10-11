import React from 'react';
import styled from 'styled-components';
import {Container, Grid} from 'bear-react-grid';

interface IProps extends FCProps {
    level: number
    count: number
}

const LvAboutWrapper = ({
    className,
    level = 1,
    count = 0,
}: IProps) => {
    return <LvAboutWrapperRoot className={className}>
        <Container>

            <Title>Level {level} benefits</Title>

            <Grid columns="repeat(4, 1fr)">
                {Array.from({length: count}).map((row, index) => {
                    return <Item key={`LvAbout_${index}`} columns={1} gap="5px" className="justify-content-center">
                        <Avatar/>
                        <p className="text-center">...</p>
                    </Item>;
                })}
            </Grid>


        </Container>
    </LvAboutWrapperRoot>;
};

export default LvAboutWrapper;



const Avatar = styled.div`
  border-radius: 50%;
  background-color: rgba(134, 114, 14, 0.79);
  width: 40px;
  height: 40px;
  position: relative;

  :after {
    content: '';
    position: absolute;
    background-color: rgba(255, 159, 14, 0.65);
    width: 25px;
    height: 25px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
  }
`;


const Title = styled.div`
    color: #fff;
    padding-top: 10px;
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 20px;
`;



const Item = styled(Grid)`
  filter: grayscale(1);
  
    :nth-child(1){
      filter: grayscale(0);
    }
`;


const LvAboutWrapperRoot = styled.div`

`;
