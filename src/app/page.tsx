
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Hobbies from '../components/Hobbies';
import Tabs from '../components/Tabs';

export default function Home() {
  const tabs = [
    {
      title: 'Bio',
      content: <Bio />,
    },
    {
      title: 'Projects',
      content: <Projects />,
    },
    {
      title: 'Hobbies',
      content: <Hobbies />,
    },
  ];

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Tabs tabs={tabs} />
      </main>
      <Footer />
    </div>
  );
}
