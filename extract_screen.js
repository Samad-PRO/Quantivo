const fs = require('fs');
const https = require('https');

const stepFile = process.argv[2];
const outFile = process.argv[3];
const data = JSON.parse(fs.readFileSync(stepFile, 'utf8'));

function findHtmlUrl(obj) {
    if (!obj || typeof obj !== 'object') return null;
    if (obj.htmlCode && obj.htmlCode.downloadUrl) return obj.htmlCode.downloadUrl;
    for (const key of Object.keys(obj)) {
        const found = findHtmlUrl(obj[key]);
        if (found) return found;
    }
    return null;
}

const url = findHtmlUrl(data);
if (!url) {
    console.error('No HTML URL found');
    console.log(JSON.stringify(data).substring(0, 500));
    process.exit(1);
}
console.log('Downloading...');
https.get(url, (res) => {
    let body = '';
    res.on('data', chunk => body += chunk);
    res.on('end', () => {
        fs.writeFileSync(outFile, body);
        console.log('Saved', body.length, 'chars to', outFile);
    });
}).on('error', (e) => {
    console.error('Error:', e.message);
    process.exit(1);
});
