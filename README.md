

# React Micron

[![img](https://github.com/woofers/react-micron/workflows/build/badge.svg)](https://github.com/woofers/react-micron/actions) [![img](https://david-dm.org/woofers/react-micron.svg)](https://www.npmjs.com/package/react-micron) [![img](https://badge.fury.io/js/react-micron.svg)](https://www.npmjs.com/package/react-micron) [![img](https://img.shields.io/npm/dt/react-micron.svg)](https://www.npmjs.com/package/react-micron) [![img](https://img.shields.io/npm/l/react-micron.svg)](https://github.com/woofers/react-micron/blob/master/LICENSE)

Microinteractions for React using [micron.js](https://webkul.github.io/micron/).


# Why?

From [Ondřej Dostál](https://www.toptal.com/designers/product-design/microinteractions-better-ux):

> Microinteractions are single interactive moments in a product
> that enhance the workflow and increase ease of use.

Typically this is by way of subtle visual effects that are triggered to provide user feedback.

This can be done for a variety of reasons:

-   To provide feedback before triggering an action
-   To draw a users attention to a particular element
-   To hint that an action was successful
-   To indicate that an action failed
-   To make applications feel more responsive and rewarding to use.

`react-micron` helps achieve this by providing easy-to-use components
which correspond to micro-actions that can be easily triggered by a user-interaction.


# Installation

**Yarn**

    yarn add react-micron

**npm**

    npm install react-micron


# Usage

```jsx
import React from 'react'
import { Bounce } from 'react-micron'

const App = () => (
  <Bounce>
    <button>Click me!</button>
  </Bounce>
)

export default App
```

Simply add the component to the React application using JSX.

The following example shows the default props set explicitly.

```jsx
import React from 'react'
import { Blink,
         Bounce,
         Fade,
         Flicker,
         Groove,
         Jelly,
         Jerk,
         Pop,
         Shake,
         Squeeze,
         Swing,
         Tada } from 'react-micron'

const App = () => (
  <Bounce
    events="onClick"
    timing="ease-in-out"
    duration={0.45}
    inline={false}
  >
    <button>Click me!</button>
  </Bounce>
)

export default App
```


## Props


### Children

The elements to bind the microinteraction to.

In most cases this should be regular children elements passed as a React node.

However it can also be a render prop which can accept up to 2 arguments:

-   `interaction`: Function which invokes the microinteraction.
-   `micron`: Method to access the micron API directly.


### Events

`events` indicates what event handlers are used to trigger the microinteraction.  **Default:** `onClick`

This can be a string or an array of strings to call the microinteraction on multiple events.

To disable any implicit event handling by `react-micron`, an empty array or object can be passed.

Alternatively, an object can be passed to explicitly set each event handler using curried functions.

An example of this is as follows:

```js
{
  onClick: (interaction, micron) => () => interaction(),
  onMouseOver: (interaction, micron) => event => {
    console.log(event)
    micron().interaction('bounce').duration(2).timing('linear')
  }
}
```

By using a curried function the original arguments from the event handler can be used, along with the injected `react-micron` functions.


### Timing

`timing` controls the easing of the microinteraction.  **Default:** `ease-in-out`

Must be one of `linear`, `ease-in`, `ease-out` or `ease-in-out`.


### Duration

`duration` is the duration in seconds of the microinteraction.  **Default:** `0.45`


### Inline

`inline` controls what element the microinteraction is enclosed in. **Default:** `false`

If set a `span` is used to wrap the elements.  Otherwise a `div` is used.


## Advanced Usage

For more complex usage, using a render prop is recommended.

This allows the interaction to be triggered manually, and the micron API to be accessed directly.

```jsx
import React from 'react'
import { Blink,
         Bounce,
         Fade,
         Flicker,
         Groove,
         Jelly,
         Jerk,
         Pop,
         Shake,
         Squeeze,
         Swing,
         Tada } from 'react-micron'

const App = () => (
  <Bounce events={[]} duration={0.1} timing="ease-in">
    {(interaction, micron) => (
      <button
        onClick={interaction}
        onMouseOver={() =>
          micron().interaction('bounce').duration(2).timing('linear')
        }
      >
        Click me!
      </button>
    )}
  </Bounce>
)

export default App
```

Or equivalently using the corresponding HOC

```jsx
import React from 'react'
import { withBlink,
         withBounce,
         withFade,
         withFlicker,
         withGroove,
         withJelly,
         withJerk,
         withPop,
         withShake,
         withSqueeze,
         withSwing,
         withTada } from 'react-micron'

const App = ({ interaction, micron }) => (
  <button
    onClick={interaction}
    onMouseOver={() =>
      micron().interaction('bounce').duration(2).timing('linear')
    }
  >
    Click me!
  </button>
)

export default withBounce(App, {
  events: [],
  timing: 'ease-in',
  duration: 0.1
})
```

In the above 2 examples setting `events` to an empty array disables any of the interaction
done by `react-micron`.  This can then be triggered by using the `interaction` callback or using the `micron` API directly.

This allows animations of different speeds or timing to be triggered depending on how the interaction is triggered.
