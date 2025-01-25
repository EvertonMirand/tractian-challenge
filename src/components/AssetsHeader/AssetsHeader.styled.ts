import styled from "styled-components";

export const AssetsHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AssetsHeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  h3 {
    color: ${(props) => props.theme.colors.neutralTitle};
  }
`;

export const AssetsHeaderSituationContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const AssetsHeaderSituationCard = styled.div`
  display: flex;
  width: Hug (98px) px;
  border: 1px solid #d8dfe6;

  height: Hug (32px) px;
  padding: 6px 16px 6px 16px;
  gap: 6px;
  border-radius: 3px;
  opacity: 0px;

  ${(props) => props.theme.style.center};

  p {
    color: ${(props) => props.theme.colors.netralGray};
    font-weight: 600;
  }
`;
