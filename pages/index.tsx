import { styled } from "twin.macro";

export default function Home() {
  return (
    <Wrapper className="border-8 border-red-600">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100px;
  width: 100px;
`;
