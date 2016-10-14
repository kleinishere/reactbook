{ /* Chapter 4

Spread Attributes
JSX borrows a useful feature from ECMAScript6 called the spread operator and adopts it as a convenience when defining properties.
Imagine you have a collection of attributes you want to pass to an <a> component:
*/ }

var attr = {
  href: 'http://example.org',
  target: '_blank',
};


{ /* You can always do it like so: */ }

return (
  <a
    href={attr.href}
    target={attr.target}>
    Hello
  </a>
);

{ /*
But this feels like a lot of boilerplate code. By using spread attributes, you can accomplish this in just one line:
*/ }

return <a {...attr}>Hello</a>;

{ /*
In example, you have an object of attributes you want to define (maybe conditionally) ahead of time. This is useful in itself, but a more common use is when you get this object of attributes from outside—often from a parent component. Let’s see how that case plays out.
*/ }


{ /* Chapter 4.12 */ }
{ /*

  Be aware of handling special HTML terms:
  - classFor (with a label)
  - className (for any HTML element)

  style is an object
  - in HTML, we'd use <em style="font-size: 2em; line-height: 1.6" />
  - in JSX, we use
    - var styles = {
      fontSize: '2em',
      lineHeight: '1.6'
    };
    and
    var em = <em style={styles} />

    OR
    Use a double { {} } structure to avoid setting up a object
    var em = <em style={ {fontSize: '2em', lineHeight: '1.6'} } />;

    Closing Tags
    - Sometimes don't n eed to be closed in HTML
    - But MUST BE CLOSED in JSX
    - e.g.
      - <br />
      - don't forget to close out list items in a <ul>

    camelCase attributes
    - All attributes in JSX need to be camelCase.
    - This is a common source of confusion when you’re first starting out
    - you might type onclick and notice that nothing happens until you go back and change it to onClick:

    - exceptions: data-, and aria- are similar to HTML
*/}

{ /* Chapter 4.13 - Forms and JSX */ }
{/*
  onChange handler
  - Handles ALL form objects
  - More consistent than using "checked" for radio buttons and "selected" for "select" options

  defaultValue and value
  - value always knows the latest value
  - can use defaultValue to give a default one

  The below will always have a defaultValue of hello,
  but changing the value will update value
*/}
    function log(event) {
      console.log("value: ", event.target.value);
      console.log("defaultValue: ", event.target.defaultValue);
    }
    React.render(
      <input defaultValue="hello" onChange={log} />,
      document.getElementById('app')
    );
{/*

  <textarea> Value
  - For consistency with text inputs, React’s version of <textarea> takes value and defaultValue properties
  - Do NOT declare a <textarea>Default Text</textarea>
    like you would in HTML5
  - Instead, use the defaultValue property value in <textarea defaultValue={"hello\nworld"} />

  <select> Value
  - In HTML, you would make a list of
    <select>
      <option value="stay">Should I stay</option>
      <option value="move" selected>or should I go</option>
    </select>

    with the default option being identified as above.


    - In JSX, however, we do: */}
    // React/JSX
      <select defaultValue="move">
        <option value="stay">Should I stay</option>
        <option value="move">or should I go</option>
      </select>
{/*
    - For a multi-select menu,
      simply set defaultValue={["stay", "move"]}
      as an array of pre-selected values


*/}
