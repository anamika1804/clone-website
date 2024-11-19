import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import './globals.css'; // your global styles here

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Fast Loans for used car dealers</title>
      </head>
      <body className='w-full'>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
