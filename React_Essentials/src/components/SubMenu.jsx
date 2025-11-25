import TabButton from "./TabButton";
import '../index.css';
import { useState } from "react";
import { EXAMPLES } from "../data.js";

export default function SubMenu() {
  const [selectedTopic, setSelectedTopic] = useState()

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

    return (
        <section id="examples" >
            <h2> Examples</h2>
            <menu>
                <TabButton isSeleted = {selectedTopic === 'components'} onSelect={() => handleClick('components')} >Components</TabButton>
                <TabButton isSeleted = {selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')} >JSX</TabButton>
                <TabButton isSeleted = {selectedTopic === 'props'} onSelect={() => handleClick('props')} >Props</TabButton>
                <TabButton isSeleted = {selectedTopic === 'state'} onSelect={() => handleClick('state')} >State</TabButton>
            </menu>
            { !selectedTopic ? (<p>Please select a button</p>) : (
                <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code> {EXAMPLES[selectedTopic].code} </code>
                </pre>
            </div>
            )}
            
        </section>
    );
}