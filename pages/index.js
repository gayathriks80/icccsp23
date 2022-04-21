import Head from 'next/head';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';
import HomeSection from '../components/Home';
import Conference from '../components/Conference';
import AboutUs from '../components/AboutUs';
import Committee from '../components/Committee';
import CallForPaper from '../components/CallForPaper';
import Submission from '../components/Submission';
import Speakers from '../components/Speakers';
import Authors from '../components/Authors';
import Registrations from '../components/Registrations';
import Archive from '../components/Archive';
import ImportantDates from '../components/ImportantDates';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>ICCCSP &apos;23</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <HomeSection />
      <Conference />
      <ImportantDates />
      <CallForPaper />
      <Submission />
      <Committee />
      <Archive />
      <AboutUs />
      <Contact />
      <Speakers />
      <Authors />
      <Registrations />
      <Footer />
    </>
  );
}
