import React from 'react';
import { Deck, Heading, Text, UnorderedList, ListItem, Appear, FlexBox, CodePane } from 'spectacle';

import theme from './theme/default-theme';
import './App.css';
import TitleSlide from './components/TitleSlide';
import SourcesSlide from './components/SourcesSlide';
import EndSlide from './components/EndSlide';
import ContentListSlide from './components/ContentListSlide';
import Template from './components/Template';
import Slide from './components/Slide';
import CenteredContentSlide from './components/CenteredContentSlide';
import logoImage from './images/logo.png';
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
import radioImage from './images/radio.png';
import checkboxImage from './images/checkbox.png';
import selectImage from './images/select.png';
import backButtonImage from './images/backbutton.png';
import chemicalFormulaImage from './images/chemical_formula.png';

function App() {
  return (
    <Deck theme={theme} template={Template}>
      <TitleSlide>
        <Heading>Atomic Design Pattern</Heading>
        <img src={logoImage} alt="Logo" className="Logo" width="auto" />
      </TitleSlide>
      <ContentListSlide contentList={['Allgemein', 'Beispiele', 'Pattern', 'Vorteile', 'Wo hilft es uns?']} />
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
          <ListItem>Wartung/Erweiterung der Komponenten</ListItem>
        </UnorderedList>
      </Slide>
      <Slide>
        <Heading>Beispiele aus dem Alltag</Heading>
        <UnorderedList>
          <Appear>
            <ListItem>81 Basiskomponenten</ListItem>
          </Appear>
          <Appear>
            <ListItem>17 Seitenkomponenten</ListItem>
          </Appear>
          <Appear>
            <ListItem>38 seitenspezifische Komponenten</ListItem>
          </Appear>
        </UnorderedList>
        <Appear>
          <Text>=> 136 Komponenten</Text>
        </Appear>
        <Appear>
          <Text>=> 408 Dateien</Text>
        </Appear>
      </Slide>
      <CenteredContentSlide title="Beispiele zum Naming">
        <FlexBox>
          <img src={radioImage} alt="radio" />
          <img src={checkboxImage} alt="checkbox" />
        </FlexBox>
        <Text>Wie heißt die Komponente links und rechts?</Text>
        <Appear>
          <Text>Radio / Checkbox</Text>
        </Appear>
      </CenteredContentSlide>
      <CenteredContentSlide title="Beispiele zum Naming">
        <img src={selectImage} alt="select" width="60%" />
        <Text>Wie heißt diese Komponente?</Text>
        <Appear>
          <Text>Select</Text>
        </Appear>
      </CenteredContentSlide>
      <CenteredContentSlide title="Beispiele zum Naming">
        <img src={backButtonImage} alt="backbutton" />
        <Text>Wie heißt diese Komponente?</Text>
        <Appear>
          <Text>BackButton</Text>
        </Appear>
      </CenteredContentSlide>
      <CenteredContentSlide title="Beispiele zu DRY">
        <CodePane language="css">
          {`
.Title::after {
  content: '';
  width: 100%;
  height: 1px;
  position: absolute;
  left: 0;
  bottom: -2px;
  background-color: var(--color-very-light-pink); // #bfbfbf
}
            `}
        </CodePane>
        <Appear>
          <Text>2. graue Linie unter Titeln => 18x im Code</Text>
        </Appear>
      </CenteredContentSlide>
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
      <CenteredContentSlide title="Chemische Formeln">
        <Text>
          Sauerstoff (O) + Wasserstoff (H) = H<sub>2</sub>O
        </Text>
      </CenteredContentSlide>
      <CenteredContentSlide title="Chemische Formeln">
        <img src={chemicalFormulaImage} alt="chemical-formula" />
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
          <ListItem>Effizientere Zusammenarbeit von Design und Entwicklung</ListItem>
          <ListItem>Isolierte Komponenten für bessere Lesbarkeit und hohe Modularität</ListItem>
          <ListItem>Schnelleres und einfacheres Prototyping</ListItem>
        </UnorderedList>
      </Slide>
      <CenteredContentSlide>
        <Text>Wie und wo hilft uns das Atomic Design Pattern❓</Text>
      </CenteredContentSlide>
      <CenteredContentSlide title="Ordnerstruktur">
        <img src={folderStructureImage} alt="Folder structure" />
      </CenteredContentSlide>
      <EndSlide />
      <Slide>
        <Heading>Präsentation</Heading>
        <UnorderedList>
          <ListItem>GitHub: https://github.com/ThaliaBuecherGmbH/atomic-design-pattern-presentation</ListItem>
          <ListItem>Live-Version: https://thaliabuechergmbh.github.io/atomic-design-pattern-presentation</ListItem>
        </UnorderedList>
      </Slide>
      <SourcesSlide>
        <UnorderedList>
          <ListItem>https://atomicdesign.bradfrost.com/</ListItem>
          <ListItem>
            https://medium.com/@janelle.wg/atomic-design-pattern-how-to-structure-your-react-application-2bb4d9ca5f97/
          </ListItem>
          <ListItem>https://andela.com/insights/structuring-your-react-application-atomic-design-principles/</ListItem>
          <ListItem>https://t3n.de/news/atomic-design-baukastensystem-721010/</ListItem>
          <ListItem>https://www.frontend-gmbh.de/blog/atomic-design-mit-pattern-lab/</ListItem>
          <ListItem>https://patternlab.io/</ListItem>
        </UnorderedList>
      </SourcesSlide>
    </Deck>
  );
}
export default App;
