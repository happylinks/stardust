import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ButtonTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Button'
      description='A standard button'
      examplePath='elements/Button/Types/ButtonButtonExample'
    />
    <ComponentExample
      description='Button content can also be defined with props'
      examplePath='elements/Button/Types/ButtonContentPropExample'
    />
    <ComponentExample
      title='Emphasis'
      description='A button can be formatted to show different levels of emphasis'
      examplePath='elements/Button/Types/ButtonEmphasisExample'
    />
    <ComponentExample
      title='Animated'
      description='Buttons can animate to show additional or hidden content'
      examplePath='elements/Button/Types/ButtonAnimatedExample'
    />
    <ComponentExample
      title='Labeled'
      description='A button can be accompanied by a label'
      examplePath='elements/Button/Types/ButtonLabeledExample'
    />
    <ComponentExample
      examplePath='elements/Button/Types/ButtonLabeledBasicExample'
    />
    <ComponentExample
      description='You can also configure the markup with props'
      examplePath='elements/Button/Types/ButtonLabeledPropsExample'
    />
    <ComponentExample
      title='Icon'
      description='A button can be made of only an icon'
      examplePath='elements/Button/Types/ButtonIconExample'
    />
    <ComponentExample
      description='You can also define an icon button with props'
      examplePath='elements/Button/Types/ButtonIconPropExample'
    />
    <ComponentExample
      title='Labeled Icon'
      description='A button can use an icon as a label'
      examplePath='elements/Button/Types/ButtonLabeledIconExample'
    />
    <ComponentExample
      description='You can also define a labeled icon button with props'
      examplePath='elements/Button/Types/ButtonLabeledIconPropsExample'
    />
    <ComponentExample
      title='Basic'
      description='The basic button has a subtle appearance'
      examplePath='elements/Button/Types/ButtonBasicExample'
    />
    <ComponentExample
      title='Inverted'
      description='A button can be formatted to appear on a dark background'
      examplePath='elements/Button/Types/ButtonInvertedExample'
    />
  </ExampleSection>
)

export default ButtonTypesExamples
