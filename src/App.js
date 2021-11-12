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
import folderStructureOldImage from './images/folder_structure_old.png';
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
import componentImage from './images/component.png';
import componentPartsImage from './images/component_parts.png';
import componentParts2Image from './images/component_parts2.png';
import componentStructuring from './images/component_structuring.png';
import reusableImage from './images/reusable.png';
import modal1Image from './images/modal1.png';
import modal2Image from './images/modal2.png';
import modal3Image from './images/modal3.png';
import legoImage from './images/lego.png';

function App() {
  return (
    <Deck theme={theme} template={Template}>
      <TitleSlide>
        <Heading>Atomic Design Pattern</Heading>
        <img src={logoImage} alt="Logo" className="Logo" width="auto" />
      </TitleSlide>
      <ContentListSlide
        contentList={['Allgemein', 'Beispiele', 'Pattern', 'Wo hilft es uns?', 'Vorteile', 'Nachteile']}
      />
      <CenteredContentSlide title={'Allgemein'}>
        <UnorderedList>
          <ListItem>Entwickelt von Web Designer Brad Frost ca. 2013</ListItem>
          <ListItem>
            <a href="https://atomicdesign.bradfrost.com/">Atomic design E-Book</a>
          </ListItem>
          <ListItem>
            <a href="https://vimeo.com/67476280">Vimeo</a>
          </ListItem>
        </UnorderedList>
      </CenteredContentSlide>
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
        <img src={backButtonImage} alt="Backbutton" />
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
      <CenteredContentSlide title="Beispiele zum Konsistenz">
        <FlexBox justifyContent={'space-between'} width="60%">
          <img src={modal1Image} alt="Modal 1" width="30%" />
          <img src={modal2Image} alt="Modal 2" width="30%" />
          <img src={modal3Image} alt="Modal 3" width="30%" />
        </FlexBox>
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
        <img src={chemicalFormulaImage} alt="Chemical Formula" />
      </CenteredContentSlide>
      <Slide>
        <Heading>HTML 5 Periodensystem</Heading>
        <img src={periodicTableHTMLImage} alt="Periodic table HTML" width="65%" />
      </Slide>
      <CenteredContentSlide title="Atomic Design Pattern">
        <img src={atomicDesignPatternImage} alt="Atomic Design Pattern" width="65%" />
      </CenteredContentSlide>
      <CenteredContentSlide title="Atome">
        <img src={atomsImage} alt="Atoms" />
        <Text>
          Kleinstmögliche Komponenten wie input, buttons, titles, text und können nicht weiter runtergebrochen werden
        </Text>
      </CenteredContentSlide>
      <CenteredContentSlide title="Atome">
        <img src={atomsComponentsImage} alt="Atoms components" width="48%" />
      </CenteredContentSlide>
      <CenteredContentSlide title="Moleküle">
        <img src={moleculesImage} alt="Molecules" />
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
        <img src={templatesImage} alt="Templates" />
        <Text>Enthält meistens Gruppen von Organismen und formen eine Seite</Text>
      </CenteredContentSlide>
      <CenteredContentSlide title="Templates">
        <img src={templatesComponentsImage} alt="Templates components" width="48%" />
      </CenteredContentSlide>
      <CenteredContentSlide title="Seiten">
        <img src={pagesImage} alt="Pages" />
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
      <CenteredContentSlide>
        <Text>Wie und wo hilft uns das Atomic Design Pattern❓</Text>
      </CenteredContentSlide>
      <CenteredContentSlide title="Ordnerstruktur">
        <FlexBox justifyContent={'space-between'} width="60%">
          <Appear>
            <img src={folderStructureOldImage} alt="Folder structure old" />
          </Appear>
          <Appear> &rarr;</Appear>
          <Appear>
            <img src={folderStructureImage} alt="Folder structure" />
          </Appear>
        </FlexBox>
      </CenteredContentSlide>
      <CenteredContentSlide title="Komponentendefinition">
        <img src={componentImage} alt="Component" />
        <Appear>
          <img src={componentPartsImage} alt="Component parts" />
          <img src={componentParts2Image} alt="Component parts" />
        </Appear>
      </CenteredContentSlide>
      <CenteredContentSlide title="Komponentendefinition">
        <img src={legoImage} alt="Lego" width="60%" />
      </CenteredContentSlide>
      <CenteredContentSlide title="Austausch Design und Entwicklung">
        <img src={componentStructuring} alt="Component structuring" width="80%" />
      </CenteredContentSlide>
      <CenteredContentSlide title="Wiederverwendbarkeit">
        <img src={reusableImage} alt="Reusability" width="60%" />
      </CenteredContentSlide>
      <CenteredContentSlide title="Komponenten Bibliothek">
        <Text>
          Eine Komponenten-Bibliothek für Design und Entwicklung bestehend aus Atomen, Molekülen, Organismen, Templates
          und Seiten.
        </Text>
        <UnorderedList>
          <ListItem>
            Bibliothek: <a href="https://patternlab.io/">Pattern lab</a>
          </ListItem>
          <ListItem>
            Beispiel Seite: <a href="https://boltdesignsystem.com/">bolt Design system</a>
          </ListItem>
        </UnorderedList>
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
        <Text>Welche Nachteile gibt es beim Atomic Design Pattern❓</Text>
      </CenteredContentSlide>
      <CenteredContentSlide title="Nachteile">
        <UnorderedList>
          <ListItem>Angst vor Änderungen an den Atomen</ListItem>
          <ListItem>Viel Planung der Komponenten vor der Umsetzung</ListItem>
          <ListItem>Andere?</ListItem>
        </UnorderedList>
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
          <ListItem>https://ffwagency.com/de/wissenscenter/blog/atomic-design-und-design-systeme-was-ist-was/</ListItem>
          <ListItem>https://patternlab.io/</ListItem>
        </UnorderedList>
      </SourcesSlide>
    </Deck>
  );
}
export default App;
