
with open('docs/.vitepress/config.mts', 'r', encoding='utf-8') as f:
    content = f.read()

old = '''      {
      {
        text: \"AI\",'''

new = '''      {
        text: \"AI\",'''

content = content.replace(old, new)

with open('docs/.vitepress/config.mts', 'w', encoding='utf-8') as f:
    f.write(content)

print('fixed')