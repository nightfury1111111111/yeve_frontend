import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { Container } from './Layout.styled';
import FooterMenu from './FooterMenu';

export default function Layout() {
  return (
    <Container>
      <div className="app">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2500 }}
        />
        <Header />
        <div className="app-content">
          <Outlet />
        </div>
        <Footer style={{ position: 'unset' }} />
        <FooterMenu />
      </div>
    </Container>
  );
}
