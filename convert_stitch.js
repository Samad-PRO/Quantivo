const fs = require('fs');

function convertHtmlToJsx(htmlContent) {
    const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) return "export default function Component() { return <div>Error extracting body</div>; }";
    let body = bodyMatch[1];

    body = body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    body = body.replace(/class="/g, 'className="');
    body = body.replace(/for="/g, 'htmlFor="');
    body = body.replace(/viewbox="/g, 'viewBox="');
    body = body.replace(/stroke-width="/g, 'strokeWidth="');
    body = body.replace(/stroke-linecap="/g, 'strokeLinecap="');
    body = body.replace(/stroke-linejoin="/g, 'strokeLinejoin="');
    body = body.replace(/fill-rule="/g, 'fillRule="');
    body = body.replace(/clip-rule="/g, 'clipRule="');
    body = body.replace(/tabindex="/g, 'tabIndex="');

    body = body.replace(/\s+onclick="[^"]*"/gi, '');
    body = body.replace(/\s+onsubmit="[^"]*"/gi, '');

    body = body.replace(/\s+style="([^"]*)"/gi, (match, styleStr) => {
        if (styleStr.includes('background-image')) {
            const urlMatch = styleStr.match(/url\('([^']+)'\)/);
            if (urlMatch) return ` style={{ backgroundImage: "url('${urlMatch[1]}')" }}`;
        }
        if (styleStr.includes('font-variation-settings')) {
            return ` style={{ fontVariationSettings: "'FILL' 1" }}`;
        }
        return '';
    });

    body = body.replace(/(<(img|input|br|hr|path)[^>]*(?<!\/))>/gi, '$1 />');
    body = body.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');

    return body;
}

function processFile(filePath, componentName) {
    const content = fs.readFileSync(filePath, 'utf8');
    const headMatch = content.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    if (headMatch) {
        const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
        let match;
        while ((match = styleRegex.exec(headMatch[1])) !== null) {
            fs.appendFileSync('C:/Users/user/.gemini/antigravity-ide/scratch/quantivo/app/globals.css', '\n' + match[1]);
        }
    }

    const jsx = convertHtmlToJsx(content);
    return `'use client'\n\nexport default function ${componentName}() {\n  return (\n    <>\n${jsx}\n    </>\n  )\n}\n`;
}

const filesMap = {
    'landing': {
        source: 'C:/Users/user/.gemini/antigravity-ide/brain/4c740e36-b4b0-4e82-bba0-32e31b218b5b/.system_generated/steps/473/content.md',
        dest: 'C:/Users/user/.gemini/antigravity-ide/scratch/quantivo/app/page.tsx',
        name: 'LandingPage'
    },
    'login': {
        source: 'C:/Users/user/.gemini/antigravity-ide/brain/4c740e36-b4b0-4e82-bba0-32e31b218b5b/.system_generated/steps/480/content.md',
        dest: 'C:/Users/user/.gemini/antigravity-ide/scratch/quantivo/app/(auth)/login/page.tsx',
        name: 'LoginPage'
    },
    'signup': {
        source: 'C:/Users/user/.gemini/antigravity-ide/brain/4c740e36-b4b0-4e82-bba0-32e31b218b5b/.system_generated/steps/481/content.md',
        dest: 'C:/Users/user/.gemini/antigravity-ide/scratch/quantivo/app/(auth)/signup/page.tsx',
        name: 'SignupPage'
    },
    'app_shell': {
        source: 'C:/Users/user/.gemini/antigravity-ide/brain/4c740e36-b4b0-4e82-bba0-32e31b218b5b/.system_generated/steps/482/content.md',
        dest: 'C:/Users/user/.gemini/antigravity-ide/scratch/quantivo/app/(dashboard)/layout.tsx',
        name: 'DashboardLayout'
    }
};

for (const key in filesMap) {
    const config = filesMap[key];
    if (fs.existsSync(config.source)) {
        const tsx = processFile(config.source, config.name);
        fs.writeFileSync(config.dest, tsx, 'utf8');
        console.log(`Processed ${config.dest}`);
    }
}
