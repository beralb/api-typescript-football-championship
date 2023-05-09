<h1 align="center">TypeScript Project - Trybe Football Club</h1>

🔭 In this project, I applied the #SOLID architecture principles and the #OOP (Object Oriented Programming) principles in a football championship board.

</br>

In this project I was responsible for developing an API (using TDD) and also integrating, through docker-compose, the applications so that they work consuming a database.

I built a dockerized back-end using data modeling through Sequelize and SQL queries. The development respected the business rules provided in the project and the API is capable of being consumed by an already provided front-end.

To add a match it is necessary to have a token, so the person must be logged in to make the changes. We have a relationship between teams and matches tables to make updates to matches.

The back-end implements business rules to properly "populate" the tables available in the front-end that will be displayed to the system user.

In this project, I exercised the concepts of TDD, SOLID in addition to the organization of the project in MSC layers.


</br>

<h3 align="left">Technologies, Languages and Tools:</h3>
<p align="left">
<a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/> 
</a>
<a href="https://https://nodejs.org/en/" target="_blank" rel="noreferrer"> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> 
</a>
<a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white"/> 
</a> 
<a href="https://jwt.io/" target="_blank" rel="noreferrer"> <img src="https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white"/> 
</a>
<a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white"/> 
</a> 

</p>

<h3>:gear: Instructions</h3>

------------

<p>To run the repository locally, clone the project and use the following commands to initialize Docker and install the dependencies:</p>

````
docker-compose up -d
docker exec -it trybers_and_dragons bash
npm install // to install the dependencies
docker-compose down // to completely stop the application
````
<p>Warning: After installing the dependencies, check the files in the ./src folder, which contains the classes created to build the characters. In the ./src/index.ts file there are some examples and if you want to explore, build characters and carry out battles, the npm start command executes this code script in the terminal.</p>
