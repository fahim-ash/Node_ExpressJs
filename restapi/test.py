import requests
GetUser = requests.get('http://localhost:3000/users')
PostUSer = requests.post('http://localhost:3000/users',json={"name": "fahim","age": 22,"married": False})

PutUser = requests.put('http://localhost:3000/users',json={"newName":"ASH"})
DeleteUser = requests.delete('http://localhost:3000/users/1')

print(DeleteUser.content)
