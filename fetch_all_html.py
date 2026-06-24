import json
import urllib.request

with open('C:/Users/user/.gemini/antigravity-ide/brain/4c740e36-b4b0-4e82-bba0-32e31b218b5b/.system_generated/steps/572/output.txt', 'r', encoding='utf-8') as f:
    data = json.load(f)

screens = {}
for s in data['screens']:
    title = s['title']
    url = s['htmlCode']['downloadUrl']
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            screens[title] = html
            print(f"Downloaded {title} ({len(html)} chars)")
    except Exception as e:
        print(f"Error downloading {title}: {e}")
        screens[title] = f"Error: {e}"

with open('C:/Users/user/.gemini/antigravity-ide/scratch/quantivo/all_screens.json', 'w', encoding='utf-8') as f:
    json.dump(screens, f, indent=2)
