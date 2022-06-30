import { PropTypes } from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './Header';

const GlobalStyles = createGlobalStyle`

@import url("https://fonts.googleapis.com/css?family=Bitter");

body {
 
  font-family: "Bitter",-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
  line-height: 2;
}

a {
  text-decoration: none;
  color: var(--black);
}
a:hover {
  text-decoration: underline;
}

button {
  font-family: "Bitter",-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


html {
  --red: #ff0000;
  --black:#393939;
  --grey: #3a3a3a;
  --lightGrey: #e1e1e1;
  --offWhite: #ededed;
  --maxWidth: 1000px;
  --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
  box-sizing: border-box;
  font-size: 10px;
}

*, *:before, *:after {
  box-sizing: inherit;
}
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />

      <Header />
      <InnerStyles>
        <h2>this is from Page.js, styled using 'inner styles'</h2>
        {children}
      </InnerStyles>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
