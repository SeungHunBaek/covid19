import * as React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
    /* 레이아웃 */
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100%;
    top: 0px;
    z-index: 5;
        
    /* 색상 */
    background: rgba(126 126 126);
    color: white;
    border-bottom: 1px solid rgba(26 26 22);
    box-shadow: 0 3px 6px rgba(0,0,0,0.10), 0 3px 6px rgba(0,0,0,0.20);

    /* 폰트 */
    font-size: 2.5rem;
`;

const Header = () => (
    <Wrapper>
        Covid19 Map
    </Wrapper>
);

export default Header;