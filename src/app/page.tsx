'use client';

import { ChakraProvider } from '@chakra-ui/react';
import WithSubnavigation from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import Works from './components/works';
import Skills from './components/skills';
import './anime.css';

export default function Page() {

  return (
    <>
      <ChakraProvider>
        <WithSubnavigation />
        <section id="home">
          <Home />
        </section>
        <section id="works">
          <Works />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <div className="footer">
          <Footer />
        </div>
      </ChakraProvider>
    </>
  );
}
