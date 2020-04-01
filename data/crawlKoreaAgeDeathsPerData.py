import requests
import re
from bs4 import BeautifulSoup
import json

print("#####################################")
print("############ 한국 나이별 치명율 데이터 #############")
print("######## koreaAgeStatusData.js #########")

html = requests.get("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=11&ncvContSeq=&contSeq=&board_id=&gubun=").text
#print(html)


soup = BeautifulSoup(html, 'html.parser')

# datas = soup.select('#maplayout > button')
datas = soup.select('.num > tbody > tr')
# print(datas)
# print(datas[0])
# datas = datas[1:]

ageDeathsPer = []
count = 0

for d in datas[4:]:
    temp = []
    for i in d:
        temp.append(i.text.replace('\xa0', ''))
#         print(i.text)
    age = temp[0]
    confirmed = temp[1]
    deaths = temp[2]
    deathsPer = temp[3]
    print(temp)

    ageDeathsPer.append({
        '구분' : age,
        '확진자(%)' : confirmed,
        '사망자(%)' : deaths,
        '치명율' : deathsPer
    })
    print(count)
    count += 1

print(ageDeathsPer)

with open("./data/koreaAgeDeathsPerData.js", "w", encoding='UTF-8-sig') as json_file:
    json.dump(ageDeathsPer, json_file, ensure_ascii=False, indent=4)

data = ''
with open("./data/koreaAgeDeathsPerData.js", "r", encoding='UTF-8-sig') as f:
    while True:
        line = f.readline()
        if not line: break
        data += line
data = '//Auto-generated by crawlKoreaAgeDeathsPerData.py\nvar ageDeathsPer = ' + data + ';'

with open("./data/koreaAgeDeathsPerData.js", "w", encoding='UTF-8-sig') as f_write:
    f_write.write(data)
print("############### 완료!! ###############")
print("#####################################")
