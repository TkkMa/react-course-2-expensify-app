# Git Commands

git init - Create a new git repo
git status - View the changes to your project code
git add - Add files to staging area
git commit - Creates a new commit with files from staging area
git log - View recent commits

To upload onto GitHub, can upload via command line or use SSH keys

- to check for ssh keys, go to the project directory, type 'ls -a ~/.ssh'

- To create SSH key 'ssh-keygen -t rsa -b 4096 -C "terencekk.ma@gmail.com"'
    - 't' : type use RSA
    - 'b' : bit size, the bigger the harder to crack
    - 'C' : comment 

- Check if ssh agent is running by typing:
'eval "$(ssh-agent -s)"'
- ssh-add ~/.ssh/id_rsa
- Copy the public key to the clipboard and give it to GitHub: 'clip ~/.ssh/id_rsa.pub'
- Go to Github to settings -> SSH and GPG keys -> New SSH Key
- Run a simple command: 'ssh -T git@github.com' to check whether the keys were properly set up and whether you have a secure connection to github 
- Let the local git repository know that the remote external Github repository exists by running:
'git remote add origin git@github.com:TkkMa/react-course-2-expensify-app.git'
- Check by running 'git remote -v'
- Run: git push -u origin master