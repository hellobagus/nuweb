import { ReportItem } from '../types';

export const reportsData: ReportItem[] = [
  {
    id: '1',
    title: 'Laporan Kegiatan NU Muslimah',
    description: 'Laporan kegiatan NU Muslimah selama bulan Januari 2023 yang mencakup kegiatan dakwah, sosial, dan pendidikan.',
    date: '2023-01-31',
    fileUrl: '#',
    fileSize: '2.4 MB',
    category: 'Kegiatan'
  },
  {
    id: '2',
    title: 'Laporan Keuangan UMKM Binaan',
    description: 'Laporan keuangan UMKM binaan NU Muslimah selama bulan Februari 2023, termasuk pertumbuhan omset dan tantangan yang dihadapi.',
    date: '2023-02-28',
    fileUrl: '#',
    fileSize: '1.8 MB',
    category: 'Ekonomi'
  },
  {
    id: '3',
    title: 'Laporan Perkembangan Koperasi',
    description: 'Perkembangan dan capaian koperasi-koperasi di bawah naungan NU Muslimah selama bulan Maret 2023.',
    date: '2023-03-31',
    fileUrl: '#',
    fileSize: '3.2 MB',
    category: 'Ekonomi'
  },
  {
    id: '4',
    title: 'Laporan Program Kesehatan',
    description: 'Laporan pelaksanaan program kesehatan NU Muslimah, termasuk pengobatan gratis dan penyuluhan kesehatan selama bulan April 2023.',
    date: '2023-04-30',
    fileUrl: '#',
    fileSize: '4.1 MB',
    category: 'Kesehatan'
  },
  {
    id: '5',
    title: 'Laporan Bakti Sosial Ramadhan',
    description: 'Laporan kegiatan bakti sosial Ramadhan 1444 H yang dilaksanakan oleh NU Muslimah di berbagai daerah.',
    date: '2023-05-31',
    fileUrl: '#',
    fileSize: '5.3 MB',
    category: 'Sosial'
  },
  {
    id: '6',
    title: 'Laporan Pendidikan dan Pelatihan',
    description: 'Laporan program pendidikan dan pelatihan NU Muslimah selama bulan Juni 2023, termasuk pelatihan keterampilan dan pengajian rutin.',
    date: '2023-06-30',
    fileUrl: '#',
    fileSize: '2.7 MB',
    category: 'Pendidikan'
  },
  {
    id: '7',
    title: 'Laporan Keuangan Organisasi',
    description: 'Laporan keuangan lengkap NU Muslimah selama bulan Juli 2023, termasuk pemasukan, pengeluaran, dan aset organisasi.',
    date: '2023-07-31',
    fileUrl: '#',
    fileSize: '1.9 MB',
    category: 'Keuangan'
  },
  {
    id: '8',
    title: 'Laporan Kegiatan Agustus',
    description: 'Laporan kegiatan NU Muslimah selama bulan Agustus 2023, termasuk kegiatan dalam rangka peringatan HUT RI.',
    date: '2023-08-31',
    fileUrl: '#',
    fileSize: '3.0 MB',
    category: 'Kegiatan'
  },
  {
    id: '9',
    title: 'Laporan Pengembangan SDM',
    description: 'Laporan program pengembangan sumber daya manusia NU Muslimah selama bulan September 2023.',
    date: '2023-09-30',
    fileUrl: '#',
    fileSize: '2.5 MB',
    category: 'SDM'
  },
  {
    id: '10',
    title: 'Laporan Dakwah dan Kajian',
    description: 'Laporan kegiatan dakwah dan kajian rutin NU Muslimah selama bulan Oktober 2023 di berbagai daerah.',
    date: '2023-10-31',
    fileUrl: '#',
    fileSize: '2.2 MB',
    category: 'Dakwah'
  },
  {
    id: '11',
    title: 'Laporan Bantuan Bencana',
    description: 'Laporan penyaluran bantuan bencana oleh NU Muslimah selama bulan November 2023 untuk korban banjir di beberapa wilayah.',
    date: '2023-11-30',
    fileUrl: '#',
    fileSize: '4.5 MB',
    category: 'Sosial'
  },
  {
    id: '12',
    title: 'Laporan Tahunan NU Muslimah',
    description: 'Laporan tahunan NU Muslimah yang mencakup seluruh kegiatan, capaian, dan keuangan organisasi selama tahun 2023.',
    date: '2023-12-31',
    fileUrl: '#',
    fileSize: '8.7 MB',
    category: 'Tahunan'
  }
];

export const getReportsByCategory = (category: string): ReportItem[] => {
  return reportsData.filter(report => report.category === category);
};

export const getRecentReports = (count: number = 5): ReportItem[] => {
  return [...reportsData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getReportById = (id: string): ReportItem | undefined => {
  return reportsData.find(report => report.id === id);
};