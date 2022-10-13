import './App.css';

function App() {
  return (
    <div className="App">
      <button class="btn">Button</button>
      <button class="btn btn-primary">Button</button>
      <button class="btn btn-secondary">Button</button>
      <button class="btn btn-accent">Button</button>
      <button class="btn btn-ghost">Button</button>
      <button class="btn btn-link">Button</button>
      <div class="card card-compact w-96 bg-base-100 shadow-xl">
        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
