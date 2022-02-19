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

Configure user 
- cat ~./gitconfig
- Settings are stored into global config file 
- git config --global user.name
- Settings are stored into config dir inside the repo 
- git config user.name

1) git config user.name "userName"
2) git config user.email "userEmail" 

Criando um repo 

1) cria na mao o repositorio
2) adiciona o origin 
3) git remote add origin [repo URL]
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
| `git commit --amend` | (open the previous commit message for editing) |
 

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
| `git diff [source branch] [target branch]` | Compara duas branches |
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

## Rebase: 
Like merge but rewrites history (potential to loose work!)

1) Use it as alternative to merge. Push commits to the end of master. Creates a new commit for each original feature branch with no merge messages
```
git switch featurebranch
git rebase master(or develop) 
```

### Warning! 
- NEVER REBASE PUSHED COMMITS! 
- ONLY REBASE COMMITS THAT ONLY YOU HAVE

- git rebase --abort 
- git rebase --continue

2) Use it as cleanup tool

- Rewrites history! 
- Interactive Rebase 
- squash, add rewrite delete reorder 

| Command | Description |
| - | - |
| `git rebase -i HEAD~n (open editor N commits listed )` | interative rebase n commits behind |
| `pick : use the commit` | use the commit |
| `reword : use the commit` | use and edit commit message |
| `edit : use the commit` | use but stop for ammending |
| `fixup : use the commit` | use but meld into next and discard commit msg |
| `squash : use the commit` | use but meld into previous |
| `drop : use the commit` | remove commit |

## Semantic versioning : 
- MAJOR.MINOR.PATCH
- FIRST RELEASE 1.0.0
- patch: no breaking changes just bugfixes or other small codes
- minnor: no breaking changes new features backward compatibles
- major: no longer compatible substantial changes

## Git tags : 
Local Commits, branch refs that do not change. A tag always reference to the same commit
- lightweigth tags 
- annotaded tags 

| Command | Description |
| - | - |
| `git tag` | list all tags |
| `git tag <tagname> <commitiD>` | tag previous commit |
| `git tag <tagname> <commitiD> -f` | rewrite previous commit tag  |
| `git tag -d <tagname>` | delete tag  |
| `git push --tags ` | tags not default pushed.| 
| `git push origin v1.10.0 ` | push single tag| 
| `git tag show <tag>` | list tag |
| `git tag -a tagname` | annotaded tag. Will prompt for annotations (changelog) |
| `git tag -l "*beta*"` | list all tags with beta word |
| `git checkout tag` | switch to tag detached head |
| `git diff v1.2.0 v1.0.0` | view diffs from tags |

## Reflog
A log of all activity on git 

- Recover lost commits 
- git records when refs are updated we can view records
- reflog expire after 90 days (can change)
- name@{qualifier} ex: HEAD@{10}
- name@{qualifier} ex: HEAD@{one.week.ago}
- name@{qualifier} ex: HEAD@{2.days.ago}

| Command | Description |
| - | - |
| `git reflog show HEAD` | SHOW LOG  of a specific reference  |
| `git reflog branchname@{qualifier}` | reflog branchname|
| `git tag <tagname> <commitiD>` | tag previous commit |
| `git tag <tagname> <commitiD> -f` | rewrite previous commit tag  |
| `git diff HEAD@{0} HEAD@{5}` | diff from spec refs  |

## Recover lost work with reflog
Hard reseted info are still available for reflog 
```
git reflog show <branch>
git checkout <hash commit ID>  (detached HEAD)
COPY WHAT YOU NEED 
git switch -
```

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

## Aliases 
Easy create custom commands for git

```
open git config file 
- vim ~/.gitconfig
add 
[alias]
    s = status   /// will rewrite git status to git s
    l = log   /// will rewrite git log to git l
```
or 
```
git config --global alias.showmebranches branch  /// will rewrite git branch to showmebranches 
```

Argument alias 

```
[alias]
    cm = commit -m  // git will take any args and pass ordered to commit -m
```

lots of usefull aliases in internet 

- https://github.com/GitAlias/gitalias
- https://www.durdn.com/blog/2012/11/22/must-have-git-aliases-advanced-examples/
- https://gist.github.com/mwhite/6887990

## Removendo arquivos que foram adicionardos ao gitignore  da arvore 
    
- git update-index --assume-unchanged .\package-lock.json

## Tips

Stop versioning a dir 

- git rm -r --cached myFolder
- push


https://www.toptal.com/developers/gitignore
.gitignore aceita patterns (ex: *.log)






