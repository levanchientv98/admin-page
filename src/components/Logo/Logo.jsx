import styled from "styled-components";
import logo from "image/logo.svg";

const StyledLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
  .logo-text {
    font-weight: 700;
    font-size: 28px;
    line-height: 36px;
    color: #27262E;
  }
  .logo-desc {
    font-size: 10px;
    line-height: 13px;
    color: #7A797D;

  }
`;

export const Logo = ({ className }) => {
    return (
        <StyledLogo className={className}>
            <img src={logo} alt="logo"></img>
            <div>
                <div className="logo-text">MyNFT</div>
                <div className="logo-desc">NFT Marketplace</div>
            </div>
        </StyledLogo>
    );
};