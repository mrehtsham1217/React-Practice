import requests

def get_all_users(url):
    try:
        response=requests.get(url)
        data=response.json()
        print(data)
    except Exception as e:
        print(str(e))
url="https://jsonplaceholder.typicode.com/users"

get_all_users(url)