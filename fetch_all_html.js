const fs = require('fs');
const https = require('https');

const data = JSON.parse(fs.readFileSync('C:/Users/user/.gemini/antigravity-ide/brain/4c740e36-b4b0-4e82-bba0-32e31b218b5b/.system_generated/steps/572/output.txt', 'utf8'));
const screens = {};

const download = (title, url) => {
    return new Promise((resolve) => {
        https.get(url, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                screens[title] = body;
                console.log(`Downloaded ${title} (${body.length} chars)`);
                resolve();
            });
        }).on('error', (e) => {
            console.error(`Error downloading ${title}: ${e.message}`);
            screens[title] = `Error: ${e.message}`;
            resolve();
        });
    });
};

async function main() {
    const promises = [];
    for (const s of data.screens) {
        promises.push(download(s.title, s.htmlCode.downloadUrl));
    }
    await Promise.all(promises);
    fs.writeFileSync('C:/Users/user/.gemini/antigravity-ide/scratch/quantivo/all_screens.json', JSON.stringify(screens, null, 2));
}

main();
