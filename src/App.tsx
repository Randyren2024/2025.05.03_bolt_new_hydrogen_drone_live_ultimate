import React from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  // Simple client-side routing for demonstration
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);
  
  React.useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handleNavigation);
    
    // Clean up
    return () => {
      window.removeEventListener('popstate', handleNavigation);
    };
  }, []);
  
  // Very basic router
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <Home />;
      case '/products':
        return <Products />;
      case '/products/detail':
        return <ProductDetail />;
      case '/about':
        return <About />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };
  
  return (
    <>
      {renderPage()}
    </>
  );
}

export default App;