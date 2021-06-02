const $app = document.getElementById('pixelArtApp');

//the application state
let selectedColor = null;

const $pixelContainer = document.createElement('DIV');
$pixelContainer.className = 'pixel-container';
$app.appendChild($pixelContainer);

const $paletteContainer = document.createElement('DIV');
$paletteContainer.className = 'palette-container';
$app.appendChild($paletteContainer);

function handlePixelClick(event) {
    if(selectedColor)
    {
        event.target.style.backgroundColor = selectedColor;
    }
}

for(let i = 0; i < 308; i++)
{
    const $pixel = document.createElement('DIV');
    $pixel.className = "pixel";
    $pixel.addEventListener('click', handlePixelClick);
    $pixelContainer.appendChild($pixel);
}

const colors = [
    'Lavender',
    'HoneyDew',
    'PapayaWhip',
    'lemonChiffon',
    'Bisque',
    'LightSalmon',
    'LightCoral',
    'IndianRed',
    'OrangeRed',
    'red',
    'yellow',
    'Gold',
    'pink',
    'HotPink',
    'DeepPink',
    'Fuchsia',
    'Violet',
    'purple',
    'GreenYellow',
    'LimeGreen',
    'green',
    'ForestGreen',
    'Aquamarine',
    'cyan',
    'blue',
    'SteelBlue',
    'MidnightBlue',
    'RosyBrown',
    'brown',
    'black'
];

function handlePaletteClick(event) {
    // grab background color from the palette item that was clicked.
    selectedColor = event.target.style.backgroundColor;

    // set 'selected color' box to active color
    $currentColor.style.backgroundColor = selectedColor;
}

for(let j = 0; j < colors.length; j++)
{
    // create a div element for palette color selection
    const $paletteItem = document.createElement('DIV');
    $paletteItem.className = 'palette-item';
    $paletteItem.style.backgroundColor = colors[j];
    $paletteItem.addEventListener('click', handlePaletteClick);
    $paletteContainer.appendChild($paletteItem);
}

// create a div element to reflect current color selection
const $colorLabel = document.createElement('h4');
$colorLabel.className = 'header-color';
$colorLabel.appendChild(document.createTextNode('Current Color - >'));
$paletteContainer.appendChild($colorLabel);
const $currentColor = document.createElement('DIV');
$currentColor.className = 'current-color';
$currentColor.addEventListener('click', handlePaletteClick);
$paletteContainer.appendChild($currentColor);

