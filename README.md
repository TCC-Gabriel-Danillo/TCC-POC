# FindDev

### Encontre incríveis desenvolvedores próximos a você. 

Esse é um aplicativo destinado para comunidade de desenvolvedores encontrar outros desenvolvedores próximos. 

![Simulator Screen Shot - iPhone 8 - 2022-08-22 at 11 36 30](https://user-images.githubusercontent.com/37307099/185948236-a6f2ffc1-dc3d-4e02-b3cf-d5f6665d2f22.png)

![Simulator Screen Shot - iPhone 8 - 2022-08-22 at 11 36 43](https://user-images.githubusercontent.com/37307099/185948335-b7b4a03a-710b-48f9-ac19-6a78c494615b.png)

![Simulator Screen Shot - iPhone 8 - 2022-08-22 at 11 36 51](https://user-images.githubusercontent.com/37307099/185948355-efa8cead-68cc-4e06-b2dc-7df880632535.png)


### Requisitos

- Instalar o expo local e em seu smatphone [Expo](https://expo.dev/)
- Configurar um projeto no [firebase](https://firebase.google.com/) e obter configuraça. 

### Configucação

Adicione dentro da pasta src/Ui/src/config/ um arquivo chamado config.json com o seguinte formato: 

````
{
    "apiKey": "",
    "authDomain": "",
    "projectId": "",
    "storageBucket": "",
    "messagingSenderId": "",
    "appId": "",
    "measurementId": ""
  }
  ````
Os dados acima são obtivos após a criação de um novo projeto no Firebase. 

### Executar

Para executar o projeto, basta entrar na pasta src/Ui e executar o seguinte comando

````
  expo start 
````


