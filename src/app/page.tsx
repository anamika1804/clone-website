// pages.tsx (or wherever your main layout is)// Import Footer component
import Hero from '../Components/Hero'; // Assuming hero.tsx is your main content section

const Pages: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <main className="flex-1 overflow-auto">
        <Hero /> {/* Hero component for your homepage content */}
      </main>

      {/* Footer */}
      
    </div>
  );
};

export default Pages;
