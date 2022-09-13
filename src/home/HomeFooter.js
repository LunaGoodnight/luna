import AdSense from "react-adsense";
import React from "react";
import styled from "styled-components";

const Ins = styled.ins`
  display: block;
`;

const AdsenseWrapper = styled.div`
  display: block;
  width: 100%;
  height: 20rem;
`;

const FooterStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 30rem;
`;
export const HomeFooter = () => {
  return (
    <FooterStyle>
      <AdsenseWrapper>
        <Ins
          className="adsbygoogle"
          data-ad-client="ca-pub-2367606842074628"
          data-ad-slot="8902136652"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <AdSense.Google client="ca-pub-2367606842074628" slot="8902136652" />
      </AdsenseWrapper>
    </FooterStyle>
  );
};
