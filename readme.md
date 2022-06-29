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
Header is a component rendered in Page.js.
</p>

### Styled Components

<p>
Header.js uses `const Logo = styled.h1`
  background: red;
`;` <br>

Global Styles - created within Page.js component.<br>
Inner Styles - container max width, margin 0 auto etc

</p>

### Querying Products in GraphQL

<p>
Products.js (*remember start with a CAPITAL if a component*) in components dir uses GQL to query products in Keystone to render onto the FrontEnd. Product.js is for singular products and loops/maps each item.<br>
Uses *ItemStyles* component to style each product input.
</p>

## Backend:

<ul>
<li>Keystone.js - headless CMS to manage products using CRUD  Create Read Update Delete. Gives a graph QL API to query the DB ie 'query all items, name, price hit RUN'. Appollo makes the queries from Keystone and puts the data into Next.js App.</li>
<li>Keystone.js is written in Node</li>
<li>Keystone is linked to MongoDb</li>
<ul>

### Typescript

<p>
Keystone.ts file sets up connection to database. Runs on port 3000 to manager users.<br>
Schema - description of data type these are in User.ts, these are passed to the keystone.js file.<br>
Adding 'Auth' in keystone 'withAuth'. Takes in: User,email and password.<br>
Schema items 'User' and 'Products' created in KS. <br>
Product.js - creates fields: Name ie artist, Description text field, UI set to displayMode: "textarea". Status drop down 'availble..etc'
</p>

### Cloudinary imager server

<p>Images</p><br>
In schemas ProductImages.ts

### Seed Data

<p>Seed data - pulls products from data.ts and updates the DB. 
</p>

### Apollo

<p>

</p>
