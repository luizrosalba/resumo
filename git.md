Comandos importantes

# Comandos do Git

============
Um Resumo dos Comandos Git, lista de Comandos importantes do Git

Untracked, Unmodified, Modified e Staged.
-----------------------------------------

## Inicializando



| Command | Description |
| - | - |
| `git init` | Inicializa um Repositório Local |
| `git clone ssh://git@github.com/[username]/[repository-name].git` | Cria uma copia local de um repositório Remoto |

## Basico

Config user 
1) git config user.name "Luiz Rosalba"
2) git config user.email "luizrosalba@gmail.com" 

Criando um repo 

1) cria na mao o repositorio
2) adiciona o origin 
3) git remote add origin https://github.com/luizrosalba/loja-bootstrap.git
daí
4) git push -u origin master
5) daí muda o branch padão no github


| Command | Description |
| - | - |
| `git status` | Check status |
| `git add [file-name.txt]` | Adiciona o arquivo no rastreável pelo git |
| `git add -A` | Adiciona todas as mudanças |
| `git commit -m "[commit message]"` | Commit e comenta as alterações |
| `git rm -r [file-name.txt]` | Remove um arquivo ou uma pasta |

### Branch & Merge

- We merge branches not commits 
- We always merge to the current HEAD branch 
- switch to branch which will receive the update or bugfix of feature (destination)
- git merge branchName (where update comes from)

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
| `git merge [branch name]` | Merge a branch com a branch ativa |
| `git merge [source branch] [target branch]` | Merge a branch com a branch alvo |
| `git stash` | Mudanças stach em um diretório |
| `git stash clear` | remove todas as entradas stachs |

## Switch vs Checkout

- checkout does more then switching branches. 
- you can change branch if file is new (no conflict occurs)
- git switch -c branchName ( create and switch to new branch )

## Fast-Forward

Not all merges are fast-forwards 

Happens when ex. master has commits that your branch does not have (conflicts). A merge commit (with two parents) will be generated on the receiving branch (ex. master) 

## Resolve Conflicts 

conflict -> fix the conflicting file -> remove conflict markers ->commit 


### Sharing & Updating Projects

Qual o comando usado para listar as configurações do Git?
git config --list


| Command | Description |
| - | - |
| `git push origin [branch name]` | Push um branch para o seu repositorio remoto |
| `git push -u origin [branch name]` | Push mudanças para um repositorio remoto |
| `git push` | Push mudanças para o repositório remoto |
| `git push origin --delete [branch name]` | Deleta um branch remoto |
| `git pull` | Atualiza o repositório local para o mais novo commit |
| `git pull origin [branch name]` | Pull mudanças de um repositorio remoto |
| `git remote add origin ssh://git@github.com/[username]/[repository-name].git` | Adiciona um repositório remoto |
| `git remote set-url origin ssh://git@github.com/[username]/[repository-name].git` | Designa um ramo repositorio origin para SSH |

### Inspeção e Comparação


| Command | Description |
| - | - |
| `git log` | Visualizar mudanças e commit hashes  |
| `git log --summary` | Visualizar mudanças(detalhadas) |
| `git log --oneline` | Visualizar mudanças (resumidamente) |
| `git diff [source branch] [target branch]` | Preview mudanças |

### Stash

naming the stash

- git stash push -m "my_stash"

Where "my_stash" is the stash name.

Some more useful things to know: All the stashes are stored in a stack. Type:

- git stash list

This will list down all your stashes.

To apply a stash and remove it from the stash stack, type:

- git stash pop --index n

To apply a stash and keep it in the stash stack, type:

- git stash apply --index n

Where n is the index of the stashed change.

Notice that you can apply a stash and keep it in the stack by using the stash name:

- git stash apply my_stash_name

## configurando o editor para comits (Vscode)

git config core.editor "code --wait"

- se ocorrer um erro : F1 in VsCode ( install code commend in Path)
- tudo que estiver após # não será incluido no commit 

## reset para commit 

git reset --hard (head ou commitID)

## push force sem sobrescrever trabalho

git push --force -with -lease


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

## HEAD 

Pointer to refear the current "location" in your repository 

Head always points to latest commit but we can change this pointer

cat ./git/HEAD (prints where head points. A file that has the commit hash)



