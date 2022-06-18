const sharp = require('sharp');
const fs = require('fs');

const outFiles = fs.readdirSync('./out');
const images = fs.readdirSync('./public/images');
const pages = outFiles.filter(file => file.endsWith('.html'));




images.forEach(async (image) => {
    const cleanName = image.split('.')[0];
    const imageSizeInKb = fs.statSync(`./public/images/${image}`).size / 1024
    //creata a curve that the closer the size is to 50kb the less the quality from a range from 50 to 100
    const quality = imageSizeInKb < 25 ? 1 : 70

    fs.unlinkSync(`./out/images/${image}`);
    await sharp(`./public/images/${image}`).
        webp({ quality }).
        toFile(`./out/images/${cleanName}.webp`);
    const newFileSizeInKb = fs.statSync(`./out/images/${cleanName}.webp`).size / 1024
    console.log("\x1b[36m%s\x1b[0m", ` ${cleanName} ${imageSizeInKb}kb -> ${newFileSizeInKb}kb`);
    //replace any path in the html with the new path
    pages.forEach(page => {
        const html = fs.readFileSync(`./out/${page}`, 'utf8');
        //remove extension from image name
        const newHtml = html.replace(`/images/${image}`, `/images/${cleanName}.webp`);
        fs.writeFileSync(`./out/${page}`, newHtml);
    })
})

console.log("\x1b[0m", `Finished ${images.length} ${images.length === 1 ? 'image' : 'images'}`);







