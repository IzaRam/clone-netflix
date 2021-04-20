import requests
from bs4 import BeautifulSoup
import json

r = requests.get("https://www.imdb.com/chart/top/?ref_=nv_mv_250")
soup = BeautifulSoup(r.content, 'html.parser')

rows = soup.find("tbody").find_all("tr")

links = []
for row in rows:
    links.append(row.find("a")['href'])

titles = []
images = []
descriptions = []
for i in range(6):
    r = requests.get("https://www.imdb.com/"+links[i])
    soup = BeautifulSoup(r.content, 'html.parser')

    titles.append(soup.find("div", {"class": "title_wrapper"}).find("h1").find(text=True))

    images.append(soup.find("div", {"class": "poster"}).find("img")['src'])

    descriptions.append(soup.find("div", {"class": "summary_text"}).find(text=True))


results = {
    "filmes": []
}

for i in range (len(titles)):
    filme = {
        "id": i,
        "titulo": titles[i],
        "urlFoto": images[i],
        "descricao": descriptions[i]
    }
    results['filmes'].append(filme)


with open('db.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=4)

