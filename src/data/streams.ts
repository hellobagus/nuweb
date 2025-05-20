import { StreamItem } from '../types';

export const streamsData: StreamItem[] = [
  {
    id: '1',
    title: 'Kajian Fiqih Wanita: Haid dan Nifas',
    description: 'Kajian mendalam tentang fiqih wanita dengan pembahasan khusus tentang haid dan nifas, yang disampaikan oleh Ustadzah Hj. Siti Aminah, Lc., MA.',
    date: '2023-09-15',
    time: '19:30 - 21:00 WIB',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/8471834/pexels-photo-8471834.jpeg',
    presenter: 'Ustadzah Hj. Siti Aminah, Lc., MA',
    isLive: false
  },
  {
    id: '2',
    title: 'Live Streaming: Pengajian Rutin Bulanan',
    description: 'Pengajian rutin bulanan Muslimat NU dengan tema "Menjadi Muslimah Tangguh di Era Digital" yang disampaikan oleh Ustadzah Hj. Luthfiyah, S.Pd.I.',
    date: '2023-10-05',
    time: '19:00 - 21:00 WIB',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/2774546/pexels-photo-2774546.jpeg',
    presenter: 'Ustadzah Hj. Luthfiyah, S.Pd.I',
    isLive: true
  },
  {
    id: '3',
    title: 'Talkshow: Peran Muslimah dalam Pendidikan Anak',
    description: 'Talkshow interaktif membahas peran strategis muslimah dalam pendidikan anak, dengan narasumber Ustadzah Nur Hidayati, M.Pd dan Dr. Hj. Fauziah, M.Psi.',
    date: '2023-09-28',
    time: '13:00 - 15:00 WIB',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/3755755/pexels-photo-3755755.jpeg',
    presenter: 'Ustadzah Nur Hidayati, M.Pd & Dr. Hj. Fauziah, M.Psi',
    isLive: false
  },
  {
    id: '4',
    title: 'Kajian Sirah Nabawiyah: Teladan dari Ummahatul Mukminin',
    description: 'Kajian mendalam tentang kisah dan teladan dari istri-istri Rasulullah SAW (Ummahatul Mukminin) yang disampaikan oleh Ustadzah Hj. Fatimah Azzahra, Lc., MA.',
    date: '2023-10-12',
    time: '19:00 - 21:00 WIB',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/6102093/pexels-photo-6102093.jpeg',
    presenter: 'Ustadzah Hj. Fatimah Azzahra, Lc., MA',
    isLive: false
  },
  {
    id: '5',
    title: 'Live Dialog: Tantangan dan Peluang Muslimah di Era Digital',
    description: 'Dialog interaktif membahas tantangan dan peluang yang dihadapi muslimah di era digital dari perspektif agama, sosial, dan ekonomi.',
    date: '2023-10-19',
    time: '19:30 - 21:30 WIB',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/5429279/pexels-photo-5429279.jpeg',
    presenter: 'Ustadzah Hj. Nur Laila, M.Kom & Dr. Hj. Siti Aminah, M.Sos',
    isLive: true
  },
  {
    id: '6',
    title: 'Kajian Kitab Riyadhus Shalihin',
    description: 'Kajian rutin Kitab Riyadhus Shalihin dengan pembahasan bab "Adab Terhadap Orang Tua dan Keluarga" oleh Ustadzah Hj. Maimunah, MA.',
    date: '2023-10-22',
    time: '13:00 - 15:00 WIB',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.pexels.com/photos/6102019/pexels-photo-6102019.jpeg',
    presenter: 'Ustadzah Hj. Maimunah, MA',
    isLive: false
  }
];

export const getLiveStreams = (): StreamItem[] => {
  return streamsData.filter(stream => stream.isLive);
};

export const getUpcomingStreams = (): StreamItem[] => {
  const today = new Date();
  return streamsData.filter(stream => new Date(stream.date) > today && !stream.isLive)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
};

export const getPastStreams = (count: number = 10): StreamItem[] => {
  const today = new Date();
  return streamsData.filter(stream => new Date(stream.date) < today && !stream.isLive)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getStreamById = (id: string): StreamItem | undefined => {
  return streamsData.find(stream => stream.id === id);
};