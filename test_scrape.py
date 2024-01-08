

import requests
from bs4 import BeautifulSoup

url = 'https://ys2226.github.io'


response = requests.get(url)

soup = BeautifulSoup(response.text, 'html.parser')


title = soup.find('title').text

print(title)
