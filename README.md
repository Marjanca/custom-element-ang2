# TestCustomElements

This project shows how custom elments can be generated using angular. After building this custom element, you can inject it and use it wherever you want.

## Build

After every change, navigate to the folder where package.json is and run command npm run build:elements. This will generate two new files
element.js and styles.css which then could be used as a sources for well-known link and script tags.

## Testing

You can test your custom element creating html file and referencing files mentioned above. In this example, custom element is named as <my-own-element>. Example how it is used is shown in test-custom-element.html.