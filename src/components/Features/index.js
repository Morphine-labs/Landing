import {
  Head,
  Text,
  SubTitle,
  Title,
  Content,
  Wrapper,
  BoxWrapper,
  LBox,
  RBoxWrapper,
  RBox1,
  RBox2,
} from "./FeaturesElements";
import data from "./data.json";

const Features = () => {
  return (
    <Wrapper id="features">
      <Content>
        <Head>
          <Text>
            <Title>{data.title}</Title>
            <SubTitle>{data.subtitle}</SubTitle>
          </Text>
        </Head>
        <BoxWrapper>
          <LBox>
            <h2>{data.sections[0].title}</h2>
            <span>{data.sections[0].text}</span>
          </LBox>
          <RBoxWrapper>
            <RBox1>
              <h2>{data.sections[1].title}</h2>
              <span>{data.sections[1].text}</span>
            </RBox1>
            <RBox2>
              <h2>{data.sections[2].title}</h2>
              <span>{data.sections[2].text}</span>
            </RBox2>
          </RBoxWrapper>
        </BoxWrapper>
      </Content>
    </Wrapper>
  );
};

export default Features;
