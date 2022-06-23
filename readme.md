# This is recreation of a record store for React practice.

## Techstack

## Front-End:

<ul>
<li>React</li>
<li>Next.js - routing, rendering, framework for production</li>
<li>Apollo Client - Graph QL to query items, charges to cards. Provides the interface. Caches the data.</li>
<li>Styled components (https://styled-components.com/) - modular scoped CSS components in React, reuasable styles for PDP, PLP, etc</li>
<ul>

### Next.JS

<p>Used for: routing, linking from page to page, lazy loading </p>

<p>Components - Page.js loads into pages as <Page> </Page> within Page.js need to render the children. These are past down by from index.js to Page.js via (props) -  {props.children}. Alsp proptypes 'any' are imported in Page.js</p>

### Pages directory

<p>
Creating _app.js within pages directory creates a global component ie header.<br>
_document.js handes the info within the HTML tags head etc. 
</p>
<p>
Header is a component rendered in Page.js
</p>

## Backend:

<ul>
<li>Keystone.js - headless CMS to manage products using CRUD  Create Read Update Delete. Gives a graph QL API to query the DB ie 'query all items, name, price hit RUN'. Appollo makes the queries from Keystone and puts the data into Next.js App.</li>
<li>Keystone.js is written in Node</li>
<li>Ketstone is linked to MongoDb</li>
<ul>
