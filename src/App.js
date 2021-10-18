import React from 'react';
import { Deck, Heading, Text, UnorderedList, ListItem } from 'spectacle';

import theme from './theme/default-theme';
import './App.css';
import TitleSlide from './components/TitleSlide';
import SourcesSlide from './components/SourcesSlide';
import EndSlide from './components/EndSlide';
import ContentListSlide from './components/ContentListSlide';
import Template from './components/Template';
import Slide from './components/Slide';
import CenteredContentSlide from './components/CenteredContentSlide';
import periodicTableImage from './images/periodic_table.png';
import periodicTableHTMLImage from './images/periodic_table_html.png';
import atomicDesignPatternImage from './images/atomic_design_pattern.png';
import atomicDesignPatternAnimatedGif from './images/atomic_design_pattern_animated.gif';
import atomsImage from './images/atoms.png';
import atomsComponentsImage from './images/atoms_components.png';
import folderStructureImage from './images/folder_structure.png';
import moleculesImage from './images/molecules.png';
import moleculesComponentsImage from './images/molecules_components.png';
import organismsImage from './images/organisms.png';
import organismsComponentsImage from './images/organisms_components.png';
import pagesImage from './images/pages.png';
import pagesComponentsImage from './images/pages_components.png';
import templatesImage from './images/templates.png';
import templatesComponentsImage from './images/templates_components.png';

function App() {
  return (
    <Deck theme={theme} template={Template}>
      <TitleSlide>
        <Heading>Atomic Design Pattern</Heading>
        <img src="logo.png" alt="Logo" className="Logo" />
      </TitleSlide>
      <ContentListSlide
        contentList={['General', 'History', 'Categories', 'Most important design patterns', 'Design patterns in bella']}
      />
      <Slide>
        <Heading>Allgemein</Heading>
        <Text>Entwickelt von Brad Frost ca. 2013</Text>
        <Text>https://atomicdesign.bradfrost.com/</Text>
        <Text>https://vimeo.com/67476280</Text>
      </Slide>
      <Slide>
        <Heading>Herausforderungen</Heading>
        <UnorderedList>
          <ListItem>Ständig wachsende Designs und Frontends</ListItem>
          <ListItem>Missachtung der DRY-Regel</ListItem>
          <ListItem>Konsistenz und Modularität von Komponenten</ListItem>
          <ListItem>Einheitliches Vokabular für Komponenten</ListItem>
        </UnorderedList>
      </Slide>
      <CenteredContentSlide>
        <Text>Wo gibt es ähnliche Herausforderungen oder Lösungen in der Welt? 🤔</Text>
      </CenteredContentSlide>
      <CenteredContentSlide>
        <Text>In der Chemie! 🧪️</Text>
      </CenteredContentSlide>
      <Slide>
        <Heading>Periodensystem</Heading>
        <img src={periodicTableImage} alt="periodic-table" width="65%" />
      </Slide>
      <CenteredContentSlide>
        <Text>
          Sauerstoff (O) + Wasserstoff (H) = H<sub>2</sub>O
        </Text>
      </CenteredContentSlide>
      <Slide>
        <Heading>HTML 5 Periodensystem</Heading>
        <img src={periodicTableHTMLImage} alt="periodic-table-html" width="65%" />
      </Slide>
      <CenteredContentSlide title="Atomic Design Pattern">
        <img src={atomicDesignPatternImage} alt="atomic-design-pattern" width="65%" />
      </CenteredContentSlide>
      <CenteredContentSlide title="Atome">
        <img src={atomsImage} alt="atoms" />
        <Text>
          Kleinstmögliche Komponenten wie input, buttons, titles, text und können nicht weiter runtergebrochen werden
        </Text>
      </CenteredContentSlide>
      <CenteredContentSlide title="Atome">
        <img src={atomsComponentsImage} alt="Atoms components" width="48%" />
      </CenteredContentSlide>
      <CenteredContentSlide title="Moleküle">
        <img src={moleculesImage} alt="molecules" />
        <Text>
          Gruppierung von zwei oder mehr Atomen, wie z.B. Form-Textfelder die aus einem input und einem dazugehörugen
          label und einer error-message bestehen
        </Text>
      </CenteredContentSlide>
      <CenteredContentSlide title="Moleküle">
        <img src={moleculesComponentsImage} alt="Molecules components" width="48%" />
      </CenteredContentSlide>
      <CenteredContentSlide title="Organismen">
        <img src={organismsImage} alt="organisms" />
        <Text>
          Komplexe UI-Komponenten, die aus einer Gruppe von Atomen und/oder Molekülen und/oder anderen Organismen
          besteht.
        </Text>
      </CenteredContentSlide>
      <CenteredContentSlide title="Organismen">
        <img src={organismsComponentsImage} alt="Organisms components" width="48%" />
      </CenteredContentSlide>
      <CenteredContentSlide title="Templates">
        <img src={templatesImage} alt="templates" />
        <Text>Enthält meistens Gruppen von Organismen und formen eine Seite</Text>
      </CenteredContentSlide>
      <CenteredContentSlide title="Templates">
        <img src={templatesComponentsImage} alt="Templates components" width="48%" />
      </CenteredContentSlide>
      <CenteredContentSlide title="Seiten">
        <img src={pagesImage} alt="pages" />
        <Text>
          Eine oder mehrere spezifische Instanzen von Templates mit realem Inhalt, welche die Anwendung darstellen.
        </Text>
      </CenteredContentSlide>
      <CenteredContentSlide title="Seiten">
        <img src={pagesComponentsImage} alt="Pages components" width="48%" />
      </CenteredContentSlide>
      <CenteredContentSlide title="Übersicht">
        <img src={atomicDesignPatternAnimatedGif} alt="Atomic design pattern animated" width="50%" />
      </CenteredContentSlide>
      <Slide>
        <Heading>Vorteile</Heading>
        <UnorderedList>
          <ListItem>Einfache Erweiterbarkeit</ListItem>
          <ListItem>Konsistenz für Anwender</ListItem>
          <ListItem></ListItem>
          <ListItem>Isolierte Komponenten für bessere Lesbarkeit und hohe Modularität</ListItem>
          <ListItem>Schnelleres und einfacheres Prototyping</ListItem>
        </UnorderedList>
      </Slide>
      <CenteredContentSlide title="Ordnerstruktur">
        <img src={folderStructureImage} alt="Folder structure" />
      </CenteredContentSlide>
      <EndSlide />
      <SourcesSlide>
        <UnorderedList>
          <ListItem>https://atomicdesign.bradfrost.com/</ListItem>
        </UnorderedList>
      </SourcesSlide>
    </Deck>
  );
}
export default App;
