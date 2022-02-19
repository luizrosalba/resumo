Comandos importantes

# Comandos do Git

============
Um Resumo dos Comandos Git, lista de Comandos importantes do Git

## Inicializando

| Command | Description |
| - | - |
| `git init` | Inicializa um Repositório Local |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Cria uma copia local de um repositório Remoto |

## Estágios: 

Untracked, Unmodified, Modified e Staged.

## Básico

Config user 
1) git config user.name "userName"
2) git config user.email "userEmail" 

Criando um repo 

1) cria na mao o repositorio
2) adiciona o origin 
3) git remote add origin https://github.com/luizrosalba/loja-bootstrap.git
4) git push -u origin master
5) muda o branch padrão no github

- tudo que estiver após # não será incluido no commit 

## Git list, config and basic commands 
| Command | Description |
| - | - |
| `git status` | Check status |
| `git add [file-name.txt]` | Adiciona o arquivo no rastreável pelo git |
| `git add -A` | Adiciona todas as mudanças |
| `git commit -m "[commit message]"` | Commit e comenta as alterações |
| `git commit -am "[commit message]"` | Commit todos adicionados e comenta as alterações |
| `git rm -r [file-name.txt]` | Remove um arquivo ou uma pasta |

## Configurando o editor para comits (Vscode)
- Se ocorrer um erro : F1 in VsCode ( install code commend in Path)

| Command | Description |
| - | - |
| `git config core.editor "code --wait"` | Escolhe vscode como editor de texto para conflitos etc |

## HEAD 

- Pointer to refear the current "location" in your repository 

- HEAD~1 (1 commits ago)
- HEAD~2 (2 commits ago)

- Head always points to latest commit but we can change this pointer

- cat ./git/HEAD (prints where head points. A file that has the commit hash)

## Branch 
| Command | Description |
| - | - |
| `git branch` | Lista os branches (asterístico é o branch local) |
| `git branch -a` | Lista os branches local e remoto |
| `git branch [branch name]` | Cria um branch |
| `git branch -d [branch name]` | Deleta um Branch |
| `git push origin --delete [branch name]` | Deleta um branch remoto |
| `git checkout -b [branch name]` | Cria um branch e muda para ele |
| `git checkout -b [branch name] origin/[branch name]` | Clona e muda para ele |
| `git branch -m [old branch name] [new branch name]` | renomeia um branch local |
| `git checkout [branch name]` | muda para o branch |
| `git checkout -` | muda para o último branch local |
| `git checkout -- [file-name.txt]` | Descarta mudanças no arquivo |

## Merge

- We merge branches not commits 
- We always merge to the current HEAD branch 
- switch to branch which will receive the update or bugfix of feature (destination)

| Command | Description |
| - | - |
| `git merge [branch name]` | Merge a branch com a branch ativa |
| `git merge [source branch] [target branch]` | Merge a branch com a branch alvo |


## Switch vs Checkout

- checkout does more then switching branches. 
- you can change branch if file is new (no conflict occurs)
- Checkout to commit makes detached head. Switch to any branch to solve it

| Command | Description |
| - | - |
| `git switch branchName` |  switch to new branch |
| `git switch -c branchName` | create and switch to new branch |

## Resolve Conflicts 

- conflict -> fix the conflicting file -> remove conflict markers ->commit 

## Sharing & Updating Projects

| Command | Description |
| - | - |
| `git fetch` | Fetch changes, update tracking not files |
| `git push origin [branch name]` | Push um branch para o seu repositorio remoto |
| `git push -u origin [branch name]` | Push mudanças para um repositorio remoto |
| `git push` | Push mudanças para o repositório remoto |
| `git push origin --delete [branch name]` | Deleta um branch remoto |
| `git push --force -with -lease` | força o push sem sobrescrever trabalho de outros devs |
| `git pull` | Update Head and local dir  |
| `git pull origin [branch name]` | Pull mudanças de um repositorio remoto |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Adiciona um repositório remoto |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Designa um ramo repositorio origin para SSH |

## Fast-Forward

- Not all merges are fast-forwards 
- Happens when ex. master has commits that your branch does not have (conflicts).
- A merge commit (with two parents) will be generated on the receiving branch (ex. master) 

## Inspeção e Comparação

- git diff lists all the changes in our working dir that are not staged for the next commit 

| Command | Description |
| - | - |
| `git log` | Visualizar mudanças e commit hashes  |
| `git log --summary` | Visualizar mudanças(detalhadas) |
| `git log --oneline` | Visualizar mudanças (resumidamente) |
| `git diff [source branch] [target branch]` | Preview mudanças |
| `git diff HEAD` | Preview mudanças since last commit |

## Stash

naming the stash

| Command | Description |
| - | - |
| `git stash` | Mudanças stach em um diretório |
| `git stash clear` | remove todas as entradas stachs |
| `git stash push -m "my_stash"` | Where "my_stash" is the stash name. |
| `git stash list` | This will list down all your stashes. |
| `git stash pop --index n` | Apply a stash and remove it from the stash stack |
| `git stash apply --index n` | Apply and keep in stash |
| `git stash apply my_stash_name` | Apply and keep in stash |
| `git stash drop stash@{number}` | Drop particular stash |

## Reset x Revert x Restore 

- Reset rewrites history (Potential lose work previous commit is lost)
- Revert rewrites history (just add one commit reverting previous commit still exists)
- Restore file or project 

| Command | Description |
| - | - |
| `git reset (HEAD~n ou commitID)` | Soft reset only loose commits |
| `git revert (HEAD~n ou commitID)` | Make a new commit to revert "commitID"  |
| `git reset --hard (HEAD~n ou commitID)` | Reset para commit ou head~numerodecommitsavoltar |
| `git restore --source (HEAD~n ou commitID)` | Restore para commit ou head~numerodecommitsavoltar |

## Gists : 

- simple way to share code snippets GHE->Profile-> Gist

## GHE Pages : 

- publish work 
- No SSR (python ruby node)
- just HTML/CSS/JS
- Deploy: GHE pages -> select branch (must have index.html)

## PR 

- GHE feature, not naive from git 
- Tags represents the version
- can have conflicts. 

## Solve PR conflicts : 

```
git fetch
git checkout -b newbranch origin/newbranch
git merge main (or develop)
(fix the conflicts)
git checkout main (or develop)
git merge --no-ff newbranch
git push origin main 
git branch -D newbranch
```




## Removendo arquivos que foram adicionardos ao gitignore  da arvore 
    
- git update-index --assume-unchanged .\package-lock.json

## Tips

stop versioning a dir 

- git rm -r --cached myFolder
- push


https://www.toptal.com/developers/gitignore
.gitignore aceita patterns (ex: *.log)

## amend 

git commit --amend  (open the previous commit message)





