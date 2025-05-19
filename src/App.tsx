import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import UMKMPage from './pages/UMKMPage';
import KoperasiPage from './pages/KoperasiPage';
import ReportsPage from './pages/ReportsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ConsultationPage from './pages/ConsultationPage';
import LiveStreamingPage from './pages/LiveStreamingPage';
import NewsDetailPage from './pages/NewsDetailPage';
import UMKMDetailPage from './pages/UMKMDetailPage';
import KoperasiDetailPage from './pages/KoperasiDetailPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="berita" element={<NewsPage />} />
        <Route path="berita/:id" element={<NewsDetailPage />} />
        <Route path="umkm" element={<UMKMPage />} />
        <Route path="umkm/:id" element={<UMKMDetailPage />} />
        <Route path="koperasi" element={<KoperasiPage />} />
        <Route path="koperasi/:id" element={<KoperasiDetailPage />} />
        <Route path="laporan-bulanan" element={<ReportsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="konsultasi" element={<ConsultationPage />} />
        <Route path="live-streaming" element={<LiveStreamingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;