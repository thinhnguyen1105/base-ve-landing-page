import { useEffect } from 'react';

import AOS from 'aos';

import { Base } from '../components/Base';

import 'aos/dist/aos.css';

const Index = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });
  return <Base />;
};

export default Index;
