import caseLogo from '/caselogo.svg';
import './App.css';

function App() {

  // 仮のギャラリー画像（Unsplashのダミー画像を使用）
  const galleryImages = [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
    'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?auto=format&fit=crop&w=400&q=80',
  ];

  return (
    <div className="portfolio-root">
      <header className="portfolio-header">
        <img src={caseLogo} className="portfolio-logo" alt="Logo" />
        <h1>My Portfolio</h1>
        <p>写真ギャラリーへようこそ。ここに自分で撮影した写真を追加していきます。</p>
      </header>
      <main>
        <section className="gallery-section">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {galleryImages.map((src, idx) => (
              <div className="gallery-item" key={idx}>
                <img src={src} alt={`Gallery ${idx + 1}`} />
              </div>
            ))}
            {/* ここに写真を追加していけます */}
          </div>
        </section>
      </main>
      <footer className="portfolio-footer">
        &copy; {new Date().getFullYear()} My Portfolio
      </footer>
    </div>
  );
}

export default App;
