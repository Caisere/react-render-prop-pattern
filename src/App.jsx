import { faker } from '@faker-js/faker';
import Lists from './components/Lists';
import ProductLists from './components/ProductList';
import CompanyLists from './components/CompanyLists';

// products data
const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

// console.log(products);

//companies data
const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

function App() {
  return (
    <div>
      <h1>Render Prop Pattern</h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: '20px',
        }}
      >
        <Lists
          title="Products"
          items={products}
          render={(product) => (
            <ProductLists key={product.productName} product={product} />
          )}
        />

        <Lists
          title="Companies"
          items={companies}
          render={(company) => (
            <CompanyLists key={company.companyName} company={company} />
          )}
        />
      </div>
    </div>
  );
}

export default App;
