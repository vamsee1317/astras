import PromoBanner from './components/PromoBanner';

const App = () => {

  const user = 'Vamsi Krishna';

  const featuredProduct = {
    name: 'Noise Wireless Headphones',
    price: 1999,
    inStock: false,
  };

  return (
    <>
      <PromoBanner />
      <main className="p-6">

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to Astras, {user}!
        </h1>


        <section className="bg-cyan-100 shadow p-4 rounded-lg max-w-md">
          <h2 className="text-xl font-semibold mb-2">✨ Featured Product</h2>
          <p><strong>Name:</strong> {featuredProduct.name}</p>
          <p><strong>Price:</strong> ₹{featuredProduct.price}</p>

          <p>
            <strong>Status:</strong>{' '}
            <span className={featuredProduct.inStock ? "text-green-600" : "text-red-500"}
            >{featuredProduct.inStock ? "Available" : "Out of Stock"}</span>
          </p>

        </section>
      </main>
    </>
  );
};

export default App;