import os
import re

def convert_html_to_jsx(html_content):
    # Extract body content
    body_match = re.search(r'<body[^>]*>(.*?)</body', html_content, re.DOTALL | re.IGNORECASE)
    if not body_match:
        return "export default function Component() { return <div>Error extracting body</div>; }"
    body = body_match.group(1)

    # Remove script tags
    body = re.sub(r'<script[^>]*>.*?</script>', '', body, flags=re.DOTALL | re.IGNORECASE)

    # Convert attributes
    body = body.replace('class="', 'className="')
    body = body.replace('for="', 'htmlFor="')
    body = body.replace('viewbox="', 'viewBox="')
    body = body.replace('stroke-width="', 'strokeWidth="')
    body = body.replace('stroke-linecap="', 'strokeLinecap="')
    body = body.replace('stroke-linejoin="', 'strokeLinejoin="')
    body = body.replace('fill-rule="', 'fillRule="')
    body = body.replace('clip-rule="', 'clipRule="')
    body = body.replace('tabindex="', 'tabIndex="')

    # Remove inline onclick handlers
    body = re.sub(r'\s+onclick="[^"]*"', '', body, flags=re.IGNORECASE)
    body = re.sub(r'\s+onsubmit="[^"]*"', '', body, flags=re.IGNORECASE)

    # Convert simple inline styles
    def style_replacer(match):
        style_str = match.group(1)
        # Attempt minimal conversion for backgroundImage and font-variation-settings
        if 'background-image' in style_str:
            url_match = re.search(r"url\('([^']+)'\)", style_str)
            if url_match:
                return f'style={{{{ backgroundImage: "url(\'{url_match.group(1)}\')" }}}}'
        if 'font-variation-settings' in style_str:
            return f'style={{{{ fontVariationSettings: "\'FILL\' 1" }}}}'
        return ''

    body = re.sub(r'\s+style="([^"]*)"', style_replacer, body, flags=re.IGNORECASE)

    # Self-close unclosed tags
    body = re.sub(r'(<(img|input|br|hr|path)[^>]*(?<!/))>', r'\1 />', body, flags=re.IGNORECASE)

    # Handle HTML comments - convert to JS comments or remove
    body = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', body, flags=re.DOTALL)

    return body

def process_file(file_path, component_name):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find style tags in head to append to globals.css
    head_match = re.search(r'<head[^>]*>(.*?)</head>', content, re.DOTALL | re.IGNORECASE)
    if head_match:
        styles = re.findall(r'<style[^>]*>(.*?)</style>', head_match.group(1), re.DOTALL | re.IGNORECASE)
        with open('C:/Users/user/.gemini/antigravity-ide/scratch/quantivo/app/globals.css', 'a', encoding='utf-8') as f:
            for style in styles:
                f.write('\n' + style)

    jsx = convert_html_to_jsx(content)
    
    # Prepend 'use client' and export default function
    full_tsx = f"""'use client'

export default function {component_name}() {{
  return (
    <>
{jsx}
    </>
  )
}}
"""
    return full_tsx

files_map = {
    'landing': {
        'source': 'C:/Users/user/.gemini/antigravity-ide/brain/4c740e36-b4b0-4e82-bba0-32e31b218b5b/.system_generated/steps/473/content.md',
        'dest': 'C:/Users/user/.gemini/antigravity-ide/scratch/quantivo/app/page.tsx',
        'name': 'LandingPage'
    },
    'login': {
        'source': 'C:/Users/user/.gemini/antigravity-ide/brain/4c740e36-b4b0-4e82-bba0-32e31b218b5b/.system_generated/steps/480/content.md',
        'dest': 'C:/Users/user/.gemini/antigravity-ide/scratch/quantivo/app/(auth)/login/page.tsx',
        'name': 'LoginPage'
    },
    'signup': {
        'source': 'C:/Users/user/.gemini/antigravity-ide/brain/4c740e36-b4b0-4e82-bba0-32e31b218b5b/.system_generated/steps/481/content.md',
        'dest': 'C:/Users/user/.gemini/antigravity-ide/scratch/quantivo/app/(auth)/signup/page.tsx',
        'name': 'SignupPage'
    },
    'app_shell': {
        'source': 'C:/Users/user/.gemini/antigravity-ide/brain/4c740e36-b4b0-4e82-bba0-32e31b218b5b/.system_generated/steps/482/content.md',
        'dest': 'C:/Users/user/.gemini/antigravity-ide/scratch/quantivo/app/(dashboard)/layout.tsx',
        'name': 'DashboardLayout'
    }
}

for key, config in files_map.items():
    if os.path.exists(config['source']):
        tsx = process_file(config['source'], config['name'])
        with open(config['dest'], 'w', encoding='utf-8') as f:
            f.write(tsx)
        print(f"Processed and wrote {config['dest']}")
    else:
        print(f"Source file {config['source']} not found.")
