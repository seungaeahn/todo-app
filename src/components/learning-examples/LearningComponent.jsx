import FirstComponent from './FirstComponent';
import {FifthCompoent} from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';
import FourthComponent from './FourthComponent.jsx';
import LearningJavaScript from './LearningJavaScript.jsx';

export default function LearningComponent() {
    return (
      <div className="App">
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
        <FourthComponent/>
        <FifthCompoent/>
        <LearningJavaScript/>
      </div>
    );
  }