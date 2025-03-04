

const colorPallet = document.querySelector('.color-pallets');
const greenPallet = ['#F1F5D8', '#D6FFC1', '#B9FFAF', '#97FA9A', '#8AF0BF'];
const bluePallet = ['#EFEFEF', '#B1E6F3', '#72DDF7', '#79B8F4', '#8093F1'];
const tealPallet = ['#006767', '#008080', '#279E9D', '#4EBCBA', '#75DAD7'].reverse();
colorPallet.innerHTML = `
    <h2>Color Pallets</h2>
    <h3>Green</h3>
    <ul>
        ${greenPallet.map(color => `<li style="background-color: ${color};" data-color="${color}">${color}</li>`).join('')}
    </ul>
    <h3>Blue</h3>
    <ul>
        ${bluePallet.map(color => `<li style="background-color: ${color};" data-color="${color}">${color}</li>`).join('')}
    </ul>
    <h3>Teal</h3>
    <ul>
        ${tealPallet.map(color => `<li style="background-color: ${color};" data-color="${color}">${color}</li>`).join('')}
    </ul>
`;

document.querySelectorAll('.color-pallets li').forEach(item => {
    item.addEventListener('click', function () {
        const color = this.dataset.color;
        navigator.clipboard.writeText(color).then(() => {
            alert(`Copied: ${color}`);
        }).catch(err => console.error('Failed to copy text: ', err));
    });
});