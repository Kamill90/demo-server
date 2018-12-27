# Goals: 
-Auth
-Logged in user can add a photo with desctription
-Everybody can see every photos with desctription
-Logged in user can like other photos


After changing something in graphql types, update datamode.prisma and 'yarn deploy'

demo database fields: https://app.prisma.io/kamil-lewandowski/services/prisma-eu1/demo-server/dev/databrowser/User

#eslint 
basic airbnb setup

#business logic
user needs to have unique email, password and may have a name 


#backlog
1. Clear up
Clean the code, configure eslint, set enviromental cariables with secret tokens.
Prepare code for production.
2. Deploy to AWS / Firebase the demo-server. Prepare gitflow for staging
3. Add lacking functions - proper queries, linking other posts.
4. Add file upload functionality.